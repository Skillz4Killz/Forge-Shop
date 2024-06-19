import React from "react"
import styled from "styled-components"
import { cleanName, calculateCraftTime } from "../utils/util"
import Image from "./WorkerImage"
import Package from "./PackageImage"
import HeroItem from "../components/HeroItem"
import workers from "../constants/workers"
import stats from "../constants/workers/stats"

const Class = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 367px;
  width: 280px;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
`
const Icons = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: 70px;
  border-radius: 86px;
  background: #38ec94;
  padding-bottom: 10px;
  padding-top: 10px;
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #38ec94;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`
const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 5px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin: 0px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Gold = styled.div`
  position: absolute;
  display: flex;
  width: 280px;
  border-radius: 26px;
  background: #f0f4f8;
  border-radius: 0px 0px 26px 26px;
  text-align: right;
  bottom: 0;
  justify-content: flex-end;
`
const Cost = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin: 10px;
  margin-left: 5px;
  margin-right: 10px;
`

const TierBadge = styled.div`
  width: 30px;
  height: 30px;
  background: #38ec94;
  color: white;
  font-size: 14px;
  border-radius: 100%;
  position: absolute;
  right: 16px;
  top: 16px;
  text-align: center;
  jusitfy-content: center;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`

const EnergyBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`

const EnergyCost = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin-top: 10px;
  margin-left: 6px;
  margin-right: 6px;
`

const PackageIcon = styled.div`
  font-size: 14px;
  border-radius: 100%;
  position: absolute;
  right: 16px;
  top: 50px;
  text-align: center;
  jusitfy-content: center;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default props => {
  let workerLevel = 1
  let secondWorkerLevel = 1
  const firstWorkerData = workers.find(
    worker =>
      worker.title.toLowerCase() ===
      props.details["Required Worker"].toLowerCase()
  )
  const secondWorkerData = workers.find(
    worker =>
      worker.title.toLowerCase() ===
      props.details["Required Worker__1"].toLowerCase()
  )

  if (!firstWorkerData) return null;

  console.log(
    props.details.Name,
    ":",
    props.details["Required Worker"].toLowerCase(),
    firstWorkerData?.name,
    '>',
    props.details["Required Worker__1"].toLowerCase(),
    secondWorkerData?.name
  )

  // console.log("in bc", props)
  try {
    workerLevel =
      parseInt(localStorage.getItem(firstWorkerData?.name.toLowerCase())) || 1

    secondWorkerLevel =
      parseInt(localStorage.getItem(secondWorkerData?.name.toLowerCase())) || 1
  } catch {
    // ignore this try catch is to ignore localstorage missing in gatsby build server side rendering
  }

  const workerBonus =
    parseInt(
      stats
        .find(stat => stat.workerLevel === workerLevel)
        .craftingSpeedBonus.slice(0, -1)
    ) / 100
  const secondWorkerBonus =
    parseInt(
      stats
        .find(stat => stat.workerLevel === secondWorkerLevel)
        .craftingSpeedBonus.slice(0, -1)
    ) / 100
  return (
    <Class>
      <TierBadge className="badge">{props.details.Tier}</TierBadge>
      {props.details["Unlock Prerequisite"] ? (
        <PackageIcon className="badge">
          <Package filename={cleanName(props.details["Unlock Prerequisite"])} />
        </PackageIcon>
      ) : null}
      <Icons style={{ background: "ff665f" }}>
        <Image
          filename={cleanName(props.details.Name)}
          alt={props.details.Name}
        />
      </Icons>
      <Title style={{ color: "ff665f" }}>{props.details.Name}</Title>
      <Description>
        {calculateCraftTime(
          props.details["Crafting Time (seconds)"],
          workerBonus,
          secondWorkerBonus
        )}
      </Description>

      <Description>Requirements:</Description>

      <EnergyBox>
        {props.details["Research Scrolls"] !== "---" &&
        props.details["Research Scrolls"] ? (
          <HeroItem
            filename="bp_unlock"
            alt="bp_unlock"
            style={{
              position: "relative",
              marginTop: "10px",
              display: "block",
            }}
          />
        ) : null}
        {props.details["Research Scrolls"] !== "---" &&
        props.details["Research Scrolls"] ? (
          <EnergyCost>{props.details["Research Scrolls"]}</EnergyCost>
        ) : null}
        <HeroItem
          filename={firstWorkerData.name.toLowerCase()}
          alt={props.details["Required Worker"]}
          style={{
            position: "relative",
            marginTop: "10px",
            display: "block",
          }}
        />

        <EnergyCost>Level {props.details["Worker Level"]}</EnergyCost>

        {secondWorkerData ? (
          <HeroItem
            filename={secondWorkerData.name.toLowerCase()}
            alt={props.details["Required Worker__1"].toLowerCase()}
            style={{
              position: "relative",
              marginTop: "10px",
              display: "block",
            }}
          />
        ) : null}
        {props.details["Required Worker__1"] !== "---" ? (
          <EnergyCost>Level {props.details["Worker Level__1"]}</EnergyCost>
        ) : null}
      </EnergyBox>

      <EnergyBox>
        <EnergyCost>Discount: {props.details["Discount Energy"]}</EnergyCost>
        <HeroItem
          filename="energy"
          alt="energy"
          style={{
            position: "relative",
            marginTop: "10px",
            display: "block",
          }}
        />
        <EnergyCost>Surcharge: {props.details["Surcharge Energy"]}</EnergyCost>
        <HeroItem
          filename="energy"
          alt="energy"
          style={{
            position: "relative",
            marginTop: "10px",
            display: "block",
          }}
        />
      </EnergyBox>

      <Description>Stats:</Description>
      <SubDescription>
        <strong>Worker XP:</strong> {props.details["Worker XP"]} |{" "}
        <strong>XP/Second</strong>{" "}
        {(
          props.details["Worker XP"] /
          calculateCraftTime(
            props.details["Crafting Time (seconds)"],
            workerBonus,
            secondWorkerBonus,
            0,
            0,
            false
          )
        ).toFixed(2)}
      </SubDescription>
      <SubDescription>
        <strong>Merchant XP:</strong> {props.details["Merchant XP"]} |{" "}
        <strong>XP/Second</strong>{" "}
        {(
          parseInt(props.details["Merchant XP"]) /
          calculateCraftTime(
            props.details["Crafting Time (seconds)"],
            workerBonus,
            secondWorkerBonus,
            0,
            0,
            false
          )
        ).toFixed(2)}
      </SubDescription>

      {props.details.Component !== "---" ? (
        <Description>Components:</Description>
      ) : null}

      <EnergyBox style={{ marginTop: "-6px" }}>
        {props.details.Component !== "---" ? (
          <HeroItem
            filename={cleanName(props.details.Component)}
            alt="Component"
            style={{
              position: "relative",
              marginTop: "10px",
              display: "block",
            }}
          />
        ) : null}
        {props.details["Amount Needed"] !== "---" ? (
          <Cost>{props.details["Amount Needed"]}</Cost>
        ) : null}
        {props.details.Component__1 !== "---" ? (
          <HeroItem
            filename={cleanName(props.details.Component__1)}
            alt="Component__1"
            style={{
              position: "relative",
              marginTop: "10px",
              display: "block",
            }}
          />
        ) : null}
        {props.details["Amount Needed__1"] !== "---" ? (
          <Cost>{props.details["Amount Needed__1"]}</Cost>
        ) : null}
      </EnergyBox>
      <Gold>
        {[
          { prop: "ATK", filename: "attack" },
          { prop: "DEF", filename: "defense" },
          { prop: "HP", filename: "health" },
          { prop: "iron", filename: "iron" },
          { prop: "wood", filename: "wood" },
          { prop: "leather", filename: "leather" },
          { prop: "herbs", filename: "herbs" },
          { prop: "steel", filename: "steel" },
          { prop: "ironwood", filename: "ironwood" },
          { prop: "fabric", filename: "fabric" },
          { prop: "oil", filename: "oil" },
          { prop: "Value", filename: "gold" },
        ].map((data, index) => {
          const amount = props.details[data.prop]
          if (!amount || amount === "---") return null
          return (
            <React.Fragment key={index}>
              <HeroItem
                filename={data.filename}
                alt={data.filename}
                style={{
                  position: "relative",
                  marginTop: "10px",
                  display: "block",
                }}
              />
              <Cost>{amount}</Cost>
            </React.Fragment>
          )
        })}
      </Gold>
    </Class>
  )
}

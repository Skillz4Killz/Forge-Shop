import React from "react"
import styled from "styled-components"
import WorkerImage from "./WorkerImage"
import HeroItem from "../components/HeroItem"

const Class = styled.a`
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
`
const Icons = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: 70px;
  border-radius: 26px;
  background: #ff665f;
  padding-bottom: 10px;
  padding-top: 10px;
`
const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin: 2px;
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
  margin-right: 12px;
`

export default props => (
  <Class href={`/champions/${props.details.name}`} className={props.className}>
    <Icons>
      <WorkerImage
        filename={props.details.name.toLowerCase()}
        alt={props.details.name}
      />
    </Icons>
    <Title>{props.details.name}</Title>
    <SubDescription>
      Prerequisites:{" "}
      {props.details.prerequisite !== "---"
        ? props.details.prerequisite
        : "None"}
    </SubDescription>

    <SubDescription>
      Critical Hit: {props.details.criticalHit.chance} Chance of{" "}
      {props.details.criticalHit.damage} Damage
    </SubDescription>

    <SubDescription>Threat Rating: {props.details.threatRating}</SubDescription>

    <SubDescription>
      Unlock Cost: {props.details.unlockCost.coins}
    </SubDescription>

    <Description>Hero Skill: {props.details.skill.name}</Description>
    <SubDescription>{props.details.skill.effect}</SubDescription>
    <Gold>
      {props.details.stats.map((stat, index) => (
        <React.Fragment key={index}>
          <HeroItem
            filename={stat.name}
            alt={stat.name}
            style={{
              position: "relative",
              marginTop: "10px",
              display: "block",
            }}
          />
          <Cost>{stat.amount}</Cost>
        </React.Fragment>
      ))}
    </Gold>
  </Class>
)

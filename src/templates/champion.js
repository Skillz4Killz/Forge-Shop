import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ChampionBox from "../components/ChampionBox"
import SEO from "../components/seo"
import WorkerImage from "../components/WorkerImage"
import { cleanName } from "../utils/util"
import MaterialTable from "material-table"

const Icons = styled.div`
  margin: 0 auto;
  width: 70px;
  border-radius: 26px;
  padding-bottom: 10px;
  padding-top: 10px;
`

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const Section = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Container = styled.div`
  height: 50px;
  width: 100%;
  z-index: -1;
  position: relative;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Page = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  border-radius: 26px;
  margin: auto;
  background: #f0f4f8;
  justify-content: flex-end;
`

export default ({ pageContext: data }) => (
  <Layout>
    <SEO title={data.name}></SEO>
    <Section>
      <Container />
    </Section>
    <div className="CardboxGroupScroll" style={{ marginBottom: "50px" }}>
      <Resources className="CardboxGroup">
        <ChampionBox details={data} className="not-active" />
      </Resources>
    </div>

    <MaterialTable
      columns={[
        { title: "Rank", field: "rank" },
        { title: "Coins", field: "coins" },
        { title: "Health", field: "health" },
        { title: "Attack", field: "attack" },
        { title: "Defense", field: "defense" },
        { title: "Skill", field: "skill" },
        { title: "Total Cost", field: "cost" },
        { title: "Effect", field: "effect" },
      ]}
      data={data.ranks.map(lvl => ({
        ...lvl,
        health: lvl.reward.health,
        attack: lvl.reward.attack,
        defense: lvl.reward.defense,
        skill: lvl.reward.skill.name || '---',
        effect: lvl.reward.skill.effect,
      }))}
      options={{
        sorting: true,
        search: false,
        showTitle: false,
        showFirstLastPageButtons: false,
        pageSize: 20,
        emptyRowsWhenPaging: false,
      }}
    />

    {data.ranks.map((rank, index) => (
      <React.Fragment key={index}>
        {rank.story ? (
          <div className="Selectan">
            <h1 style={{ color: "#ff665f" }}>
              Story #{rank.rank}: {rank.title}
            </h1>
          </div>
        ) : null}
        {rank.story &&
          rank.story.map((page, pageIndex) => (
            <Page key={pageIndex}>
              {pageIndex % 2 === 0 ? (
                <Icons>
                  <WorkerImage
                    filename={cleanName(page.name)}
                    alt={page.name}
                  />
                </Icons>
              ) : (
                <SubDescription>{page.text}</SubDescription>
              )}
              {pageIndex % 2 === 0 ? (
                <SubDescription>{page.text}</SubDescription>
              ) : (
                <Icons>
                  <WorkerImage
                    filename={cleanName(page.name)}
                    alt={page.name}
                  />
                </Icons>
              )}
            </Page>
          ))}
      </React.Fragment>
    ))}
  </Layout>
)

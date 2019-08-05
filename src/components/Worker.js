import React from "react"
import styled from "styled-components"
import "./equipment.css"
import blueprints from "../constants/blueprints"

const Class = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  height: auto;
  border-radius: 26px;
  background: #1a2327;
  border: 2px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  text-transform: uppercase;
  margin-bottom: 0;
`
const Icons = styled.div`
  text-align: center;
  margin-top: 16px;
`
const Icon1 = styled.img`
  position: relative;
`
const Icon2 = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid #fec470;
  margin-left: 11px;
  margin-top: 11px;
`

const ItemIcons = styled.div`
  text-align: center;
  margin-top: 16px;
  display: flex;
`
const ItemIcon1 = styled.img`
  position: relative;
  flex: 50%;
`
const ItemIcon2 = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid #fec470;
  margin-left: 11px;
  margin-top: 11px;
  flex: 50%;
`
const Blueprint = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #fec470;
  margin-left: auto;
`

const Description = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`
export default props => (
  <Class>
    <Icons>
      <Icon2
        src={require(`../images/Portraits/${props.details.name.toLowerCase()}.png`)}
        alt={props.details.name}
      />
      <Icon1
        src={require(`../images/Equipment.png`)}
        alt={props.details.name}
      />
    </Icons>
    <Title>{props.details.name}</Title>
    <Description>{props.details.title}</Description>
    <Description>Level Required: {props.details.level_required}</Description>
    <Description>
      Unlock Cost: {props.details.gold_cost} Gold OR {props.details.gem_cost}{" "}
      Gems
    </Description>
    {props.details.blueprint_unlocks.length ? (
      <div>
        <ItemIcons>
          {props.details.blueprint_unlocks.map((blueprint, index) => {
            const blueprintName = blueprint.toLowerCase().replace(/\s/g, "")
            const itemType = blueprints.find(
              b => b.Name.toLowerCase().replace(/\s/g, "") === blueprintName
            ).Type
            return (
              <div key={index}>
                <Blueprint
                  src={require(`../images/Items/${itemType}s/${blueprintName}.png`)}
                  alt={props.details.name}
                />
              </div>
            )
          })}
        </ItemIcons>
      </div>
    ) : null}
  </Class>
)
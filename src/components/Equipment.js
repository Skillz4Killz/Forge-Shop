import React from "react"
import styled from "styled-components"

const Class = styled.div`
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
const Sun = styled.img`
  display: block;
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  text-transform: uppercase;
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
const SubDescription = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`
export default props => (
    <Class>
      <Icons>
        <Icon2 src={require(`../images/Equipment/${props.details.name}.png`)} alt={props.details.name} />
        <Icon1 src={require(`../images/Equipment.png`)} alt={props.details.name} />
      </Icons>
      <Title>{props.details.name}</Title>
      <SubDescription>{props.details.description}</SubDescription>
      <SubDescription>{props.details.cooldown}</SubDescription>
      <SubDescription>{props.details.duration}</SubDescription>
    </Class>
)

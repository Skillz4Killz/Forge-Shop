import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Class = styled.div`
  position: relative;
  width: 280px;
  height: auto;
  align-items: stretch;
  border-radius: 26px;
  background: white;
  border: 1px solid transparent;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  user-select: none;
  box-shadow: 0px 8px 12px #bdccdb;
  text-align: center;
`
const Image = styled.img`
  position: relative;
  width: 280px;
  border-radius: 26px 26px 0px 26px;
`
const Button = styled.button`
  border: 1.5px solid rgba(189, 204, 219, 0.5);
  font-weight: 350;
  font-size: 14px;
  width: 85%;
  height: 40px;
  border-radius: 10px;
  -webkit-font-smoothing: antialiased;
  white-space: pre-line;
  text-align: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  text-align: center;
  font-weight: 600;
  color: #406081;
  margin-bottom: 16px;
  &:hover {
    background: rgba(189, 204, 219, 0.5);
  }
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: rgb(95, 169, 255);
  text-transform: uppercase;
`
const SubDescription = styled.h3`
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #406081;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const LoreBox = props => (
  <Link to={props.link}>
    <Class>
      <Image src={props.image || "https://i.imgur.com/SXOUs4O.jpg"} />
      <div>
        <Title>{props.title}</Title>
        <SubDescription>{props.description}</SubDescription>
      </div>
      <Button>READ MORE</Button>
    </Class>
  </Link>
)

export default LoreBox

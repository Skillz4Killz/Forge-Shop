import React from "react"
import styled from "styled-components"
import { cleanName } from "../utils/util"
import Image from "./WorkerImage"

const BlueprintBox = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  align-items: stretch;
  border-radius: 40px;
  background: #38ec94;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 16px;
  margin-top: 16px;
  margin-right: 16px;
  cursor: pointer;
  outline: none;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0px 10px 25px 1px #bdccdb;
    z-index: 1;
  }
`

const SubDescription = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
  width: 80px;
`

export default props => {
  const name = cleanName(props.details.Name)
  // <Link to={`/blueprints/${props.details.Name}`}>
  //         <Image
  //           filename={name}
  //           alt={props.title}
  //         />
  //       </Link>
  return (
    <div>
      <BlueprintBox>
        <Image
          filename={name}
          alt={props.title}
          style={{
            marginTop: "15px",
          }}
        />
      </BlueprintBox>
      <SubDescription>{props.details.Name}</SubDescription>
    </div>
  )
}

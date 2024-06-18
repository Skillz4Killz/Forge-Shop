import "./guide.css"
import React from "react"

export default props => (
  <div>
    {props.helmet || ""}
    <div className="guide">
      <h1 className="guideTitle">{props.title}</h1>
      <p className="guideDate">{props.date}</p>
      <div
        className="guideContent"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  </div>
)

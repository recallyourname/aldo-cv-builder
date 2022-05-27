import React from "react";
import style from "./CVTemplate.module.css";
import header from "../assets/aldoHeader.png";
import EmploymentHistory from "../components/Form/EmploymentHistory";
import ToolsAndSkills from "../components/Form/ToolsAndSkills";
import OtherThingsToKnow from "../components/Form/OtherThingsToKnow";
import Portfolio from "../components/Form/Portfolio";

export default function CVTemplate(props) {

  return (
    <div
      id="divToPrint"
      className={style.container}
    >
      <div>
        <img
          src={header}
          alt="header"
          style={{ width: "100%", height: 200, objectFit: "cover" }}
        />
      </div>
      <div className={style.content}>
        <h1>{props.name}</h1>

        <h2>История</h2>
        <EmploymentHistory history={props.employment} />

        <h2>Инструменты и навыки</h2>
        <ToolsAndSkills tools={props.tools} />

        <h2>Дополнительная информация</h2>
        <OtherThingsToKnow other={props.other} />

        <h2>Портфолио</h2>
        <Portfolio portfolio={props.portfolio}/>
      </div>
    </div>
  );
}

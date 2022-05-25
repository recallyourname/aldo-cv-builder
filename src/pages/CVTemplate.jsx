import React from "react";
import style from "./CVTemplate.module.css";
import header from "../assets/aldoHeader.png";
import EmploymentHistory from "../components/Form/EmploymentHistory";
import ToolsAndSkills from "../components/Form/ToolsAndSkills";
import OtherThingsToKnow from "../components/Form/OtherThingsToKnow";
import Portfolio from "../components/Form/Portfolio";

const employment = [
  {
    companyName: "Effective",
    companyUrl: "https://effective.band",
    positionName: "Рекрутер",
    sinceDate: "Январь 2021",
    dueDate: "Сейчас",
  },
  {
    companyName: "Student Labs",
    companyUrl: "https://studentlabs.ru/",
    positionName: "Организатор",
    sinceDate: "Май 2021",
    dueDate: "Сейчас",
  },
  {
    companyName: "Aldo",
    companyUrl: "https://aldohire.com",
    positionName: "Chief Talent Acquisition Officer",
    sinceDate: "Май 2021",
    dueDate: "Сейчас",
  },
];

const tools = [
  {
    category: "Языки программирования и фреймворки",
    elements: ["Javascript", "React.js", "Python", "Django"],
  },
  {
    category: "Базы данных и СУБД",
    elements: ["Postgres", "MySQL"],
  },
  {
    category: "Методологии разработки ПО",
    elements: ["Agile", "Scrum"],
  },
];

const other = [
  {
    thing:
      "Студент ОмГТУ озвучил аудиогид на английском языке для приложения «Достоевский. Омск»",
    thingUrl: "https://omgtu.ru/general_information/news/?ELEMENT_ID=73138",
  },
  {
    thing:
      "Команда Omsk Seaty: студенты Андрей Краснов (фулстек-разработчик), Никита Ведькал (бэкенд-разработчик), Максим Турчин (фронтенд-разработчик), Мария Черепанова (дизайнер), ментор проекта и фронтенд-разработчик Владислав Унчурис",
		thingUrl: "https://omskzdes.ru/interviews/72318.html",
	},
];

export default function CVTemplate() {
  return (
    <div className={style.container}>
      <div>
        <img
          src={header}
          alt="header"
          style={{ width: 1000, height: 200, objectFit: "cover" }}
        />
      </div>
      <div className={style.content}>
        <h1>Nikita Vedkal</h1>

        <h2>История</h2>
        <EmploymentHistory history={employment} />

        <h2>Инструменты и навыки</h2>
        <ToolsAndSkills tools={tools} />

        <h2>Дополнительная информация</h2>
        <OtherThingsToKnow other={other} />

				<h2>Портфолио</h2>
				<Portfolio />
      </div>
    </div>
  );
}

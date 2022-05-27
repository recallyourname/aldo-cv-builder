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

const portfolio = [
  {
    projectName: "Student Labs",
    description: `
    Омские студенты-программисты, дизайнеры и тестировщики будут работать в командах над IT-проектами.

    Проекты для IT-лаборатории — реальные digital-кейсы разработки сайтов и мобильных приложений, которые проходят предварительный отбор от организаторов. Участникам предстоит работать под наставничеством экспертов в конкурентных условиях, которые будут способствовать профессиональному росту.
    
    После успешного завершения проекта участники получат ценный опыт, работу в портфолио и денежное вознаграждение.
    
    Студентам участие в лаборатории засчитывается как производственная практика.
    `,
    projectUrl: "https://studentlabs.ru"
  },
  {
    projectName: "Aldohire",
    description: `
    We're committed to finding the best fit to your company's needs. In order for the match to be relevant, we're looking to understand the nature of your product or service, the structure of your engineering team, as well as what you believe your perfect developer is like. No company is alike, and top talent knows the kind of company they'd prefer to join.
    `,
    projectUrl: "https://www.aldohire.com/"
  },
  {
    projectName: "Конструктор резюме",
    description: `
    Проприетарный инструмент для компании Aldo призванный оптимизировать процесс создания корпоративных резюме для последующей передачи клиенту.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nam, voluptas voluptatum nihil iure magni provident, nemo ex possimus saepe molestiae. A laudantium odio amet repellendus autem ipsam praesentium obcaecati.
    `,
    projectUrl: "https://profiles.aldohire.com/aldo-profile-anton-bektiashkin"
  }
]

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

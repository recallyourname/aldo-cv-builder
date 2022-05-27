import React, { useState } from "react";
import CVTemplate from "./CVTemplate";
import "./Form.css";

export default function Form() {
  const [employmentHistoryList, setEmploymentHistoryList] = useState([
    [
      {
        employment: "",
        companyUrl: "",
        positionName: "",
        sinceDate: "",
        dueDate: "",
      },
    ],
  ]);

	const [name, setName] = useState("")

	const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [toolsAndSkills, setToolsAndSkills] = useState([
    [
      {
        category: "",
        elements: "",
      },
    ],
  ]);

  const [things, setThings] = useState([
    [
      {
        thing: "",
        thingUrl: "",
      },
    ],
  ]);

  const [portfolio, setPortfolio] = useState([
    [
      {
        projectName: "",
        description: "",
        projectUrl: "",
      },
    ],
  ]);

  const [push, setPush] = useState(false);

  const handlePush = () => {
    setPush(true);
  };

  const handlePortfolioChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...portfolio];
    list[index][name] = value;
    setPortfolio(list);
  };

  const handlePortfolioRemove = (index) => {
    const list = [...portfolio];
    list.splice(index, 1);
    setPortfolio(list);
  };

  const handlePortfolioAdd = () => {
    setPortfolio([
      ...portfolio,
      {
        projectName: "",
        description: "",
        projectUrl: "",
      },
    ]);
  };

  const handleThingsChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...things];
    list[index][name] = value;
    setThings(list);
  };

  const handleThingsRemove = (index) => {
    const list = [...things];
    list.splice(index, 1);
    setThings(list);
  };

  const handleThingsAdd = () => {
    setThings([
      ...things,
      {
        category: "",
        elements: "",
      },
    ]);
  };

  const handleToolsChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...toolsAndSkills];
    list[index][name] = value;
    setToolsAndSkills(list);
  };

  const handleToolsRemove = (index) => {
    const list = [...toolsAndSkills];
    list.splice(index, 1);
    setToolsAndSkills(list);
  };

  const handleToolsAdd = () => {
    setToolsAndSkills([
      ...toolsAndSkills,
      {
        category: "",
        elements: "",
      },
    ]);
  };

  const handleEmploymentChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...employmentHistoryList];
    list[index][name] = value;
    setEmploymentHistoryList(list);
  };

  const handleEmploymentRemove = (index) => {
    const list = [...employmentHistoryList];
    list.splice(index, 1);
    setEmploymentHistoryList(list);
  };

  const handleEmploymentAdd = () => {
    setEmploymentHistoryList([
      ...employmentHistoryList,
      {
        employment: "",
        companyUrl: "",
        positionName: "",
        sinceDate: "",
        dueDate: "",
      },
    ]);
  };

  console.log(portfolio);

  if (!push) {
    return (
      <div className="container">
        <h1>Форма создания CV</h1>
        <form>

					{/* name */}
					<div className="employment-form">
            <h2>Имя</h2>
            <div className="employment-form-field">
                <div className="input-group-container">
                  <div className="employment-input-group">
                    <label htmlFor="name" className="input-label">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => handleNameChange(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
            </div>
					</div>

          {/* Employment History Form */}
          <div className="employment-form">
            <h2>История</h2>
            <div className="employment-form-field">
              {employmentHistoryList.map((employment, index) => (
                <div className="input-group-container">
                  <div className="employment-input-group" key={index}>
                    <label htmlFor="employment" className="input-label">
                      {index === 0 && "Место работы"}
                      <input
                        type="text"
                        name="employment"
                        id="employment"
                        value={employment.employment}
                        onChange={(e) => handleEmploymentChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="companyUrl" className="input-label">
                      {index === 0 && "Ссылка"}
                      <input
                        type="text"
                        name="companyUrl"
                        id="companyUrl"
                        value={employment.companyUrl}
                        onChange={(e) => handleEmploymentChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="positionName" className="input-label">
                      {index === 0 && "Название позиции"}
                      <input
                        type="text"
                        name="positionName"
                        id="positionName"
                        value={employment.positionName}
                        onChange={(e) => handleEmploymentChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="sinceDate" className="input-label">
                      {index === 0 && "Дата начала"}
                      <input
                        type="text"
                        name="sinceDate"
                        id="sinceDate"
                        value={employment.sinceDate}
                        onChange={(e) => handleEmploymentChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="dueDate" className="input-label">
                      {index === 0 && "Дата конца"}
                      <input
                        type="text"
                        name="dueDate"
                        id="dueDate"
                        value={employment.dueDate}
                        onChange={(e) => handleEmploymentChange(e, index)}
                        required
                      />
                    </label>
                  </div>
                  <div className="second-division">
                    {employmentHistoryList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleEmploymentRemove(index)}
                        className="remove-btn"
                      >
                        <span>🗑</span>
                      </button>
                    )}
                  </div>
                  {employmentHistoryList.length - 1 === index &&
                    employmentHistoryList.length < 10 && (
                      <button
                        type="button"
                        onClick={handleEmploymentAdd}
                        className="add-btn"
                      >
                        <span>+</span>
                      </button>
                    )}
                </div>
              ))}
            </div>
            <div className="output">
              <h2>Предпросмотр</h2>
              {employmentHistoryList &&
                employmentHistoryList.map((employment, index) => (
                  <ul key={index}>
                    {employment.employment && (
                      <li>
                        {" "}
                        <a
                          href={employment.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {employment.employment}
                        </a>{" "}
                        ({employment.positionName} — {employment.sinceDate} —{" "}
                        {employment.dueDate})
                      </li>
                    )}
                  </ul>
                ))}
            </div>
          </div>

          {/* Technical Expertize */}
          <div className="employment-form">
            <h2>Инструменты и навыки</h2>
            <div className="employment-form-field">
              {toolsAndSkills.map((tools, index) => (
                <div key={index} className="input-group-container">
                  <div className="employment-input-group" key={index}>
                    <label htmlFor="category" className="input-label">
                      {index === 0 && "Категория"}
                      <input
                        type="text"
                        name="category"
                        id="category"
                        value={tools.category}
                        onChange={(e) => handleToolsChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="elements" className="input-label">
                      {index === 0 && "Инструменты"}
                      <input
                        type="text"
                        name="elements"
                        id="elements"
                        value={tools.elements}
                        onChange={(e) => handleToolsChange(e, index)}
                        required
                      />
                    </label>
                  </div>
                  <div className="second-division">
                    {toolsAndSkills.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleToolsRemove(index)}
                        className="remove-btn"
                      >
                        <span>🗑</span>
                      </button>
                    )}
                  </div>
                  {toolsAndSkills.length - 1 === index &&
                    toolsAndSkills.length < 10 && (
                      <button
                        type="button"
                        onClick={handleToolsAdd}
                        className="add-btn"
                      >
                        <span>+</span>
                      </button>
                    )}
                </div>
              ))}
            </div>
            <div className="output">
              <h2>Предпросмотр</h2>
              {toolsAndSkills &&
                toolsAndSkills.map((tools, index) => (
                  <ul key={index}>
                    {tools.category && (
                      <li>
                        {tools.category} : {tools.elements}
                      </li>
                    )}
                  </ul>
                ))}
            </div>
          </div>

          {/* other things to know */}
          <div className="employment-form">
            <h2>Дополнительная информация</h2>
            <div className="employment-form-field">
              {things.map((tools, index) => (
                <div key={index} className="input-group-container">
                  <div className="employment-input-group" key={index}>
                    <label htmlFor="thing" className="input-label">
                      {index === 0 && "Факт"}
                      <input
                        type="text"
                        name="thing"
                        id="thing"
                        value={things.thing}
                        onChange={(e) => handleThingsChange(e, index)}
                        required
                      />
                    </label>
                    <label htmlFor="thingUrl" className="input-label">
                      {index === 0 && "Ссылка"}
                      <input
                        type="text"
                        name="thingUrl"
                        id="thingUrl"
                        value={things.thing}
                        onChange={(e) => handleThingsChange(e, index)}
                        required
                      />
                    </label>
                  </div>
                  <div className="second-division">
                    {things.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleThingsRemove(index)}
                        className="remove-btn"
                      >
                        <span>🗑</span>
                      </button>
                    )}
                  </div>
                  {things.length - 1 === index && things.length < 40 && (
                    <button
                      type="button"
                      onClick={handleThingsAdd}
                      className="add-btn"
                    >
                      <span>+</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="output">
              <h2>Предпросмотр</h2>
              {things &&
                things.map((thing, index) => (
                  <ul key={index}>
                    {thing.thing && (
                      <li>
                        {thing.thing}{" "}
                        <a
                          href={thing.thingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn more...
                        </a>
                      </li>
                    )}
                  </ul>
                ))}
            </div>
          </div>

          {/* portfolio */}

          <div className="employment-form">
            <h2>Портфолио</h2>
            <div className="employment-form-field">
              {portfolio.map((portfolioElement, index) => (
                <div key={index} className="input-group-container">
                  <div className="employment-input-group" key={index}>
                    <label htmlFor="projectName" className="input-label">
                      {index === 0 && "Название проекта"}
                      <input
                        type="text"
                        name="projectName"
                        id="projectName"
                        value={portfolioElement.projectName}
                        onChange={(e) => handlePortfolioChange(e, index)}
                        required
                      />
                    </label>

                    <label htmlFor="projectUrl" className="input-label">
                      {index === 0 && "Ссылка на проект"}
                      <input
                        type="text"
                        name="projectUrl"
                        id="projectUrl"
                        value={portfolioElement.projectUrl}
                        onChange={(e) => handlePortfolioChange(e, index)}
                        required
                      />
                    </label>

                    <label htmlFor="description" className="input-label">
                      {index === 0 && "Описание"}
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={portfolioElement.description}
                        onChange={(e) => handlePortfolioChange(e, index)}
                        required
                      />
                    </label>
                  </div>
                  <div className="second-division">
                    {portfolio.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handlePortfolioRemove(index)}
                        className="remove-btn"
                      >
                        <span>🗑</span>
                      </button>
                    )}
                  </div>
                  {portfolio.length - 1 === index && portfolio.length < 40 && (
                    <button
                      type="button"
                      onClick={handlePortfolioAdd}
                      className="add-btn"
                    >
                      <span>+</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="output">
              <h2>Предпросмотр</h2>
              {portfolio &&
                portfolio.map((portfolioElement, index) => (
                  <ul key={index}>
                    {portfolioElement.projectName && (
                      <li>
                        <a
                          href={portfolioElement.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {portfolioElement.projectName}{" "}
                        </a>
                        - {portfolioElement.description}
                      </li>
                    )}
                  </ul>
                ))}
            </div>
          </div>
          <button onClick={handlePush}>Отправить</button>
        </form>
      </div>
    );
  } else {
    return (
      <CVTemplate
				name={name}
        employment={employmentHistoryList}
        tools={toolsAndSkills}
        other={things}
        portfolio={portfolio}
      />
    );
  }
}

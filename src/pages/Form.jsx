import React, { useState } from "react";
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

  const [toolsAndSkills, setToolsAndSkills] = useState([
    [
      {
        category: "",
        elements: "",
      },
    ],
  ]);

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

  console.log(employmentHistoryList);
	console.log(toolsAndSkills);


  return (
    <div className="container">
      <h1>Форма создания CV</h1>
      <form>
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
				
      </form>
    </div>
  );
}

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
    setEmploymentHistoryList([...employmentHistoryList, { service: "" }]);
  };

  console.log(employmentHistoryList);

  return (
    <div className="container">
      <h1>Форма создания CV</h1>
      <form>
        <div className="employment-form">
          <h2>История</h2>
          <div className="employment-form-field">
            {employmentHistoryList.map((employment, index) => (
              <div className="input-group-container">
                <div className="employment-input-group" key={index}>
                  <label htmlFor="employment" className="input-label">
                    Место работы
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
                    Ссылка
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
                    Ссылка
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
                    Дата начала
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
                    Дата конца
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
                      <span>Remove</span>
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
            <h2>Output</h2>
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
                      ({employment.positionName} - {employment.sinceDate} -{" "}
                      {employment.dueDate})
                    </li>
                  )}
                </ul>
              ))}
          </div>
        </div>
        
      </form>
    </div>
  );
}

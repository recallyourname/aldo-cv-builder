import React from "react";

export default function EmploymentHistory(props) {
  const employmentHistory = props.history.map((obj) => (
    <li key={obj.companyName}>
      <a href={obj.companyUrl} target="_blank" rel="noopener noreferrer">{obj.employment}</a> ({obj.positionName} - {obj.sinceDate} - {obj.dueDate})
    </li>
  ));
  return <ul>{employmentHistory}</ul>;
}

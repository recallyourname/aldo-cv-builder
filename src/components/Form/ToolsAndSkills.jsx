import React from "react";

export default function ToolsAndSkills(props) {
  const tools = props.tools.map((obj) => (
    <li key={obj.category}>
      <li>
        {obj.category} : {obj.elements}
      </li>
    </li>
  ));
  return <ul>{tools}</ul>;
}

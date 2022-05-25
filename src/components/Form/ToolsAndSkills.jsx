import React from "react";

export default function ToolsAndSkills(props) {
	const tools = props.tools.map((obj) => (
    <li key={obj.category}>
			{obj.category}
			<ul>
				{obj.elements.map(element => <li key={element}>{element}</li>)}
			</ul>
		</li>
  ));
  return <ul>{tools}</ul>;
}

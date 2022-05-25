import React from "react";

export default function OtherThingsToKnow(props) {
  const other = props.other.map((obj) => (
    <li key={obj.thing}>
      {obj.thing}
			{" "}
      <a href={obj.thingUrl} target="_blank" rel="noopener noreferer">Learn more...</a>
    </li>
  ));
  return <div>{other}</div>;
}

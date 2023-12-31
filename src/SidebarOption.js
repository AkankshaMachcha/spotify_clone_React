import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option = "test", Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{option}</h5> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
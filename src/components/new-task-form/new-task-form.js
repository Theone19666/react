import React from "react";
import TextBox from "../text-box";

function NewTaskForm() {
  const propsObj = { className: "edit", defaultValue: "Editing task" };
  return <TextBox {...propsObj} />;
}

export default NewTaskForm;

import * as React from "react";
import "./StepText.css";

type StepTextProps = {
  text: string;
};
const StepText: React.FC<StepTextProps> = function ({ text }) {
  return <h2 className="step--text">{text}</h2>;
};

export default StepText;

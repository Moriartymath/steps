import * as React from "react";
import "./StepText.css";

type StepTextProps = {
  text: string;
};
const StepText: React.FC<StepTextProps> = function ({ text }) {
  return <h3 className="step--text">{text}</h3>;
};

export default StepText;

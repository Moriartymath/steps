import * as React from "react";
import "./Step.css";

type StepProps = {
  number: number;
  isActive: boolean;
};
const Step: React.FC<StepProps> = function ({ number, isActive }) {
  const [currentActive, setActive] = React.useState(isActive);

  return (
    <li
      onClick={() => (!currentActive ? setActive(true) : "")}
      className={`list--item${currentActive ? " active" : ""}`}
    >
      <span>{number}</span>
    </li>
  );
};

export default Step;

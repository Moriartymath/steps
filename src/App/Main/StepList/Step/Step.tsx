import * as React from "react";
import "./Step.css";

type StepProps = {
  number: number;
  isActive: boolean;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};
const Step: React.FC<StepProps> = function ({
  number,
  isActive,
  setActiveStep,
}) {
  return (
    <li
      onClick={() => setActiveStep(number)}
      className={`list--item${isActive ? " active" : ""}`}
    >
      <span>{number}</span>
    </li>
  );
};

export default Step;

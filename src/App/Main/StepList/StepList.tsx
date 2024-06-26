import "./StepList.css";
import Step from "./Step/Step.tsx";
import { useEffect, useState } from "react";
type StepListProps = {
  steps: Array<string>;
};

function StepList({ steps }: StepListProps) {
  const [activeStepNumber, setActiveStep] = useState(1);

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <ul className="step--list">
      {steps.map((step, index) => (
        <Step
          number={index + 1}
          key={index}
          isActive={index + 1 === activeStepNumber}
        />
      ))}
    </ul>
  );
}

export default StepList;

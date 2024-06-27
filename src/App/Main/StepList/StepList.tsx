import "./StepList.css";
import Step from "./Step/Step.tsx";
import { useState } from "react";
import StepText from "./StepText/StepText.tsx";
import NavButtonList from "./NavButtonList/NavButtonList.tsx";

type StepListProps = {
  steps: Array<string>;
};

function StepList({ steps }: StepListProps) {
  const [activeStepNumber, setActiveStep] = useState(1);
  const allSteps = steps.map((step, index) => {
    const isActive = index + 1 <= activeStepNumber;
    return (
      <Step
        number={index + 1}
        key={index}
        isActive={isActive}
        setActiveStep={setActiveStep}
      />
    );
  });

  return (
    <>
      <ul className="step--list">{allSteps}</ul>
      <StepText
        text={`Step ${activeStepNumber}: ${steps[activeStepNumber - 1]}`}
      />
      <NavButtonList
        setActiveStep={setActiveStep}
        numberOfSteps={steps.length}
      />
    </>
  );
}

export default StepList;

import { useEffect, useState } from "react";
import "./Main.css";
import NavButtonList from "./NavButtonList/NavButtonList.tsx";
import StepList from "./StepList/StepList.tsx";
import StepText from "./StepText/StepText.tsx";

function Main() {
  const steps = ["Learn React", "Apply the job", "Invest your new income"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const list = <NavButtonList />;
  useEffect(() => {
    console.log("hello");
  }, [list]);
  return (
    <main className="main">
      <StepList steps={steps} />
      <StepText text={currentStep} />
      {list}
    </main>
  );
}

export default Main;

import { useEffect, useState } from "react";
import "./Main.css";

import StepList from "./StepList/StepList.tsx";
type MainProps = {
  closed: boolean;
};

const steps = [
  "Learn React 🤓",
  "Apply for jobs 😎",
  "Invest your new income 🥳",
];

function Main({ closed }: MainProps) {
  return (
    <main className="main" style={{ display: closed ? "none" : "flex" }}>
      <StepList steps={steps} />
    </main>
  );
}

export default Main;

import { useEffect, useState } from "react";
import "./Main.css";

import StepList from "./StepList/StepList.tsx";

const steps = [
  "Learn React 🤓",
  "Apply for jobs 😎",
  "Invest your new income 🥳",
];

function Main() {
  return (
    <main className="main">
      <StepList steps={steps} />
    </main>
  );
}

export default Main;

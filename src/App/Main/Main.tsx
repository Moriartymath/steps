import { useEffect, useState } from "react";
import "./Main.css";
import NavButtonList from "./NavButtonList/NavButtonList.tsx";
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
      <NavButtonList />
    </main>
  );
}

export default Main;

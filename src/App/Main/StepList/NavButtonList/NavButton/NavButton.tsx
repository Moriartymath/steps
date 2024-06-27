import "./NavButton.css";
import * as React from "react";

type NavButtonProps = {
  text: string;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  numberOfSteps: number;
};
const firstStep = 1;

const NavButton: React.FC<NavButtonProps> = function ({
  text,
  setActiveStep,
  numberOfSteps,
}) {
  return (
    <button
      onClick={() =>
        text === "Previous"
          ? setActiveStep((step) => (step - 1 >= firstStep ? step - 1 : step))
          : setActiveStep((step) =>
              step + 1 <= numberOfSteps ? step + 1 : step
            )
      }
      className="button"
    >
      {text}
    </button>
  );
};

export default NavButton;

import NavButton from "./NavButton/NavButton.tsx";
import "./NavButtonList.css";

const nameButtons = ["Previous", "Next"];
type NavButtonsProps = {
  numberOfSteps: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const NavButtonList: React.FC<NavButtonsProps> = function ({
  setActiveStep,
  numberOfSteps,
}) {
  return (
    <div className="buttons">
      {nameButtons.map((text, index) => (
        <NavButton
          setActiveStep={setActiveStep}
          numberOfSteps={numberOfSteps}
          text={text}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavButtonList;

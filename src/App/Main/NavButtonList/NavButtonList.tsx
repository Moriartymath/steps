import NavButton from "./NavButton/NavButton.tsx";
import "./NavButtonList.css";

const NavButtonList = function () {
  const names = ["Previous", "Next"];
  return (
    <div className="buttons">
      {names.map((text, index) => (
        <NavButton text={text} key={index} />
      ))}
    </div>
  );
};

export default NavButtonList;

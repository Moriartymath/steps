import "./App.css";
import Main from "./Main/Main.tsx";
import "./CloseButton/CloseButton.tsx";
import CloseButton from "./CloseButton/CloseButton.tsx";
import { useState } from "react";

function App() {
  const [closed, setClosed] = useState(false);

  return (
    <div className="App">
      <CloseButton setClosed={setClosed} />
      <Main closed={closed} />
    </div>
  );
}

export default App;

import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [show, setShow] = useState(false);
  const helloWorld = () => setShow(!show);

  const buttonAtributes = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    backgroundColor: "var(--color-brand-1)",
    color: "var(--grey-5)",
    hoverBackground: "var(--color-brand-3)",
    hoverColor: "var(--color-brand-4)",
    onClick: helloWorld,
  };

  return (
    <div>
      {/* this is just a button test you can comment or delete it if it conflicts*/}
      {show ? "Hello World" : <Fragment />}
      <Button {...buttonAtributes}>Test</Button>
    </div>
  );
}

export default App;

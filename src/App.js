import "./App.css";
import { useState } from "react";
import Steps from "./components/Steps";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlerPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handlerNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen ? (
        <Steps
          messages={messages}
          step={step}
          setStep={setStep}
          handlerNext={handlerNext}
          handlerPrevious={handlerPrevious}
        />
      ) : (
        <h3 className="heading">Open Steps by Click on icon</h3>
      )}
    </div>
  );
}

export default App;

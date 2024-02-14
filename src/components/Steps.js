import React from "react";
import StepMessage from "./StepMessage";
import Button from "./Button";
function Steps({ step, setStep, handlerNext, handlerPrevious, messages }) {
  return (
    <div>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <StepMessage step={step}>{messages[step - 1]}</StepMessage>

        <div className="buttons">
          <Button bgColor="#7950f2" textColor="#fff" onClick={handlerPrevious}>
            <span>👈</span>Previous
          </Button>
          <Button bgColor="#7950f2" textColor="#fff" onClick={handlerNext}>
            Next <span>👉</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Steps;

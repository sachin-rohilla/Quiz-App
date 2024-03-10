import { useState } from "react";
import { SiRepublicofgamers } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalData, setFinalData] = useState([]);
  const stepOneData = [
    {
      id: 1,
      question: "What is the capital of India ?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      correctAnswer: 1,
    },
  ];

  const stepTwoData = [
    {
      id: 1,
      question: "Which of the following is not a programming language?",
      options: ["C++", "C", "Java", "Python"],
      correctAnswer: 3,
    },
  ];

  const stepThreeData = [
    {
      id: 1,
      question: "How many states are there in India?",
      options: ["31", "29", "30", "28"],
      correctAnswer: 4,
    },
  ];

  const handleSelectAnswer = (data) => {
    setSelectedAnswer(data);
    setFinalData([...finalData, data]);
  };

  const handleNextStep = () => {
    if (!selectedAnswer) {
      toast.error("Please select an option");
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
    setSelectedAnswer(null);
  };

  console.log(currentStep, selectedAnswer, finalData);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-96 border p-4 shadow-lg rounded-lg">
          <h1 className="flex items-center justify-center gap-2 font-semibold text-xl ">
            Quiz App
            <SiRepublicofgamers className="text-3xl" />
          </h1>

          {currentStep === 1 &&
            stepOneData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => handleSelectAnswer(option)}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}

          {currentStep === 2 &&
            stepTwoData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => handleSelectAnswer(option)}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}

          {currentStep === 3 &&
            stepThreeData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => handleSelectAnswer(option)}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}
          <button
            onClick={handleNextStep}
            className="bg-yellow-400 text-white rounded-lg w-32 py-2 mt-4 float-right"
          >
            Next
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;

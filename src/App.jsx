import { useState } from "react";
import { SiRepublicofgamers } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalData, setFinalData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
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

  const stepFourData = [
    {
      id: 1,
      question: "who is the prime minister of India",
      options: [
        "Narendra Modi",
        "Ramnath Kovind",
        "Nawaz Sharifuddin",
        "Jawaharlal Nehru",
      ],
      correctAnswer: 1,
    },
  ];

  const handleSelectAnswer = (data, correctAnswer) => {
    setSelectedAnswer({ correctAnswer: correctAnswer, chooseOption: data });
  };

  const handleNextStep = () => {
    if (!selectedAnswer) {
      toast.error("Please select an option");
      return;
    }
    setFinalData([...finalData, selectedAnswer]);

    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsSubmit(true);
      toast.success("Quiz Completed");
    }
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
            !isSubmit &&
            stepOneData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => {
                      handleSelectAnswer(
                        option,
                        item.correctAnswer === index + 1
                      );
                    }}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer?.chooseOption === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}

          {currentStep === 2 &&
            !isSubmit &&
            stepTwoData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => {
                      handleSelectAnswer(
                        option,
                        item.correctAnswer === index + 1
                      );
                    }}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer?.chooseOption === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}

          {currentStep === 3 &&
            !isSubmit &&
            stepThreeData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => {
                      handleSelectAnswer(
                        option,
                        item.correctAnswer === index + 1
                      );
                    }}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer?.chooseOption === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}

          {currentStep === 4 &&
            !isSubmit &&
            stepFourData?.map((item) => (
              <div>
                <h2>{item.question}</h2>
                {item.options?.map((option, index) => (
                  <p
                    onClick={() => {
                      handleSelectAnswer(
                        option,
                        item.correctAnswer === index + 1
                      );
                    }}
                    className={`border rounded-lg p-3 mt-2 cursor-pointer${
                      selectedAnswer?.chooseOption === option
                        ? " bg-yellow-400 text-white"
                        : ""
                    }`}
                  >{`${index + 1}. ${option}`}</p>
                ))}
              </div>
            ))}
          {!isSubmit && (
            <button
              onClick={handleNextStep}
              className="bg-yellow-400 text-white rounded-lg w-32 py-2 mt-4 float-right"
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          )}

          {isSubmit && (
            <div className="flex flex-col items-center gap-1 text-base">
              <p>Total Question : {finalData?.length}</p>
              <p>
                Correct Answer :{" "}
                {
                  finalData.filter((item) => item?.correctAnswer === true)
                    ?.length
                }
              </p>
              <p>
                Wrong Answer :{" "}
                {
                  finalData.filter((item) => item?.correctAnswer === false)
                    ?.length
                }
              </p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;

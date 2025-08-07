"use client";
import calculateResult from "@/utils/calculateResult";
import { TestContext } from "@/context/TestContext";
import { useContext } from "react";
import he from "he";
import { useRouter } from "next/navigation";
import cleanup1 from "@/utils/cleanup1";
import cleanup2 from "@/utils/cleanup2";

const ResultIcon = ({ isCorrect }) => {
  if (isCorrect) {
    return (
      <svg
        className="w-6 h-6 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    );
  }
  return (
    <svg
      className="w-6 h-6 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};


export default function Page() {

  const{extractedQuestion} = useContext(TestContext);
  var questionList
  if (typeof window === 'undefined') {
      questionList = []; 
  }
  else  questionList = JSON.parse(localStorage.getItem("questionList"));
  const resultData = calculateResult(extractedQuestion.current,questionList);
  

  const scorePercentage = Math.round(
    (resultData.results.correctAnswers / resultData.results.totalQuestions) * 100
  );

  const route = useRouter();
  const handleTryAgain = ()=>{
    if(typeof window !== "undefined"){
      cleanup1();
    }
    route.replace("/quiz");
  }

  const handleBackHome = ()=>{
    if(typeof window !== "undefined"){
      cleanup2();
    }
    route.replace("/");
  }
  return (
    <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center">
            Quiz Results
          </h1>
        </header>

        {/* Results Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Score Circle */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-blue-500"
                strokeDasharray={`${scorePercentage}, 100`}
                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-bold text-gray-800">
                {scorePercentage}%
              </span>
              <p className="text-gray-500">Score</p>
            </div>
          </div>

          {/* Stats Breakdown */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-center sm:text-left">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg w-36">
              <p className="text-3xl font-bold">{resultData.results.correctAnswers}</p>
              <p>Correct</p>
            </div>
            <div className="bg-red-100 text-red-800 p-4 rounded-lg w-36">
              <p className="text-3xl font-bold">{resultData.results.incorrectAnswers}</p>
              <p>Incorrect</p>
            </div>
            <div className="bg-gray-100 text-gray-800 p-4 rounded-lg w-36">
              <p className="text-3xl font-bold">{resultData.results.unanswered}</p>
              <p>Unanswered</p>
            </div>
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Review Your Answers
          </h2>
          <div className="space-y-4">
            {extractedQuestion.current.map((q,i) => (
              <div
                key={i}
                className="border border-gray-200 p-4 rounded-lg flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-700">
                    {i+1}. {he.decode(q.question)}
                  </p>
                  <p
                    className={`text-sm ${
                      resultData.questionList[i].isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Your answer: {(resultData.questionList[i].response == "") ? "Not Answered" : resultData.questionList[i].response}
                    {!resultData.questionList[i].isCorrect && ` | Correct: ${he.decode(q.correct_answer)}`}
                  </p>
                </div>
                <ResultIcon isCorrect={resultData.questionList[i].isCorrect} />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md" onClick={()=>{handleTryAgain()}}>
            Try Again
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md" onClick={()=>{handleBackHome()}}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

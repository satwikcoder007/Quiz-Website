"use client";

import { useState, useEffect ,useContext } from "react";
import he from "he"
import shuffleArray from "@/utils/shuffel";
import { QuestionContext } from "@/context/QuestionContext";

export default function Card(props) {
  
  const{currentQuestion,setCurrentQuestion} = useContext(QuestionContext)
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(props.questionList[currentQuestion].response || "");
  }, [props.questionList,currentQuestion]);
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtons = (val) => {
    const arr = [...props.questionList];

    if (val == 1) {
      arr[currentQuestion].status = 2;
      arr[currentQuestion].response = selectedOption;
      props.setQuestionList(arr);
      setCurrentQuestion((currentQuestion + 1) % 15);
      setSelectedOption('');
    } else if (val == 2) {
      arr[currentQuestion].status = 3;
      arr[currentQuestion].response = '';
      props.setQuestionList(arr);
      setCurrentQuestion((currentQuestion + 1) % 15);
      setSelectedOption('');
    } else if (val == 3) {
      arr[currentQuestion].status = (selectedOption === '' ? 3 : 1);
      arr[currentQuestion].response = selectedOption;
      props.setQuestionList(arr);
      setCurrentQuestion((currentQuestion + 1) % 15);
      setSelectedOption('');
    } else {
      arr[currentQuestion].response = '';
      props.setQuestionList(arr);
      setSelectedOption('');
    }
  };

  
  const options = [
    props.question.correct_answer,
    ...props.question.incorrect_answers
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl">
      <h2 className="text-[25px] font-semibold text-gray-800 mb-4">
        Question. {currentQuestion + 1}
      </h2>

      <hr className="border-gray-200 mb-3" />

      <div className="mb-6">
        <p className="text-[18px] text-gray-700 font-black">
          {he.decode(props.question.question)}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-3 cursor-pointer text-[15px]">
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{he.decode(option)}</span>
          </label>
        ))}
      </div>

      <div className="flex space-x-4">
        <button onClick={() => handleButtons(1)} className="bg-yellow-400 hover:bg-black text-white py-2 px-4 rounded-lg transition duration-300 text-[13px]">
          Mark For Review
        </button>
        <button onClick={() => handleButtons(2)} className="bg-gray-600 hover:bg-black text-white py-2 px-4 rounded-lg transition duration-300 text-[13px]">
          Skip
        </button>
        <button onClick={() => handleButtons(4)} className="bg-blue-500 hover:bg-black text-white py-2 px-4 rounded-lg transition duration-300 text-[13px]">
          Clear
        </button>
        <div className="w-[40px]"></div>
        <button onClick={() => handleButtons(3)} className="bg-green-700 hover:bg-black text-white py-2 px-4 rounded-lg transition duration-300 text-[13px]">
          Save & Next
        </button>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useContext } from "react";
import { QuestionContext } from "@/context/QuestionContext";
import { PreviousQuestionContext } from "@/context/PreviousQuestionContext";

export const QuestionNavigator = (props) => {
  const { currentQuestion, setCurrentQuestion } = useContext(QuestionContext);
  const { previousQuestion, setPreviousQuestion } = useContext(
    PreviousQuestionContext
  )
  const getClassByStatus = () => {
    switch (props.data.status) {
      case 1:
        return "bg-green-600 text-white";
      case 2:
        return "bg-yellow-400 text-black";
      case 3:
        return "bg-red-400 text-white";
      default:
        return "border-2 text-black";
    }
  };

  const handleClick = () => {
    var arr = [...props.questionList];
    if (
      previousQuestion!=props.data.val-1 &&
      previousQuestion!=-1 &&
      arr[previousQuestion].response == "" &&
      arr[previousQuestion].status != 2
    ) arr[previousQuestion].status = 3;

    props.setQuestionList(arr);
    setCurrentQuestion(props.data.val - 1);
    setPreviousQuestion(props.data.val - 1);
  };

  return (
    <div
      className={`box text-[15px]  font-semibold w-10 h-10 text-center flex items-center justify-center ${getClassByStatus()} hover:shadow-2xl hover:w-12 hover:h-12 transition-all duration-200`}
      onClick={() => {
        handleClick();
      }}
    >
      {props.data.val}
    </div>
  );
};

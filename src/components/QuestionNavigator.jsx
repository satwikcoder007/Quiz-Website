import React from "react";

export const QuestionNavigator = (props) => {
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

  const handleClick = ()=>{
    var arr = [...props.questionList]
    arr[props.data.val-1].status = 1;
    props.setQuestionList(arr);
  }
  
  return (
    <div
      className={`box text-[15px] font-semibold w-10 h-10 text-center flex items-center justify-center ${getClassByStatus()} hover:shadow-2xl hover:w-11 hover:h-11 transition-all duration-200`}
      onClick={()=>{handleClick()}}
    >
      {props.data.val}
    </div>
  );
};

const calculateResult = (extractedQuestion, questionList) => {

    console.log(extractedQuestion)
  const results = {
    totalQuestions: extractedQuestion.length,
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
  };

  for (let i = 0; i < extractedQuestion.length; i++) {
    if(questionList[i].response==""){
        results.unanswered++;
        questionList[i].isCorrect= false;
        continue;
    }
    
    if(extractedQuestion[i].correct_answer == questionList[i].response){
        results.correctAnswers++;
        questionList[i].isCorrect = true;
    }
    else{
        results.incorrectAnswers++;
        questionList[i].isCorrect = false;
    }
  }

  return {results,questionList}
};

export default calculateResult;

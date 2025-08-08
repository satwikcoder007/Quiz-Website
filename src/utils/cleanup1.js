const cleanup1 = ()=>{
    localStorage.removeItem("questionList");
    localStorage.removeItem("fetchedQuestion");
    localStorage.removeItem("startTime");
}

export default cleanup1;
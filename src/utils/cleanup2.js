const cleanup2 = ()=>{
    localStorage.removeItem("questionList");
    localStorage.removeItem("fetchedQuestion");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("startTime");
}

export default cleanup2;
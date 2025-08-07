const cleanup2 = ()=>{
    localStorage.removeItem("questionList");
    localStorage.removeItem("fetchedQuestion");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
}

export default cleanup2;
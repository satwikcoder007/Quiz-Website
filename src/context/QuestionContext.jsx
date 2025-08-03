"use client"

import React ,{createContext,useContext,useState} from 'react'
export const QuestionContext = createContext(null);
export  function QuestionProvider(props) {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  return (
    <QuestionContext.Provider value={{currentQuestion,setCurrentQuestion}}>
      {props.children}
    </QuestionContext.Provider>
  )
}
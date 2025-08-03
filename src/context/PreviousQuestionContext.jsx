"use client"

import React ,{createContext,useContext,useState} from 'react'
export const PreviousQuestionContext = createContext(null);
export  function PreviousQuestionProvider(props) {
  const [previousQuestion,setPreviousQuestion] = useState(-1);
  return (
    <PreviousQuestionContext.Provider value={{previousQuestion,setPreviousQuestion}}>
      {props.children}
    </PreviousQuestionContext.Provider>
  )
}
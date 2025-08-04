"use client"

import React ,{createContext,useContext,useRef} from 'react'
export const TestContext = createContext(null);
export  function TestProvider(props) {
  const extractedQuestion = useRef(null);
  return (
    <TestContext.Provider value={{extractedQuestion}}>
      {props.children}
    </TestContext.Provider>
  )
}
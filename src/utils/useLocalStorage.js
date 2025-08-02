"use client";

import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue; 
    }
    try {
     
      const item = window.localStorage.getItem(key);

      return (item === 'undefined') ?initialValue()  : JSON.parse(item);
    } catch (error) {
     
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error("Error writing to localStorage:", error);
      }
    }
  }, [key, storedValue]); 

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
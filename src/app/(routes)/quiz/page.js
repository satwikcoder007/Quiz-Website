"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import { QuestionNavigator } from "@/components/QuestionNavigator";
import useLocalStorage from "@/utils/useLocalStorage";
export default function Page() {
  const [questionList, setQuestionList] = useLocalStorage(
    "questionList",
    () => {
      return Array.from({ length: 15 }, (_, i) => ({
        val: i + 1,
        status: 0,
      }));
    }
  );

  const [fetchFlag, setFetchFlag] = useState(0); // Make sure useState is imported if not already.
  const [currentQuestion, setCurrent] = useState(0);
  const data = useRef(null);

  // useEffect for API fetching (remains the same)
  useEffect(() => {
    const fetchData = async () => {
      try {
        var totalData = await axios.get(
          "https://opentdb.com/api.php?amount=15"
        );
        data.current = totalData.data.results;
        console.log("Fetched API Data");
        setFetchFlag(1);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-[calc(100vh-7vw)] flex flex-col justify-around items-center bg-white">
      {!fetchFlag ? (
        <Loader />
      ) : (
        <>
          {/* section for question navigation */}
          <div className=" flex  justify-center items-center space-x-3">
            {questionList.map((data) => {
              return (
                <QuestionNavigator
                  key={data.val}
                  data={data}
                  setQuestionList={setQuestionList}
                  questionList={questionList}
                />
              );
            })}
          </div>
          <div>

          </div>
        </>
      )}
    </div>
  );
}

"use client";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import Card from "@/components/Card";
import { QuestionNavigator } from "@/components/QuestionNavigator";
import useLocalStorage from "@/utils/useLocalStorage";
import { QuestionContext } from "@/context/QuestionContext";
import { TestContext } from "@/context/TestContext";
import { useRouter } from "next/navigation";
import Timer from "@/components/Timer";

export default function Page() {
  const [time, setTime] = useState(5);
  var route = useRouter();
  const [questionList, setQuestionList] = useLocalStorage(
    "questionList",
    () => {
      return Array.from({ length: 15 }, (_, i) => ({
        val: i + 1,
        status: 0,
        response: "",
      }));
    }
  );

  const [fetchFlag, setFetchFlag] = useState(0); // Make sure useState is imported if not already.

  const { currentQuestion, setCurrentQuestion } = useContext(QuestionContext);
  const { extractedQuestion } = useContext(TestContext);
  const data = useRef(null);

  // useEffect for API fetching (remains the same)
  var interval;
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data");
        var totalData = await axios.get(
          "https://opentdb.com/api.php?amount=15"
        );
        data.current = totalData.data.results;
        extractedQuestion.current = totalData.data.results;
        console.log("Fetched API Data");
        setFetchFlag(1);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();

    const timer = () => {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          console.log(prevTime + " minutes left");
          if (prevTime === 0) {
            clearInterval(interval);
            console.log("time over");
            return 0;
          }
          return prevTime - 1;
        });
      }, 5000);
    };

    timer();
  }, []);

  return (
    <div className="h-[calc(100vh-7vw)] flex flex-col justify-around items-center bg-white">
      {!fetchFlag ? (
        <Loader />
      ) : (
        <>
          {/* section for question navigation */}
          <div className=" flex  justify-center items-center space-x-3 cursor-pointer">
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
          <div className=" flex items-center justify-center space-x-7">
            <Card
              question={data.current[currentQuestion]}
              setQuestionList={setQuestionList}
              questionList={questionList}
            />
            <Timer initialMinutes={4}></Timer>
          </div>
          <div>
            <button
              className=" bg-green-700 text-white rounded-lg px-3 py-2 cursor-pointer hover:bg-black"
              onClick={() => {
                route.push("/result");
              }}
            >
              Submit Test
            </button>
          </div>
        </>
      )}
    </div>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuestionProvider } from "@/context/QuestionContext";
import { PreviousQuestionProvider } from "@/context/PreviousQuestionContext";
import { TestProvider } from "@/context/TestContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Nav Bar  */}
      <QuestionProvider>
        <PreviousQuestionProvider>
          <TestProvider>
            <body className="h-screen w-screen ">
              <div className="h-[7vw] w-screen bg-green-800 flex items-center pl-[5vw]">
                <div className=" text-shadow-white font-black text-[30px]">
                  Quiz App
                </div>
              </div>
              {children}
            </body>
          </TestProvider>
        </PreviousQuestionProvider>
      </QuestionProvider>
    </html>
  );
}

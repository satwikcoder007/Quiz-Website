import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuestionProvider } from "@/context/QuestionContext";
import { PreviousQuestionProvider } from "@/context/PreviousQuestionContext";
import { TestProvider } from "@/context/TestContext";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Nav Bar  */}
      <QuestionProvider>
        <PreviousQuestionProvider>
          <TestProvider>
            <body className="h-screen w-screen ">
              <Navbar/>
              {children}
            </body>
          </TestProvider>
        </PreviousQuestionProvider>
      </QuestionProvider>
    </html>
  );
}

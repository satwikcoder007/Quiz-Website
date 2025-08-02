
import Login from "@/components/Login";
export default function Home() {
  return (
    <div className="h-[calc(100vh-7vw)] flex flex-row justify-around items-center ">
      {/* left-side box */}
      <div className="box w-[50vw] h-[calc(100vh-7vw)] bg-black flex flex-col justify-center items-center">
        {/* textcontent */}
        <div className="box border-2 border-white p-2">
          <div className=" text-white font-black text-[35px]">
            Welcome to the Quiz!
          </div>
        </div>
        <div className="text-white font-sembold text-[14px] mt-2 h-[20vh] flex flex-col justify-center">
          Ready to test your knowledge and have fun? Let's get started!
        </div>
        {/* instructions */}
        <div className="box border-2 border-white p-3">
          <div className="flex flex-col justify-center items-center">
            <div className="text-green-700 font-semibold text-[15px] mb-2">
              📋 Guidelines
            </div>
            <ul className="text-white text-[11px] font-normal space-y-3 list-disc list-inside">
              <li>
                Duration: The quiz consists of 15 questions and must be
                completed in 30 minutes
              </li>
              <li>
                Attempt: Each question has only one correct answer. No negative
                marking
              </li>
              <li>
                Navigation: You can move between questions using the Next and
                Previous buttons
              </li>
              <li>
                Submission: The quiz will auto-submit when the time ends, or you
                can manually submit.
              </li>
              <li>
                Scoring: Results will be shown immediately after submission.
              </li>
              <li>
                Note: Going or pressing back at any moment will cause the quiz to exit.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* right-side box */}
      <div className="box w-[50vw] h-[calc(100vh-7vw)] bg-white flex flex-col justify-center items-center">
        <Login/>
      </div>
    </div>
  );
}

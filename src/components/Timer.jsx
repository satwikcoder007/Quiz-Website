import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Timer = ({ initialMinutes = 5 }) => {
  const route = useRouter();
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    if (time <= 0) {
      route.push("/result");
      return;
    }
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]); 

  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-lg inline-flex items-center space-x-2">
    
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      
      <span className="font-mono text-2xl tracking-widest">
        {formattedMinutes}:{formattedSeconds}
      </span>
    </div>
  );
};

export default Timer;
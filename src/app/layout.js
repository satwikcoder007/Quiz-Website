import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Nav Bar  */}

      <body className="h-screen w-screen ">
        <div className="h-[7vw] w-screen bg-green-800 flex items-center pl-[5vw]">
          <div className=" text-shadow-white font-black text-[30px]">
            Quiz App
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

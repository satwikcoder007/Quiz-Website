"use client";

import { IoMdPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter()
  const [check, setCheck] = useState(0);
  const [userDetails,setUserDetails] = useState({
    name:"",
    email:""
  })

  const handleInput = (event)=>{
    console.log(userDetails)
    setUserDetails({...userDetails,[event.target.name]:event.target.value})
  }
  
  const handleSubmit = ()=>{
    if(userDetails.name=="" || userDetails.email==""){
        alert("please enter all the fields");
        return;
    }
    localStorage.setItem("name", JSON.stringify(userDetails.name));
    localStorage.setItem("email",JSON.stringify(userDetails.email));
    route.push('/quiz')
  }
  return (
    <div className=" box border-2 border-black flex flex-col p-[30px] justify-center items-center space-y-4">
      <div className="text-green-700 text-[25px] font-black mb-[8vh]">
        Login to Begin
      </div>
      {/* input fields */}
      <div className=" flex flex-col justify-center items-center space-y-4">
        <div className="flex">
          <div className=" h-[30px] w-[30px] bg-green-700 flex justify-center items-center">
            <IoMdPerson className=" text-white text-[20px]" />
          </div>
          <input
            type="text"
            className=" box-border border-2 border-green-700 px-[10px] text-black"
            placeholder="Enter your name"
            name="name"
            onChange={(event)=>{handleInput(event)}}
          />
        </div>
        <div className="flex">
          <div className=" h-[30px] w-[30px] bg-green-700 flex justify-center items-center">
            <IoMdMail className=" text-white text-[20px]" />
          </div>
          <input
            type="email"
            className=" box-border border-2 border-green-700 px-[10px] text-black"
            placeholder="Enter your email"
            name="email"
            onChange={(event)=>{handleInput(event)}}
          />
        </div>
      </div>
      {/* check box handling*/}
      <div className=" flex justify-center items-center">
        <span>
          <input type="checkbox" onChange={()=>{setCheck(!check)}}/>
        </span>
        <span className="text-black">
          Read all the instruction carefullly
        </span>
      </div>
      {/* Submit button*/}
      <div className=" flex flex-row">
        <div className="w-[15vw]"></div>
        <button
          className={
            check
              ? "bg-green-700 px-[12px] py-[3px] font-semibold rounded-sm "
              : "bg-green-700 px-[12px] py-[3px] font-semibold rounded-sm cursor-not-allowed opacity-50"
          }
          onClick={()=>{handleSubmit()}}
        >
          Start
        </button>
      </div>
    </div>
  );
}

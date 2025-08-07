"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import confirmation from "@/utils/confirmation";
import { useEffect, useState } from "react";
import HomeMain from "./HomeMain";

export default function HomeWrapper() {
  const route = useRouter();
  const path = usePathname();
  const [flag, setFlag] = useState(0);
  console.log(path);
  useEffect(() => {
    if (path == "/") {
      if (typeof window !== "undefined") {
        if (localStorage.getItem("questionList")) {
          if (confirmation()) route.replace("/result");
          else route.push("/quiz");
        } else {
          setFlag(1);
        }
      } else setFlag(1);
    } else setFlag(1);
  }, [path]);

  if (flag === 0) return null;

  return (
    <>
        <HomeMain/>
    </>
  );
}

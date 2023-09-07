"use client";

import { questoinState } from "@/store/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Home() {
  const [questions,setQuestions] = useRecoilState(questoinState);
  return (
    <div>
      <Link href={"/questions"}>
        <button>go question</button>
      </Link>
      <div>
        select question list :
        {questions.map((question,index) => <div>
          {index}번 : {question}
        </div>)}
      </div>
    </div>
  );
}

"use client";

import { questoinState } from "@/store/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Home() {
  const [questions, setQuestions] = useRecoilState(questoinState);
  return (
    <div>
      <Link href={"/"}>
        <button>go home</button>
      </Link>
      <div>
          {questions.length} 번 질문:
      </div>
      <div>
        <button onClick={() => setQuestions([...questions, "o"])}>o</button>
      </div>
      <div>
        <button onClick={() => setQuestions([...questions, "x"])}>x</button>
      </div>
    </div>
  );
}

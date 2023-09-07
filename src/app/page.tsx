"use client";

import { questoinState } from "@/store/atoms";
import { questoinsDataSelector } from "@/store/selectors";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Home() {
  const [questions, setQuestions] = useRecoilState(questoinState);
  const { numO, numX } = useRecoilValue(questoinsDataSelector);

  return (
    <div>
      <Link href={"/questions"}>
        <button>go question</button>
      </Link>
      <div>
        o갯수 : {numO} / x갯수 : {numX}
      </div>
      <div>
        select question list :
        {questions.map((question) => (
          <div>
            {question.no}번 : {question.answer}
          </div>
        ))}
      </div>
    </div>
  );
}

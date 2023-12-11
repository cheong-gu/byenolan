import TodayNolanKeepButton from "./todayNolanKeepButton.client";
import TodayNolanProgressBar from "./toddayNolanProgressBar.client";

export default async function TodayNolanResultServer() {
  const res = await fetch("https://byenolan.shop/nolan/todayNolan", {
    next: { revalidate: 0 },
  }).then((res) => res.json());

  const answers = res[0].survey;

  const answerA = answers.find((answer: any) => answer.answer_no == "A");
  const answerB = answers.find((answer: any) => answer.answer_no == "B");

  return (
    <>
      <TodayNolanProgressBar
        percent={parseInt(answerA.formattedPercentage.replace("%", ""))}
        answer={answerA.answer_no}
        discription={answerA.answer}
      ></TodayNolanProgressBar>
      <TodayNolanProgressBar
        answer={answerB.answer_no}
        percent={parseInt(answerB.formattedPercentage.replace("%", ""))}
        discription={answerB.answer}
      ></TodayNolanProgressBar>
      <TodayNolanKeepButton />
    </>
  );
}

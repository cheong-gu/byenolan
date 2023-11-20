export default async function TodayNolanTitleServer() {
  const res = await fetch("https://byenolan.shop/nolan/todayNolan").then(
    (res) => res.json()
  );

  const question = res[0].survey[0].question;

  return <>{question}</>;
}

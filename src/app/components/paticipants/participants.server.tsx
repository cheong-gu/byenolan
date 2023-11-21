import style from "./participants.module.css";

export default async function Participants() {
  const res = await fetch("https://byenolan.shop/nolan/todayNolan").then(
    (res) => res.json()
  );

  const participants = res[0].totalcount;

  const { wrap, title, num, unit } = style;

  return (
    <div className={wrap}>
      <div className={title}>참여한 사람</div>
      <div className={num}>{participants}</div>
      <div className={unit}>명</div>
    </div>
  );
}

import Image from "next/image";
import TitleTextImg from "../../../public/home/1_title_text_392x132.svg";
import IconBoltImg from "../../../public/home/1_icon_bolt_16x16.png";
import styles from "./styles/todayNolanTitle.module.css";

export default async function TodayNolanTitle() {
  const res = await fetch("https://byenolan.shop/nolan/todayNolan").then(
    (res) => res.json()
  );

  const question = res[0].survey[0].question;

  const { wrapS, titleS, questionS } = styles;

  return (
    <div className={wrapS}>
      <Image src={TitleTextImg} alt="title" width={392} height={132}></Image>
      <div className={titleS}>
        <Image src={IconBoltImg.src} alt="bolt" width={16} height={16}></Image>
        오늘의 논란
        <Image src={IconBoltImg.src} alt="bolt" width={16} height={16}></Image>
      </div>
      <div className={questionS}>{question}</div>
    </div>
  );
}

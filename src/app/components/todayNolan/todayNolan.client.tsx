'use client'

import TitleTextImg from "../../../public/home/1_title_text_392x132.svg";
import SelectImg from "../../../public/home/1_select_392x308.svg";
import IconBoltImg from "../../../public/home/1_icon_bolt_16x16.png";
import SelectAIconImg from "../../../public/home/1_select_icon_A_84x84.svg";
import SelectBIconImg from "../../../public/home/1_select_icon_B_84x84.svg";
import Image from "next/image";
import styled from "@emotion/styled";
import { HomeProgressBar } from "../progressbar/HomeProgressBar.server";
import Link from "next/link";
import { useTimer } from "@/hooks/homeTimer.hook";
import { useRecoilState } from "recoil";
import { homeNolanState, homeShowModalState } from "@/store/home/atoms";

const TitleText = styled.div`
  width: 392px;
  height: 132px;
  margin: 0 auto;
  position: relative;
`;
const Select = styled.div`
  width: 392px;
  height: 308px;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
`;

export function TodayNolan() {
  const timer = useTimer();
  const [showModal, setShowModal] = useRecoilState(homeShowModalState);
  const [nolan, setNolan] = useRecoilState(homeNolanState);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <>
      <TitleText>
        <Image src={TitleTextImg} alt="title" width={392} height={132}></Image>
        <span
          style={{
            position: "absolute",
            top: "15px",
            width: "392px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={IconBoltImg.src}
            alt="bolt"
            width={16}
            height={16}
          ></Image>
          <span
            style={{
              fontFamily: "NeoDunggeunmo Pro",
              fontSize: 20,
            }}
          >
            오늘의 논란
          </span>
          <Image
            src={IconBoltImg.src}
            alt="bolt"
            width={16}
            height={16}
          ></Image>
        </span>
        <span
          style={{
            position: "absolute",
            width: "392px",
            top: "69px",
            display: "flex",
            justifyContent: "center",
            fontFamily: "NeoDunggeunmo Pro",
            color: "#5B3A09",
            letterSpacing: "-0.18px",
            lineHeight: "140%",
          }}
        >
          사귄지 얼마 안된 연인이
          <br />
          형제를 보여준다고 한다
        </span>
      </TitleText>
      <Select>
        <Image
          src={SelectImg}
          alt="selectBackground"
          width={392}
          height={308}
        ></Image>
        {nolan.isSelected ? (
          <div
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              top: "63px",
              width: "392px",
              justifyItems: "center",
              flexDirection: "column",
            }}
          >
            <HomeProgressBar
              percent={51}
              //   selected={selectedAnswer == "A"}
              selected={false}
              discription="부담없이 만난다"
            ></HomeProgressBar>
            <HomeProgressBar
              percent={49}
              //   selected={selectedAnswer == "B"}
              selected={false}
              discription="부담스러워 거절한다"
            ></HomeProgressBar>
            <Link href={"survey/info"}>
              <button>{"계속 참여하기 •'-'•)و✧"}</button>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              top: "63px",
              width: "392px",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 51,
                width: 124,
                cursor: "pointer",
              }}
              onClick={() => {
                setShowModal(true);
                // setSelectedAnswer("A");
              }}
            >
              <Image
                src={SelectAIconImg}
                alt="selectA"
                width={124}
                height={84}
              ></Image>
              <span
                style={{
                  fontFamily: "Pretendard",
                  color: "#5B3A09",
                  letterSpacing: "-0.16px",
                  lineHeight: "140%",
                  fontSize: 16,
                }}
              >
                부담없이<br></br>만난다
              </span>
            </div>
            <div
              style={{
                height: "120px",
                width: "1px",
                backgroundColor: "#E0DDDC",
                margin: "0 20px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowModal(true);

                // setSelectedAnswer("B");
              }}
            >
              <Image
                src={SelectBIconImg}
                alt="selectB"
                width={124}
                height={84}
              ></Image>
              <span
                style={{
                  fontFamily: "Pretendard",
                  color: "#5B3A09",
                  letterSpacing: "-0.16px",
                  lineHeight: "140%",
                  fontSize: 16,
                }}
              >
                부담없이<br></br>만난다
              </span>
            </div>
          </div>
        )}
        {nolan.isSelected ? (
          <></>
        ) : (
          <span
            style={{
              position: "absolute",
              fontFamily: "DOSGothic",
              top: "226px",
              width: " 392px",
              left: 0,
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontFamily: "Pretendard",
                color: "#5B3A09",
              }}
            >
              남은 시간
            </span>
            <span
              style={{
                fontSize: 16,
                color: "#5B3A09",
                letterSpacing: "0.64px",
              }}
            >{` ${formatTime(timer.hours)}:${formatTime(
              timer.minutes
            )}:${formatTime(timer.seconds)}`}</span>
          </span>
        )}
      </Select>
    </>
  );
}

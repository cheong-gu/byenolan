"use client";

import styled from "@emotion/styled";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import LogoImg from "../public/home/1_title_img_440x160.png";
import TitleTextImg from "../public/home/1_title_text_392x132.svg";
import SelectImg from "../public/home/1_select_392x308.svg";
import IconBoltImg from "../public/home/1_icon_bolt_16x16.png";
import SelectAIconImg from "../public/home/1_select_icon_A_84x84.svg";
import SelectBIconImg from "../public/home/1_select_icon_B_84x84.svg";

import CategoryIconHotImg from "../public/home/1_category_icon_Hot_80x80.svg";
import CategoryIconLoveImg from "../public/home/1_category_icon_love_80x80.svg";
import CategoryIconLockImg from "../public/home/1_category_icon_Lock_80x80.svg";

import SlidBannerLeftnImg from "../public/home/chevron-left.svg";
import SlidBannerRightImg from "../public/home/chevron-right.svg";
import SlidBannerIconImg from "../public/home/1_slide_banner_icon_54x54.svg";
import SlidBannerImg from "../public/home/Slidebanner_392x104.svg";
import modalImg from "../public/home/1_modal_img_248x148.svg";
import CheckImg from "../public/home/FiCheck.svg";

import Image from "next/image";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Link from "next/link";

const Footer = styled.footer`
  margin-top: 277px;
  margin-bottom: 24px;
  width: 440px;
  height: 10vh;
  overflow-y: auto;
  color: #68ACC1;
  font-family: pretendard;
`;

const CategoryDiv = styled.div`
  margin: 64px auto 0 auto;
  width: 240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
`;

const CategoryItem = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryLabel = styled.span`
  width: 80px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-family: NeoDunggeunmo Pro;
  color: #5b3a09;
`;

const ParticipatedDiv = styled.div`
  display: grid;
  margin: 64px auto;
  width: 200px;
  grid-template-columns: auto 12px;
  grid-row-gap: 8px;
  grid-template-rows: 10px auto;
  color: white;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;
const ParticipatedTitle = styled.div`
  grid-column: 1/3;
  color: #5b3a09;

  text-align: center;
  /* H3 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: -0.2px;
`;
const ParticipatedNum = styled.div`
  font-size: 37px;
  color: #5b3a09;
  text-align: center;
  /* Element1 - Neo */
  font-family: DOSGothic;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 52px */
`;
const ParticipatedUnit = styled.div`
  margin-left: 4px;
  color: #5b3a09;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
`;

function sliderFunction(slider: any) {
  let timeout: NodeJS.Timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 1000);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

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

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const ModalConfirm = styled.button`
  display: flex;
  height: 48px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: #2a3351;
  color: #fff;

  text-align: center;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
  margin-top: 16px;
`;

const ModalDenay = styled.button`
  margin-top: 16px;
  color: #93a0c8;

  text-align: center;
  /* H6 - Neo */
  font-family: NeoDunggeunmo Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.16px;
  margin-bottom: 20px;
`;

const KeepButton = styled.button``;

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free-snap",
      loop: true,
      slides: { origin: "center", perView: 1.1, spacing: 8 },
    },
    [sliderFunction]
  );

  const [showModal, setShowModal] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );
    const difference = endOfDay.getTime() - now.getTime();

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };
  return (
    <>
      <Image src={LogoImg.src} alt="logo" width={440} height={160}></Image>
      <TitleText>
        <Image src={TitleTextImg} alt="logo" width={392} height={132}></Image>
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
            alt="logo"
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
            alt="logo"
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
        {isSelected ? (
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
            <ProgressBar
              percent={51}
              selected={selectedAnswer == "A"}
              discription="부담없이 만난다"
            ></ProgressBar>
            <ProgressBar
              percent={49}
              selected={selectedAnswer == "B"}
              discription="부담스러워 거절한다"
            ></ProgressBar>
            <Link href={"survey/info"}>
              <KeepButton>{"계속 참여하기 •'-'•)و✧"}</KeepButton>
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
                setShowModal(true)
                setSelectedAnswer('A')
              }}
            >
              <Image
                src={SelectAIconImg}
                alt="logo"
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
                setShowModal(true)

                setSelectedAnswer('B')
              }}
            >
              <Image
                src={SelectBIconImg}
                alt="logo"
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
        {isSelected ? (
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
            >{` ${formatTime(timeLeft.hours)}:${formatTime(
              timeLeft.minutes
            )}:${formatTime(timeLeft.seconds)}`}</span>
          </span>
        )}
      </Select>
      <CategoryDiv>
        <Link href={"survey/info"}>
          <CategoryItem>
            <Image
              src={CategoryIconHotImg}
              alt="logo"
              width={80}
              height={80}
            ></Image>
            <CategoryLabel>HOT</CategoryLabel>
          </CategoryItem>
        </Link>
        <Link href={"survey/info"}>
          <CategoryItem>
            <Image
              src={CategoryIconLoveImg}
              alt="logo"
              width={80}
              height={80}
            ></Image>
            <CategoryLabel>연애</CategoryLabel>
          </CategoryItem>
        </Link>
        <CategoryItem>
          <Image
            src={CategoryIconLockImg}
            alt="logo"
            width={80}
            height={80}
          ></Image>
          <CategoryLabel>썸</CategoryLabel>
        </CategoryItem>
        <CategoryItem>
          <Image
            src={CategoryIconLockImg}
            alt="logo"
            width={80}
            height={80}
          ></Image>
          <CategoryLabel>꼰대력</CategoryLabel>
        </CategoryItem>
      </CategoryDiv>
      <ParticipatedDiv>
        <ParticipatedTitle>참여한 사람</ParticipatedTitle>
        <ParticipatedNum>34,000</ParticipatedNum>
        <ParticipatedUnit>명</ParticipatedUnit>
      </ParticipatedDiv>
      <div ref={sliderRef} className="keen-slider">
        <SliderCard>
          10대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </SliderCard>
        <SliderCard>
          10대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </SliderCard>
        <SliderCard>
          10대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </SliderCard>
      </div>
      <Footer><div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ fontSize: 14, fontWeight: '600', marginBottom: 6 }}>논란종결</div>
        <div style={{
          display: 'flex',
          marginBottom: 8
        }}>
          <div style={{
            marginRight: 4,
            paddingRight: 4,
            borderRight: '1px solid #68ACC1'
          }}>개인정보 처리방침</div>
          <div style={{
            marginRight: 4,
            paddingRight: 4,
            borderRight: '1px solid #68ACC1'
          }}> 이용약관</div>
          <div>출처</div>
        </div>
        <div>
          <span style={{
            textDecorationLine: 'underline',

          }}>©Mitralmb Team.</span>
          <span>All Right Reserved.</span>
        </div>
      </div></Footer >
      <Modal isOpen={showModal}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={modalImg} alt="logo" width={248} height={148}></Image>
          <span
            style={{
              fontFamily: "NeoDunggeunmo Pro",
              fontSize: 18,
              letterSpacing: "-0.18px",
            }}
          >
            마음을 정하셨나요?
          </span>
          <ModalConfirm
            onClick={() => {
              setIsSelected(true);
              setShowModal(false);
            }}
          >
            네!
          </ModalConfirm>
          <ModalDenay
            onClick={() => {
              setShowModal(false);
            }}
          >
            아직이요
          </ModalDenay>
        </div>
      </Modal>
    </>
  );
}

const SliderCard = ({ children }: any) => (
  <div
    className="keen-slider__slide"
    style={{
      position: "relative",
    }}
  >
    <Image src={SlidBannerImg} alt="logo" width={392} height={104}></Image>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        width: "392px",
        height: "104px",
        alignItems: "center",
      }}
    >
      <Image
        src={SlidBannerLeftnImg}
        alt="logo"
        width={40}
        height={40}
        style={{ marginRight: 4 }}
      ></Image>
      <Image
        src={SlidBannerIconImg}
        alt="logo"
        width={54}
        height={54}
        style={{ marginRight: 8 }}
      ></Image>
      <div
        style={{
          marginRight: 68,
          color: "#5B3A09",
          fontFamily: "Pretendard",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "140% ",
          letterSpacing: "-0.16px",
        }}
      >
        {children}
      </div>
      <Image src={SlidBannerRightImg} alt="logo" width={40} height={40}></Image>
    </div>
  </div>
);

type ModalProps = { isOpen: boolean; children: ReactNode };

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
type ProgressProps = {
  percent: number;
  discription: string;
  selected: boolean;
};

const ProgressBar = ({ percent, discription, selected }: ProgressProps) => (
  <div
    style={{
      position: "relative",
      width: 312,
      height: 64,

      marginBottom: 16,
    }}
  >
    <div
      style={{
        display: "flex",
        width: (312 * percent) / 100,
        background: selected ? "#FFD8F2" : "#EBECF0",
        justifyContent: "space-between",
        height: 64,
        padding: "0 20px",
        alignItems: "center",
        border: "1px solid #5B3A09",
        position: "absolute",
      }}
    ></div>
    <div
      style={{
        top: 0,
        display: "flex",
        width: 312,
        justifyContent: "space-between",
        height: 64,
        padding: "0 20px",
        alignItems: "center",
        border: "1px solid #5B3A09",
        position: "absolute",
      }}
    >
      <div
        style={{
          color: "#5B3A09",
          fontFamily: "Pretendard",
        }}
      >
        {selected ? (
          <Image src={CheckImg} width={18} height={18} alt="check" />
        ) : (
          <></>
        )}

        {discription}
      </div>
      <div
        style={{
          fontFamily: "DOSGothic",
          color: "#5B3A09",
        }}
      >
        {percent}%
      </div>
    </div>
  </div>
);

type backgroundDivProps = {
  img: string,
  width: number,
  height: number,
  children: ReactNode
}

const BackgroundDiv = ({ img, width, height, children }: backgroundDivProps) => <div style={{ position: 'relative' }}>
  <Image src={img} alt="" width={width} height={height}></Image>
  <div style={{ position: 'absolute', width: width, height: height }}>{children}</div>
</div>
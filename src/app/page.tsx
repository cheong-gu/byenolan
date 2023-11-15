"use client";

import styled from "@emotion/styled";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import LogoImg from "../public/1_title_img_440x160.png";
import TitleTextImg from "../public/1_title_text_392x132.svg";
import SelectImg from "../public/1_select_392x308.svg";
import IconBoltImg from "../public/1_icon_bolt_16x16.png";
import SelectAIconImg from "../public/1_select_icon_A_84x84.svg";
import SelectBIconImg from "../public/1_select_icon_B_84x84.svg";
import Image from "next/image";

const Footer = styled.footer`
  background-color: white;
  width: 440px;
  margin: 0 auto;
  height: 10vh;
  overflow-y: auto;
`;

const HomeWrap = styled.div`
  /* background-color: green; */
`;

const TodayNolanHeader = styled.div`
color: white;
background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
  font-size: 20px;
margin: 0 auto;
margin-top: 153px;
width: 392px;
text-align: center;
padding-top: 24px;
padding-bottom: 24px;
`;

const TodayNolanQuestionDiv = styled.div`
color: white;
background: rgb(64, 175, 255);
  font-size: 18px;
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 0.7) 0%,
    rgba(63, 97, 255, 0.6) 100%
  );
margin: 0 auto;
width: 392px;
padding-top: 24px;
text-align: center;
padding-bottom: 24px;  
`;

const TodayNolanAnswerDiv = styled.div`
  margin: 16px auto 0 auto;
    flex-direction: column;
  display: flex;
width: 392px;
  height: 308px;
background: rgb(64, 175, 255);
`;

const TodayNolanAnswerItemDiv = styled.div`
  display: grid;
  margin: 0 auto;
  width: 344px;
    justify-items: center;
  grid-template-columns: 152px 40px 152px;
  margin-top: 43px;
`;

const TodayNolanAnswerVs = styled.div`
  margin-top: 55px;
color: white;
`;

const TodayNolanAnswerItem = styled.span`
  width: 128px;
`;

const TodayNolanAnswerIcon = styled.span`
  width: 128px;
  height: 128px;
  display: inline-block;
  background-color: white;
`;

const TodayNolanAnswerLabel = styled.span`
  width: 128px;
  display: inline-block;
  color:white;
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
`;

const TodayNolanAnswerRestTime = styled.div`
  display: inline-block;
  margin: 0 auto;
  margin-top: 24px;
color: white;
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

const CategoryIcon = styled.span`
  width: 80px;
  height: 80px;
  display: inline-block;
  background-color: white;
`;

const CategoryLabel = styled.span`
  width: 80px;
  display: inline-block;
  color:white;
  text-align: center;
  font-size: 24px;
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
`;
const ParticipatedNum = styled.div`
  font-size: 37px;
`;
const ParticipatedUnit = styled.div`
  
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

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free-snap",
      loop: true,
      slides: { origin: "center", perView: 1.1, spacing: 8 },
    },
    [sliderFunction]
  );

  console.log(IconBoltImg);
  return (
    <HomeWrap>
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
            alignItems: 'center',
          }}
        >
          <Image
            src={IconBoltImg.src}
            alt="logo"
            width={16}
            height={16}
          ></Image>
          오늘의 논란
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
          }}
        >
          사귄지 얼마 안된 연인이
          <br />
          형제를 보여준다고 한다
        </span>
      </TitleText>
      <Select>
        <Image src={SelectImg} alt="logo" width={392} height={308}></Image>
        <div style={{
          display: 'grid',
          gridTemplateColumns: ' 10fr 84px 1fr 84px 10fr',
          position: 'absolute',
          alignItems: 'center',
          top: '63px',
          width: '392px',
          justifyItems: 'center',
        }}>
          <div></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Image src={SelectAIconImg} alt="logo" width={84} height={84}></Image>
            부담없이<br></br>만난다
          </div>
          <div style={{
            height: '120px',
            width: '1px',
            backgroundColor: '#E0DDDC'
          }}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Image src={SelectBIconImg} alt="logo" width={84} height={84}></Image>
            부담없이<br></br>만난다
          </div>
          <div></div>
        </div>

      </Select>
      <TodayNolanHeader>오늘의 논란</TodayNolanHeader>
      <TodayNolanQuestionDiv>
        사귄지 얼마 안된 연인이 <br />
        형제를 보여준다고한다
      </TodayNolanQuestionDiv>
      <TodayNolanAnswerDiv>
        <TodayNolanAnswerItemDiv>
          <TodayNolanAnswerItem>
            <TodayNolanAnswerIcon></TodayNolanAnswerIcon>
            <TodayNolanAnswerLabel>
              부담없이 만난다 부담없이 만난다
            </TodayNolanAnswerLabel>
          </TodayNolanAnswerItem>
          <TodayNolanAnswerVs>vs</TodayNolanAnswerVs>
          <TodayNolanAnswerItem>
            <TodayNolanAnswerIcon></TodayNolanAnswerIcon>
            <TodayNolanAnswerLabel>
              부담없이 만난다 부담없이 만난다
            </TodayNolanAnswerLabel>
          </TodayNolanAnswerItem>
        </TodayNolanAnswerItemDiv>
        <TodayNolanAnswerRestTime>남은 시간 12:11:38</TodayNolanAnswerRestTime>
      </TodayNolanAnswerDiv>

      <CategoryDiv>
        <CategoryItem>
          <CategoryIcon></CategoryIcon>
          <CategoryLabel>HOT</CategoryLabel>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon></CategoryIcon>
          <CategoryLabel>연애</CategoryLabel>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon></CategoryIcon>
          <CategoryLabel>썸</CategoryLabel>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon></CategoryIcon>
          <CategoryLabel>꼰대력</CategoryLabel>
        </CategoryItem>
      </CategoryDiv>
      <ParticipatedDiv>
        <ParticipatedTitle>참여한 사람</ParticipatedTitle>
        <ParticipatedNum>34,000</ParticipatedNum>
        <ParticipatedUnit>명</ParticipatedUnit>
      </ParticipatedDiv>
      <div ref={sliderRef} className="keen-slider">
        <NumberSlide1 className="keen-slider__slide">
          10대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide1>
        <NumberSlide2 className="keen-slider__slide number-slide2">
          20대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide2>
        <NumberSlide3 className="keen-slider__slide number-slide3">
          30대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide3>
        <NumberSlide4 className="keen-slider__slide number-slide4">
          40대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide4>
        <NumberSlide5 className="keen-slider__slide number-slide5">
          50대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide5>
        <NumberSlide6 className="keen-slider__slide number-slide6">
          60대 여성은
          <br />
          어떤 유형이 가장 많을까요?
        </NumberSlide6>
      </div>
      <Footer>개인정보 처리 방침</Footer>
    </HomeWrap>
  );
}
const NumberSlide = styled.div`
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  height: 100px;
  width: 380px;
  max-height: 100vh;
  border-radius: 15px;
`;

const NumberSlide1 = styled(NumberSlide)`
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
`;

const NumberSlide2 = styled(NumberSlide)`
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
`;

const NumberSlide3 = styled(NumberSlide)`
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
`;

const NumberSlide4 = styled(NumberSlide)`
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
`;

const NumberSlide5 = styled(NumberSlide)`
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
`;

const NumberSlide6 = styled(NumberSlide)`
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
`;

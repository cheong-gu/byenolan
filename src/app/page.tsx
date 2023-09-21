"use client";

import styled from "@emotion/styled";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Footer = styled.footer`
  background-color: white;
  width: 440px;
  margin: 0 auto;
  height: 10vh;
  overflow-y: auto;
`;

const HomeWrap = styled.div`
  background-color: green;
`;
export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free-snap",
      loop: true,
      slides: { origin: "center", perView: 2, spacing: 15 },
    },

    [
      (slider) => {
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
      },
    ]
  );
  return (
    <HomeWrap>
      <div>
        deploy test!!!!!!!!!
        <br />
        <br />
        <br />
        <br />
        오늘의 논란
        <div>
          사귄지 얼마 안된 연인이 <br />
          형제를 보여준다고한다
        </div>
      </div>
      <div>오늘의 질문 영역</div>
      <div>테스트 시작 버튼 영역</div>
      <div>참여한 사람 영역</div>
      <div ref={sliderRef} className="keen-slider">
        <NumberSlide1 className="keen-slider__slide">1</NumberSlide1>
        <NumberSlide2 className="keen-slider__slide number-slide2">
          2
        </NumberSlide2>
        <NumberSlide3 className="keen-slider__slide number-slide3">
          3
        </NumberSlide3>
        <NumberSlide4 className="keen-slider__slide number-slide4">
          4
        </NumberSlide4>
        <NumberSlide5 className="keen-slider__slide number-slide5">
          5
        </NumberSlide5>
        <NumberSlide6 className="keen-slider__slide number-slide6">
          6
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
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 100px;
  width: 380px;
  max-height: 100vh;
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

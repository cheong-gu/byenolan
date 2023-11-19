"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { infoState } from "@/store/survey_info/atoms";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { palette } from "@/components/Palette";
import female from "@/public/survey/female.svg";
import male from "@/public/survey/male.svg";
import ButtonCheck from "@/public/survey/buttonCheck.svg";
import ButtonNonCheck from "@/public/survey/buttonNonCheck.svg";
import ButtonActivate from "@/public/survey/buttonActivate.svg";
import ButtonDisabled from "@/public/survey/buttonDisabled.svg";
import Image from "next/image";
import ButtonGender from "@/public/survey/ButtonGender.svg";
import ButtonAge from "@/public/survey/ButtonAge.svg";

const InfoBox = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${palette.bg};
  padding: 40px 24px;
  border: 0.5px solid white;
`;

const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GenderBox = styled.div`
  .genderTitle {
    text-align: center;
    color: black;
    .star {
      color: red;
    }
  }

  .genderContent {
    margin-top: 16px;
    margin-bottom: 40px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 188px);
  }
`;

const AgeBox = styled.div`
  .ageTitle {
    text-align: center;
    color: black;

    .star {
      color: red;
    }
  }
  .ageContent {
    margin-top: 16px;

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 188px);
    grid-template-rows: repeat(3, 64px);
  }
`;

const StartBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .startTitle {
    color: ${palette.text3};
    text-align: center;
    margin-bottom: 16px;
  }
`;

export default function InfoPage() {
  const ageArr: string[] = ["10대", "20대", "30대", "40대", "50대", "60대이상"];

  const router = useRouter();
  const [info, setInfo] = useRecoilState(infoState); // useState와 같지만, useRecoilState를 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentInfo = useRecoilValue(infoState);

  const infoCheck = () => {
    if ("gender" in info && "age" in info) return true;
    else return false;
  };

  const clickGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value: string | null = target.textContent;

    if (value) {
      setInfo((prev) => {
        return {
          ...prev,
          gender: value,
        };
      });
    }
  };

  const clickAge = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value: string | null = target.textContent;

    if (value) {
      setInfo((prev) => {
        return {
          ...prev,
          age: value,
        };
      });
    }
  };

  const clickStart = () => {
    const data = currentInfo;
    if (Object.keys(data).includes("age")) {
      router.push("/survey/choose");
    } else {
    }
  };

  return (
    <InfoBox>
      <InnerContainer>
        <GenderBox>
          <div className="genderTitle">
            성별<span className="star">*</span>
          </div>
          <div className="genderContent">
            <Button
              width="188px"
              height="110px"
              fontColor="black"
              fontSize="16px"
              borderRadius="0"
              buttonColor="white"
              className="man"
              onClick={clickGender}
              backgroundImage={info?.gender == "남자" ? ButtonGender : ""}
            >
              <div className="image">
                <Image
                  className="person"
                  src={male}
                  alt="error"
                  width={50}
                  height={50}
                />
              </div>
              남자
            </Button>
            <Button
              width="188px"
              height="110px"
              fontColor="black"
              fontSize="16px"
              borderRadius="0"
              buttonColor="white"
              className="woman"
              onClick={clickGender}
              backgroundImage={info?.gender == "여자" ? ButtonGender : ""}
            >
              <div className="image">
                <Image
                  className="person"
                  src={female}
                  alt="error"
                  width={50}
                  height={50}
                />
              </div>
              여자
            </Button>
          </div>
        </GenderBox>
        <AgeBox>
          <div className="ageTitle">
            나이<span className="star">*</span>
          </div>
          <div className="ageContent">
            {ageArr.map((age, index) => {
              console.log(info);
              console.log(age);
              return (
                <Button
                  key={index}
                  width="188px"
                  height="64px"
                  fontColor="black"
                  fontSize="16px"
                  borderRadius="0"
                  buttonColor="white"
                  className="ageBtn"
                  backgroundImage={info?.age == age ? ButtonAge : ""}
                  onClick={clickAge}
                >
                  {age}
                </Button>
              );
            })}
          </div>
        </AgeBox>
        <StartBox>
          <div className="startTitle">총 12문항이며 순서는 무작위입니다</div>
          <Button
            width="392px"
            height="72px"
            fontColor="text3"
            fontSize="18px"
            borderRadius="0"
            backgroundImage={infoCheck() ? ButtonActivate : ButtonDisabled}
            buttonColor="transparent"
            className="startBtn"
            onClick={clickStart}
          >
            <div className="startButton">
              <span className="check">
                <Image
                  src={infoCheck() ? ButtonCheck : ButtonNonCheck}
                  alt="error"
                  width={20}
                  height={20}
                ></Image>
              </span>
              <span className="content">시작</span>
            </div>
          </Button>
        </StartBox>
      </InnerContainer>
    </InfoBox>
  );
}

"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { infoState } from "@/store/survey_info/atoms";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { palette } from "@/components/Palette";

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

  console.log("1 : " + JSON.stringify(currentInfo));

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
      console.log("성공");
      router.push("/survey/choose");
    } else {
      console.log("실패");
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
              fontSize="20px"
              borderRadius="0"
              buttonColor="white"
              className="man"
              onClick={clickGender}
            >
              남자
            </Button>
            <Button
              width="188px"
              height="110px"
              fontColor="black"
              fontSize="20px"
              borderRadius="0"
              buttonColor="white"
              className="woman"
              onClick={clickGender}
            >
              여자
            </Button>
          </div>
        </GenderBox>
        <AgeBox>
          <div className="ageTitle">
            나이<span className="star">*</span>
          </div>
          <div className="ageContent">
            {ageArr.map((age, index) => (
              <Button
                key={index}
                width="188px"
                height="64px"
                fontColor="black"
                fontSize="20px"
                borderRadius="0"
                buttonColor="white"
                className="ageBtn"
                onClick={clickAge}
              >
                {age}
              </Button>
            ))}
          </div>
        </AgeBox>
        <StartBox>
          <div className="startTitle">총 12문항이며 순서는 무작위입니다</div>
          <Button
            width="392px"
            height="72px"
            fontColor="text3"
            fontSize="20px"
            borderRadius="0"
            buttonColor="start_btn"
            className="startBtn"
            onClick={clickStart}
          >
            시작
          </Button>
        </StartBox>
      </InnerContainer>
    </InfoBox>
  );
}

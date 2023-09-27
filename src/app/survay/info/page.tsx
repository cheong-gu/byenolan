"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { infoState } from "@/store/survay_info/atoms";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const InfoBox = styled.div`
  margin: 40px 24px;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GenderBox = styled.div`
  .genderTitle {
    text-align: center;
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
  }
  .ageContent {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 188px);
    grid-template-rows: repeat(3, 64px);
  }
`;

const StartBox = styled.div`
  position: absolute;
  bottom: 40px;

  .startTitle {
    text-align: center;
    margin-bottom: 16px;
  }
`;

export default function InfoPage() {
  const ageArr: string[] = ["10대", "20대", "30대", "40대", "50대", "60대이상"];

  const router = useRouter();
  const [info, setInfo] = useRecoilState(infoState); // useState와 같지만, useRecoilState를 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentInfo = useRecoilValue(infoState);
  const infoHandler = useSetRecoilState(infoState);

  console.log("1 : " + JSON.stringify(currentInfo));

  const clickGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value: string | null = target.textContent;

    if (value) {
      infoHandler((prev) => {
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
      infoHandler((prev) => {
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
      router.push("/survay/choose");
    } else {
      console.log("실패");
    }
  };

  return (
    <InfoBox>
      <InnerContainer>
        <GenderBox>
          <div className="genderTitle">성별</div>
          <div className="genderContent">
            <Button
              width="188px"
              height="110px"
              fontColor="black"
              fontSize="20px"
              borderRadius="0"
              buttonColor="green"
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
              buttonColor="yellow"
              className="woman"
              onClick={clickGender}
            >
              여자
            </Button>
          </div>
        </GenderBox>
        <AgeBox>
          <div className="ageTitle">나이*</div>
          <div className="ageContent">
            {ageArr.map((age, index) => (
              <Button
                key={index}
                width="188px"
                height="64px"
                fontColor="black"
                fontSize="20px"
                borderRadius="0"
                buttonColor="orange"
                className="ageBtn"
                onClick={clickAge}
              >
                {age}
              </Button>
            ))}
          </div>
        </AgeBox>
      </InnerContainer>
      <StartBox>
        <div className="startTitle">총 12문항이며 순서는 무작위입니다</div>
        <Button
          width="392px"
          height="72px"
          fontColor="black"
          fontSize="20px"
          borderRadius="0"
          buttonColor="violet"
          className="startBtn"
          onClick={clickStart}
        >
          시작
        </Button>
      </StartBox>
    </InfoBox>
  );
}

import {
  questionsState,
  selectedQuestionIndexState,
} from "@/store/survey_choose/atoms";
import styled from "@emotion/styled";
import Image from "next/image";
import HeartIcon from "@/public/survey/heartIcon.svg";
import { useRecoilState, useRecoilValue } from "recoil";

interface ProgressBarProps {
  progress: number;
}

const ProgressBarContainer = styled.div`
  height: 48px;
  display: flex;
  position: relative;
  .heart {
    z-index: 1;
    position: absolute;
    right: -10%;
  }
`;

const ProgressFill = styled.div<ProgressBarProps>`
  position: relative;
  height: 100%;
  flex: 0 0 30%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 196px;
    li {
      background-color: #fff;
      height: 16px;
      border-radius: 10px;
      .bar {
        position: absolute;
        border-radius: 10px;
        background-color: #ffd8f2;
        height: 16px;
      }
      .css-progressbar {
        width: ${(props) => props.progress}%;
        -moz-animation: css-progressbar 2s ease-out;
        -webkit-animation: css-progressbar 2s ease-out;
      }

      .num {
        z-index: 1;
        position: absolute;
        right: 42.5%;
        line-height: 1.25;
        color: black;
      }
    }
  }
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const selectedIndex = useRecoilValue(selectedQuestionIndexState);
  const questions = useRecoilValue(questionsState);

  const currentPage = selectedIndex + 1;
  const PageNum = questions.length;

  return (
    <>
      <ProgressBarContainer>
        <div className="heart">
          <Image src={HeartIcon} alt="error" />
        </div>
        <ProgressFill progress={progress}>
          <ul>
            <li>
              <span className="num">
                {currentPage}/{PageNum}
              </span>
              <span className="css-progressbar bar"></span>
            </li>
          </ul>
        </ProgressFill>
      </ProgressBarContainer>
    </>
  );
};
export default ProgressBar;

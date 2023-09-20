"use client";

import styled from "@emotion/styled";

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
  return (
    <HomeWrap>
      <div>
        오늘의 논란
        <div>사귄지 얼마 안된 연인이 /n형제를 보여준다고한다</div>
      </div>
      <div>
        오늘의 질문 영역
      </div>
      <div>
        테스트 시작 버튼 영역
      </div>
      <div>
        참여한 사람 영역
      </div>
      <div>
        흥미 유도 카드 슬라이더 영역
      </div>
      <Footer>개인정보 처리 방침</Footer>
    </HomeWrap>
  );
}

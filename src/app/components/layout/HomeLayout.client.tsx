'use client';

import styled from '@emotion/styled';
import Background from '../../../public/home/1_bg_img_440x1620.png';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { homeNolanState } from '@/store/home/atoms';
import Metrics from '../metrics';

const Body = styled.body`
  background-color: #313131;
`;

const Main = styled.main`
  width: 440px;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  background-image: url(${Background.src});
`;

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const [, setNolan] = useRecoilState(homeNolanState);

  useEffect(() => {
    async function init() {
      const res = await fetch('https://byenolan.shop/nolan/todayNolan').then(
        (res) => res.json()
      );

      const participants = res[0].totalcount;

      const questionId = res[0]['_id'];

      setNolan((currentNolan) => ({
        ...currentNolan,
        questionId,
        participants,
      }));
    }

    init();
  }, [setNolan]);

  return (
    <html lang="en">
      <Body>
        <Metrics />
        <Main>{children}</Main>
      </Body>
    </html>
  );
}

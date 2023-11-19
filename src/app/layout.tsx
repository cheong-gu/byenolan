"use client";
import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";
import "../styles/global.css";
import Background from '../public/home/1_bg_img_440x1620.png';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <Body>
          <Main>
            {children}
          </Main>
        </Body>
      </html>
    </RecoilRoot>
  );
}

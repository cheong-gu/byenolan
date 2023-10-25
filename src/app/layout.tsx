"use client";
import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";
import "../styles/global.css";
import Image from "next/image";

const Body = styled.body`
  background-color: #313131;
`;

const Main = styled.main`
  width: 440px;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
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
            <Image
              alt=""
              src="/background.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            ></Image>
            {children}
          </Main>
        </Body>
      </html>
    </RecoilRoot>
  );
}

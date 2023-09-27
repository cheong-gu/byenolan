"use client";
import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";

const Body = styled.body`
  background-color: #313131;
`;

const Main = styled.main`
  background-color: #0f0f0f;
  width: 440px;
  margin: 0 auto;
  height: 100vh;
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
          <Main>{children}</Main>
        </Body>
      </html>
    </RecoilRoot>
  );
}

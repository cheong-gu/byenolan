import styled from "@emotion/styled";
import Content1 from "../../../../public/result/subtitle_header1.png";
import Content2 from "../../../../public/result/subtitle_header2.png";
import Content3 from "../../../../public/result/subtitle_header3.png";
import Image from "next/image";

const Box = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
`;

const Result = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  padding: 32px 24px;
  background-color: #fff;
  border: 2px solid;
  border-top: 0;
`;

interface ContentProps {
  children: React.ReactNode;
  index: number;
}

export default function Content({ index, children }: ContentProps) {
  return (
    <Box>
      <Header>
        <Image
          src={index === 1 ? Content1 : index === 2 ? Content2 : Content3}
          alt="content_header"
        />
      </Header>
      <Result>{children}</Result>
    </Box>
  );
}

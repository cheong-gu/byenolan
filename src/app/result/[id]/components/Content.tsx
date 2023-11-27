import styled from "@emotion/styled";

const Box = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
`;

const Header = styled.div`
  width: 100%;
  height: 32px;
  background-color: #fcffdd;
  border-bottom: 2px solid;
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
`;

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <Box>
      {/* Header -> 이미지 대체 */}
      <Header />
      <Result>{children}</Result>
    </Box>
  );
}

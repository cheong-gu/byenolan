'use client';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  margin-top: 277px;
  margin-bottom: 24px;
  width: 440px;
  height: 10vh;
  overflow-y: auto;
  color: #68acc1;
  font-family: pretendard;
`;

export default function Policies() {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 14, fontWeight: '600', marginBottom: 6 }}>
          논란종결
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: 8,
          }}
        >
          <div
            style={{
              marginRight: 4,
              paddingRight: 4,
              borderRight: '1px solid #68ACC1',
            }}
          >
            개인정보 처리방침
          </div>
          <div
            style={{
              marginRight: 4,
              paddingRight: 4,
              borderRight: '1px solid #68ACC1',
            }}
          >
            {' '}
            이용약관
          </div>
          <div>출처</div>
        </div>
        <div>
          <span
            style={{
              textDecorationLine: 'underline',
            }}
          >
            ©Mitralmb Team.
          </span>
          <span>All Right Reserved.</span>
        </div>
      </div>
    </Wrapper>
  );
}

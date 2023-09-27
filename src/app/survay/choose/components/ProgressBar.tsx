import styled from "@emotion/styled";

const ProgressBox = styled.span`
  /* background-color: #fff; */
  /* width: 196px; */
  /* border-radius: 99px; */
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 2px 1px 0 rgba(0, 0, 0, 0.12); */
  height: 48px;
  display: flex;
  /* padding: 1rem; */
`;

const BarContainer = styled.div`
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
      height: 20px;
      border-radius: 10px;
      .bar {
        position: absolute;
        /* border-top-left-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 0; */
        border-radius: 10px;
        background-color: red;
        height: 20px;
        /* &:after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          content: "";
          width: 27px;
          height: 27px;
          position: absolute;
          top: -3px;
          right: -5px;
          border-radius: 50%;
          background-color: #607d8b;
        } */
      }
      .css-progressbar {
        width: 10%;
        -moz-animation: css-progressbar 2s ease-out;
        -webkit-animation: css-progressbar 2s ease-out;
      }
    }
  }
`;

export default function ProgressBar() {
  return (
    <>
      {/* <progress value="1" max="12"></progress> */}

      <ProgressBox>
        <BarContainer>
          <ul>
            <li>
              <span className="css-progressbar bar"></span>
            </li>
          </ul>
        </BarContainer>
      </ProgressBox>
    </>
  );
}

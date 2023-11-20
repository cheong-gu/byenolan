import Image from "next/image";
import CheckImg from "../../public/home/FiCheck.svg";
type HomeProgressProps = {
  percent: number;
  discription: string;
  selected: boolean;
};

export const HomeProgressBar = ({
  percent,
  discription,
  selected,
}: HomeProgressProps) => (
  <div
    style={{
      position: "relative",
      width: 312,
      height: 64,

      marginBottom: 16,
    }}
  >
    <div
      style={{
        display: "flex",
        width: (312 * percent) / 100,
        background: selected ? "#FFD8F2" : "#EBECF0",
        justifyContent: "space-between",
        height: 64,
        padding: "0 20px",
        alignItems: "center",
        border: "1px solid #5B3A09",
        position: "absolute",
      }}
    ></div>
    <div
      style={{
        top: 0,
        display: "flex",
        width: 312,
        justifyContent: "space-between",
        height: 64,
        padding: "0 20px",
        alignItems: "center",
        border: "1px solid #5B3A09",
        position: "absolute",
      }}
    >
      <div
        style={{
          color: "#5B3A09",
          fontFamily: "Pretendard",
        }}
      >
        {selected ? (
          <Image src={CheckImg} width={18} height={18} alt="check" />
        ) : (
          <></>
        )}

        {discription}
      </div>
      <div
        style={{
          fontFamily: "DOSGothic",
          color: "#5B3A09",
        }}
      >
        {percent}%
      </div>
    </div>
  </div>
);

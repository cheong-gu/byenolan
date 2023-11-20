import SlidBannerLeftnImg from "../../../public/home/chevron-left.svg";
import SlidBannerRightImg from "../../../public/home/chevron-right.svg";
import SlidBannerIconImg from "../../../public/home/1_slide_banner_icon_54x54.svg";
import SlidBannerImg from "../../../public/home/Slidebanner_392x104.svg";
import Image from "next/image";

export function SliderCard({ children }: any) {
  return (
    <div
      className="keen-slider__slide"
      style={{
        position: "relative",
      }}
    >
      <Image src={SlidBannerImg} alt="logo" width={392} height={104}></Image>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          width: "392px",
          height: "104px",
          alignItems: "center",
        }}
      >
        <Image
          src={SlidBannerLeftnImg}
          alt="logo"
          width={40}
          height={40}
          style={{ marginRight: 4 }}
        ></Image>
        <Image
          src={SlidBannerIconImg}
          alt="logo"
          width={54}
          height={54}
          style={{ marginRight: 8 }}
        ></Image>
        <div
          style={{
            marginRight: 68,
            color: "#5B3A09",
            fontFamily: "Pretendard",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "140% ",
            letterSpacing: "-0.16px",
          }}
        >
          {children}
        </div>
        <Image
          src={SlidBannerRightImg}
          alt="logo"
          width={40}
          height={40}
        ></Image>
      </div>
    </div>
  );
}

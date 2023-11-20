import LogoImg from "../public/home/1_title_img_440x160.png";

import Image from "next/image";
import HomeSLider from "./components/slider/HomeSlider.client";
import { HomeModal } from "./components/modal/HomeModal.client";
import { TodayNolan } from "./components/todayNolan/todayNolan.client";
import Categorys from "./components/category/category.client";
import Policies from "./components/policies/policies";
import Participants from "./components/paticipants/participants";

export default function Home() {
  // async function test() {
  //   const a = await fetch("https://byenolan.shop/nolan/todayNolan").then(
  //     (res) => res.json()
  //   );
  //   console.log(a);
  // }

  return (
    <>
      <Image src={LogoImg.src} alt="logo" width={440} height={160}></Image>
      <TodayNolan></TodayNolan>
      <Categorys />
      <Participants />
      <HomeSLider />
      <Policies />
      <HomeModal />
    </>
  );
}

import LogoImg from "../public/home/1_title_img_440x160.png";

import Image from "next/image";
import HomeSLider from "./components/slider/HomeSlider.client";
import { HomeModal } from "./components/modal/HomeModal.client";
import { TodayNolan } from "./components/todayNolan/todayNolan.server";
import Categorys from "./components/category/category.client";
import Policies from "./components/policies/policies.client";
import Participants from "./components/paticipants/participants.server";

export default function Home() {
  return (
    <>
      <Image src={LogoImg.src} alt="logo" width={440} height={160}></Image>
      <TodayNolan />
      <Categorys />
      <Participants />
      <HomeSLider />
      <Policies />
      <HomeModal />
    </>
  );
}

"use client";

import styled from "@emotion/styled";

import CategoryIconHotImg from "../../../public/home/1_category_icon_Hot_80x80.svg";
import CategoryIconLoveImg from "../../../public/home/1_category_icon_love_80x80.svg";
import CategoryIconLockImg from "../../../public/home/1_category_icon_Lock_80x80.svg";
import Link from "next/link";
import Image from "next/image";
const CategoryDiv = styled.div`
  margin: 64px auto 0 auto;
  width: 240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
`;

const CategoryItem = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryLabel = styled.span`
  width: 80px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-family: NeoDunggeunmo Pro;
  color: #5b3a09;
`;

export default function Categorys() {
  return (
    <CategoryDiv>
      <Link href={"survey/info"}>
        <CategoryItem>
          <Image
            src={CategoryIconHotImg}
            alt="categoryHot"
            width={80}
            height={80}
          ></Image>
          <CategoryLabel>HOT</CategoryLabel>
        </CategoryItem>
      </Link>
      <Link href={"survey/info"}>
        <CategoryItem>
          <Image
            src={CategoryIconLoveImg}
            alt="categoryLove"
            width={80}
            height={80}
          ></Image>
          <CategoryLabel>연애</CategoryLabel>
        </CategoryItem>
      </Link>
      <CategoryItem>
        <Image
          src={CategoryIconLockImg}
          alt="categoryLock"
          width={80}
          height={80}
        ></Image>
        <CategoryLabel>썸</CategoryLabel>
      </CategoryItem>
      <CategoryItem>
        <Image
          src={CategoryIconLockImg}
          alt="categoryLock"
          width={80}
          height={80}
        ></Image>
        <CategoryLabel>꼰대력</CategoryLabel>
      </CategoryItem>
    </CategoryDiv>
  );
}

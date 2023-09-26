"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { relationshipType } from "./[id]/constants/dummy";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: #fff;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 36px;
    border: 1px solid;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 148px;
  margin-bottom: 24px;
  & p {
    font-size: 14px;
    margin-right: 8px;
  }
`;

type ageType = "10대" | "20대" | "30대" | "40대" | "50대" | "60대 이상";
type genderType = "남성" | "여성";

export default function ResultPage() {
  const [type, setType] = useState<relationshipType>("진라면");
  const [age, setAge] = useState<ageType>("20대");
  const [gender, setGender] = useState<genderType>("여성");
  return (
    <Container>
      <SelectBox>
        <p>성별</p>
        <select onChange={(e) => setGender(e.target.value as genderType)}>
          <option>여자</option>
          <option>남자</option>
        </select>
      </SelectBox>
      <SelectBox>
        <p>나이</p>
        <select onChange={(e) => setAge(e.target.value as ageType)}>
          <option>10대</option>
          <option>20대</option>
          <option>30대</option>
          <option>40대</option>
          <option>50대</option>
          <option>60대 이상</option>
        </select>
      </SelectBox>
      <SelectBox>
        <p>결과 유형</p>
        <select onChange={(e) => setType(e.target.value as relationshipType)}>
          <option>진라면</option>
          <option>신라면</option>
          <option>참깨라면</option>
          <option>사리곰탕</option>
          <option>불닭볶음면</option>
          <option>핵불닭볶음면</option>
        </select>
      </SelectBox>
      <Link href={`/result/id?type=${type}&age=${age}&gender=${gender}`}>
        결과 화면으로
      </Link>
    </Container>
  );
}

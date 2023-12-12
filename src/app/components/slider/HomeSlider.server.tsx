import Link from 'next/link';
import HomeSLiderClient from './HomeSlider.client';
import { SliderCard } from './HomeSliderCard.server';

export default function HomeSLider() {
  return (
    <Link href="/survey/info">
      <HomeSLiderClient>
        <SliderCard>내 친구들은 어떤 연애를 할까?</SliderCard>
        <SliderCard>주목! 세상에서 가장 레어한 사람을 찾습니다!</SliderCard>
        <SliderCard>전국이 들썩이는 요즘 논란</SliderCard>
      </HomeSLiderClient>
    </Link>
  );
}

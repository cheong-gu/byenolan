'use client';

import Image from 'next/image';

import SelectAIconImg from '../../../public/home/1_select_icon_A_84x84.svg';
import SelectBIconImg from '../../../public/home/1_select_icon_B_84x84.svg';
import { useTimer } from '@/hooks/homeTimer.hook';
import { useRecoilState } from 'recoil';
import { homeNolanState, homeShowModalState } from '@/store/home/atoms';
import { formatTime } from '@/utils/utils';

export default function TodayNolanAswers({
  children,
}: {
  children: React.ReactNode;
}) {
  const timer = useTimer();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setShowModal] = useRecoilState(homeShowModalState);
  const [nolan, setNolan] = useRecoilState(homeNolanState);
  return (
    <div className={nolan.isSelected ? 'hide' : 'show'}>
      {children}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          top: '63px',
          width: '392px',
          justifyItems: 'center',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            textAlign: 'center',
            marginLeft: 51,
            width: 124,
            cursor: 'pointer',
          }}
          onClick={() => {
            setShowModal(true);
            setNolan({ ...nolan, selectedAnswer: 'A' });
          }}
        >
          <Image
            src={SelectAIconImg}
            alt="selectA"
            width={124}
            height={84}
          ></Image>
        </div>
        <div
          style={{
            height: '120px',
            width: '1px',
            backgroundColor: '#E0DDDC',
            margin: '0 20px',
          }}
        ></div>
        <div
          style={{
            alignItems: 'center',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => {
            setShowModal(true);
            setNolan({ ...nolan, selectedAnswer: 'B' });
          }}
        >
          <Image
            src={SelectBIconImg}
            alt="selectB"
            width={124}
            height={84}
          ></Image>
        </div>
      </div>
      <span
        style={{
          position: 'absolute',
          fontFamily: 'DOSGothic',
          top: '226px',
          width: ' 392px',
          left: 0,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontFamily: 'Pretendard',
            color: '#5B3A09',
          }}
        >
          남은 시간
        </span>
        <span
          style={{
            fontSize: 16,
            color: '#5B3A09',
            letterSpacing: '0.64px',
          }}
        >{` ${formatTime(timer.hours)}:${formatTime(
          timer.minutes
        )}:${formatTime(timer.seconds)}`}</span>
      </span>
    </div>
  );
}

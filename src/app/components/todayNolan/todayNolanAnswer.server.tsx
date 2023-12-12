export default async function TodayNolanAswersServer() {
  const res = await fetch('https://byenolan.shop/nolan/todayNolan').then(
    (res) => res.json()
  );

  const answers = res[0].survey;

  const answerA = answers.find((answer: any) => answer.answer_no == 'A').answer;
  const answerB = answers.find((answer: any) => answer.answer_no == 'B').answer;

  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        top: '168px',
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
      >
        <span
          style={{
            fontFamily: 'Pretendard',
            color: '#5B3A09',
            letterSpacing: '-0.16px',
            lineHeight: '140%',
            fontSize: 16,
          }}
        >
          {answerA}
        </span>
      </div>
      <div style={{ width: 40, height: 1 }}></div>
      <div
        style={{
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          width: 124,
        }}
      >
        <span
          style={{
            fontFamily: 'Pretendard',
            color: '#5B3A09',
            letterSpacing: '-0.16px',
            lineHeight: '140%',
            fontSize: 16,
          }}
        >
          {answerB}
        </span>
      </div>
    </div>
  );
}

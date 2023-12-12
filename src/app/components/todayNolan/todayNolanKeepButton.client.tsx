'use client';

export default function TodayNolanKeepButton() {
  function scrollToCategory() {
    console.log('test');
    window.scrollTo({
      top: 568,
      behavior: 'smooth',
    });
  }

  return <button onClick={scrollToCategory}>{"계속 참여하기 •'-'•)و✧"}</button>;
}

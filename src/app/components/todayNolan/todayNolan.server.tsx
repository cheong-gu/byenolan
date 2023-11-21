import TodayNolanAswersServer from "./todayNolanAnswer.server";
import TodayNolanBody from "./todayNolanBody.client";
import TodayNolanTitleClient from "./todayNolanTitle.server";
import TodayNolanTitleServer from "./todayNolanTitle.server";

export function TodayNolan() {
  return (
    <>
      <TodayNolanTitleServer />
      <TodayNolanBody>
        <TodayNolanAswersServer />
      </TodayNolanBody>
    </>
  );
}

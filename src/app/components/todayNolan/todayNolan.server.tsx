import TodayNolanAswersServer from "./todayNolanAnswer.server";
import TodayNolanBody from "./todayNolanBody.client";
import TodayNolanTitleClient from "./todayNolanTitle.client";
import TodayNolanTitleServer from "./todayNolanTitle.server";

export function TodayNolan() {
  return (
    <>
      <TodayNolanTitleClient>
        <TodayNolanTitleServer />
      </TodayNolanTitleClient>
      <TodayNolanBody>
        <TodayNolanAswersServer />
      </TodayNolanBody>
    </>
  );
}

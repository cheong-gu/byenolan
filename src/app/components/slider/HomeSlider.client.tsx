"use client";

import { useKeenSlider } from "keen-slider/react";
import { SliderCard } from "./HomeSliderCard.server";

export default function HomeSLider() {
  const [sliderRef] = useKeenSlider(
    {
      mode: "free-snap",
      loop: true,
      slides: { origin: "center", perView: 1.1, spacing: 8 },
    },
    [sliderFunction]
  );

  function sliderFunction(slider: any) {
    let timeout: NodeJS.Timeout;
    let mouseOver = false;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 1000);
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }

  return (
    <div ref={sliderRef} className="keen-slider">
      <SliderCard>
        10대 여성은
        <br />
        어떤 유형이 가장 많을까요?
      </SliderCard>
      <SliderCard>
        10대 여성은
        <br />
        어떤 유형이 가장 많을까요?
      </SliderCard>
      <SliderCard>
        10대 여성은
        <br />
        어떤 유형이 가장 많을까요?
      </SliderCard>
    </div>
  );
}

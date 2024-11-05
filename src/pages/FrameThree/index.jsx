import { Helmet } from "react-helmet";
import { Button, Img } from "../../components";
import ImageSliderSection from "./ImageSliderSection";
import React from "react";

export default function FrameThreePage() {
  return (
    <>
      <Helmet>
        <title>Frame Three - Content Coming Soon</title>
        <meta
          name="description"
          content="Stay tuned for exciting content. Our dedicated team is working to bring you informative and engaging material. Check back soon!"
        />
      </Helmet>
      <div className="relative h-[326px] w-full content-center md:h-auto">
        {/* image slider section */}
        <ImageSliderSection />
        <Button
          color="white_A700"
          size="lg"
          className="absolute bottom-0 right-0 top-0 my-auto w-[38px] rounded-[18px] px-3"
        >
          <Img src="images/img_arrow_right.svg" />
        </Button>
      </div>
    </>
  );
}

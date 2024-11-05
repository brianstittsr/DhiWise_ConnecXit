import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import React from "react";

export default function FrameTwoPage() {
  return (
    <>
      <Helmet>
        <title>Live Entertainment - Book Top Talent and DJs for Your Event</title>
        <meta
          name="description"
          content="Elevate your event with exceptional live entertainment. Book the best talent and experienced DJs to create an unforgettable atmosphere for your guests."
        />
      </Helmet>
      <div className="flex w-full flex-col overflow-auto">
        <header className="flex w-full items-center justify-center gap-5">
          <div className="flex w-full rounded-lg bg-deep_orange-500 p-3.5">
            <div className="mx-auto flex w-full max-w-[336px] flex-col items-start gap-2.5">
              <Text className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">Talent</Text>
              <div className="flex items-start gap-2.5 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Star Image" className="h-[20px]" />
                </a>
                <Text className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg bg-deep_orange-500 p-3.5">
            <div className="container-xs flex flex-col items-start gap-2.5">
              <Text className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">Live Entertainment</Text>
              <div className="flex items-start gap-2.5 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Star Image One" className="h-[20px] w-[20px]" />
                </a>
                <Text className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col items-start justify-center gap-2.5 rounded-lg bg-deep_orange-500 px-[22px] py-3.5 sm:px-5">
              <Text className="mt-1 text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                Disc Jockeys (DJ’s)
              </Text>
              <div className="container-xs flex items-start gap-2 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Star Image Two" className="h-[20px] w-[20px]" />
                </a>
                <Text className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

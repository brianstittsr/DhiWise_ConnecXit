import { Button, Heading } from "../../components";
import React from "react";

export default function CallToActionSection() {
  return (
    <>
      {/* call to action section */}
      <div className="flex flex-col items-center gap-[62px] self-stretch sm:gap-[31px]">
        <div className="flex flex-col items-center gap-10 self-stretch px-14 md:px-5">
          <Heading
            size="heading4xl"
            as="h2"
            className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
          >
            <span className="text-black-900_02">Ready to Join&nbsp;</span>
            <span className="text-deep_orange-500">ConnecXit ?</span>
          </Heading>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button
              size="xl"
              shape="round"
              className="min-w-[208px] rounded-lg px-[26px] font-medium tracking-[-1.60px] sm:px-5"
            >
              Sign Up!
            </Button>
          </a>
        </div>
        <div className="mx-auto h-px w-full max-w-[1194px] self-stretch bg-gray-500_04 md:px-5" />
      </div>
    </>
  );
}

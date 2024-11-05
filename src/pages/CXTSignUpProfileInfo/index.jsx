import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer4 from "../../components/Footer4";
import React from "react";

export default function CXTSignUpProfileInfoPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up and Create Your Event Pro Profile Today</title>
        <meta
          name="description"
          content="Join our community as an Event Pro or Vendor. Start by setting up your account with easy steps. Get access to our Knowledge Base and Partner offers."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[74px] bg-white-a700 md:gap-[55px] sm:gap-[37px]">
        <header className="flex items-center justify-center self-stretch bg-white-a700">
          <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
            <Img
              src="images/img_connecxit_logo.png"
              alt="Brand Logo"
              className="h-[90px] w-[16%] object-contain md:w-full"
            />
            <div className="flex w-[46%] items-center justify-center md:w-full md:flex-col">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  shape="round"
                  className="min-w-[194px] rounded-lg px-[26px] font-medium tracking-[-0.60px] sm:px-5"
                >
                  Join As An Event Pro
                </Button>
              </a>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="red_A700"
                  shape="round"
                  className="ml-2 min-w-[172px] rounded-lg px-[26px] font-medium tracking-[-0.60px] md:ml-0 sm:px-5"
                >
                  Join As A Vendor
                </Button>
              </a>
              <div className="relative ml-5 h-[40px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch">
                <ul className="absolute bottom-[7.18px] left-0 right-0 !m-auto flex flex-wrap gap-14 md:gap-5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Explore
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Sign up
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Log in
                      </Text>
                    </a>
                  </li>
                </ul>
                <a href="#">
                  <Img
                    src="images/img_image_2.png"
                    alt="Secondary Image"
                    className="absolute bottom-0 right-1/4 top-0 my-auto h-[40px] w-[40px] rounded-[20px] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="flex w-[36%] flex-col items-center gap-3.5 md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-black-900_02">Step 1: Account Setup&nbsp;</span>
            <span className="text-deep_orange-500">Wizard&nbsp;</span>
          </Heading>
          <div className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-[22px] py-11 md:py-5 sm:p-5">
            <div className="flex flex-col items-start gap-1">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                Address
              </Text>
              <Input shape="square" name="Address Input" className="self-stretch !border px-3.5" />
            </div>
            <div className="mt-1.5 flex gap-2 sm:flex-col">
              <div className="flex flex-1 flex-col items-start gap-0.5 sm:self-stretch">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  City
                </Text>
                <Input shape="square" name="City Input" className="self-stretch !border px-3.5" />
              </div>
              <div className="flex w-[16%] flex-col items-start gap-0.5 sm:w-full">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  State
                </Text>
                <Input shape="square" name="State Input" className="self-stretch !border px-3.5" />
              </div>
              <div className="flex w-[32%] flex-col items-start gap-0.5 sm:w-full">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  ZipCode
                </Text>
                <Input shape="square" name="ZipCode Input" className="self-stretch !border px-3.5" />
              </div>
            </div>
            <div className="mt-11 flex flex-col items-start gap-1">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                Password
              </Text>
              <Input shape="square" name="Password Input" className="self-stretch !border px-3.5" />
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                size="md"
                shape="round"
                className="mb-[22px] mt-[42px] self-stretch rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5"
              >
                Next
              </Button>
            </a>
          </div>
        </div>
        <Footer4 />
      </div>
    </>
  );
}

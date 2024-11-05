import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input } from "../../components";
import React from "react";

export default function CXTSignUpProfileInfoOnePage() {
  return (
    <>
      <Helmet>
        <title>Complete Your Sign Up and Join Our Network</title>
        <meta
          name="description"
          content="Finish setting up your account to join as an Event Pro or Vendor. Discover the benefits of our partnerships and exclusive offers."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
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
                    alt="Profile Image"
                    className="absolute bottom-0 right-1/4 top-0 my-auto h-[40px] w-[40px] rounded-[20px] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-[202px] flex w-[36%] flex-col items-center md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-black-900_02">Step 2: Account Setup&nbsp;</span>
            <span className="text-deep_orange-500">Wizard&nbsp;</span>
          </Heading>
          <div className="mt-3.5 self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-[22px] py-[42px] md:py-5 sm:p-5">
            <div className="flex flex-col items-start gap-1">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                How did you Hear about us?
              </Text>
              <Input shape="square" name="Referral Input" className="self-stretch !border px-3.5" />
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
                className="mb-6 mt-[42px] self-stretch rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5"
              >
                FInish
              </Button>
            </a>
          </div>
          <a href="#" className="mt-[82px]">
            <Heading size="headings" as="h2" className="text-[14px] font-semibold tracking-[-0.56px] text-white-a700">
              Create Account
            </Heading>
          </a>
        </div>
        <footer className="mt-[70px] flex self-stretch">
          <div className="flex w-full flex-col items-center rounded-[12px] bg-black-900 p-7 sm:p-5">
            <div className="container-3xl flex flex-col items-center gap-[84px] md:gap-[63px] sm:gap-[42px]">
              <Img
                src="images/img_connecxit_logo.png"
                alt="Brand Logo"
                className="h-[150px] w-[26%] self-end object-contain"
              />
              <div className="ml-[42px] mr-[38px] flex w-full items-start justify-between gap-5 md:mx-0 md:flex-col">
                <div className="flex w-[22%] flex-col items-start gap-1 md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700">About Us</Text>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Company</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">News</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[28%] flex-col items-start gap-1 md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700">Support</Text>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Contact Us</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Knowledge Base</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Product Help Center</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[30%] flex-col items-start gap-1 self-center md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700">Become a Partner</Text>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Associations</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Francises</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Affilates</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Offers</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Text className="text-[18px] font-semibold text-white-a700">Constant Contact Onairn</Text>
                  <ul className="flex flex-col items-start gap-2">
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">SharpSpring</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Retention Science</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[0.7px] w-full self-stretch bg-white-a700" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

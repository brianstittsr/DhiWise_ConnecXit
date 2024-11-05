import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import AccountHeaderSection from "./AccountHeaderSection";
import React from "react";

export default function AccountTwoPage() {
  return (
    <>
      <Helmet>
        <title>Your To-Do List - Organize Your Projects and Tasks</title>
        <meta
          name="description"
          content="Keep track of your projects and daily tasks with our comprehensive to-do list feature. Enhance your productivity and never miss a deadline again."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[76px] bg-gray-100 py-[18px] lg:gap-[76px] md:gap-[57px] sm:gap-[38px]">
        <header className="self-stretch bg-white-a700">
          <div className="flex flex-col items-center gap-1">
            {/* account header section */}
            <AccountHeaderSection />
            <div className="container-4xl flex flex-col items-start pl-[148px] pr-14 lg:px-5 md:px-5">
              <ul className="flex flex-wrap gap-[58px] lg:gap-5 md:gap-5">
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Other Info
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Events and more
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="container-4xl mb-1 flex flex-col items-start gap-[1628px] lg:gap-[1221px] lg:px-5 md:gap-[1221px] md:px-5 sm:gap-[814px]">
          <Heading
            size="heading3xl"
            as="h1"
            className="ml-[296px] text-[30px] font-semibold tracking-[-1.20px] text-black-900_01 lg:text-[25px] md:ml-0 md:text-[24px] sm:text-[22px]"
          >
            Your to-do list
          </Heading>
          <footer className="flex flex-col items-start justify-center self-stretch rounded-[12px] bg-black-900 py-[78px] pl-[188px] pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
            <div className="mt-[46px] flex w-[76%] flex-col gap-[118px] lg:w-full lg:gap-[118px] md:w-full md:gap-[88px] sm:gap-[59px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[22%] flex-col items-start gap-2.5 md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">About Us</Text>
                  <ul className="flex flex-col items-start gap-0.5">
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
                <div className="mt-1 flex w-[28%] flex-col items-start gap-2.5 md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">Support</Text>
                  <ul className="flex flex-col items-start gap-0.5">
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
                <div className="flex w-[30%] flex-col items-start gap-2.5 self-center md:w-full">
                  <Text className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">Become a Partner</Text>
                  <ul className="flex flex-col items-start gap-0.5">
                    <li>
                      <a href="#">
                        <Text className="text-[15px] font-normal text-white-a700">Agencies</Text>
                      </a>
                    </li>
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
                <div className="flex flex-col items-start gap-2.5">
                  <Text className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">
                    Constant Contact Onairn
                  </Text>
                  <ul className="flex flex-col items-start gap-0.5">
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
              <div className="h-[0.7px] bg-white-a700" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

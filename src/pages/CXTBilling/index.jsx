import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import BillingSection from "./BillingSection";
import React from "react";

export default function CXTBillingPage() {
  return (
    <>
      <Helmet>
        <title>Billing FAQ - ConnecXit User Support</title>
        <meta
          name="description"
          content="Find answers to your billing questions at ConnecXit. Learn about transactions, disputes, refunds, and billing information. Get the support you need quickly."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex flex-col gap-[62px] sm:gap-[31px]">
          <header className="flex items-center justify-center bg-white-a700">
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
                      alt="Secondary Logo"
                      className="absolute bottom-0 right-1/4 top-0 my-auto h-[40px] w-[40px] rounded-[20px] object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="relative h-[1304px]">
            <div className="absolute right-[8%] top-0 m-auto flex w-[70%] flex-col items-end gap-[54px] rounded bg-white-a700 py-8 shadow-md sm:gap-[27px] sm:py-5">
              {/* billing section */}
              <BillingSection />
              <div className="mb-[352px] mr-[62px] h-[16px] w-[16px] rounded-lg bg-white-a700 md:mr-0" />
            </div>
            <div className="container-lg absolute left-0 right-0 top-[21.76px] z-[4] mx-[120px] my-auto flex flex-1 flex-col items-start gap-5 md:mx-0 md:px-5">
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Account Settings
              </Text>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-green-800">
                Notification Settings
              </Text>
              <a href="Logout" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Logout
                </Text>
              </a>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Search
              </Text>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Billing
              </Text>
            </div>
            <Footer className="absolute bottom-0 left-0 right-0 m-auto flex-1 rounded-[12px] bg-black-900" />
          </div>
        </div>
      </div>
    </>
  );
}

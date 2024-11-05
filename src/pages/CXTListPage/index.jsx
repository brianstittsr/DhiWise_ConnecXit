import { Helmet } from "react-helmet";
import { Img, Switch, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import React from "react";

export default function CXTListPagePage() {
  return (
    <>
      <Helmet>
        <title>Find Professional Chefs - ConnecXit Chef Listings</title>
        <meta
          name="description"
          content="Discover top-rated chefs in Raleigh, NC. View profiles, starting prices, and read customer testimonials to find the perfect chef for your event."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex flex-col items-start gap-[62px] sm:gap-[31px]">
          <header className="flex items-center justify-center self-stretch bg-white-a700">
            <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              <Img
                src="images/img_connecxit_logo.png"
                alt="Logo Image"
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
          <Heading
            size="heading2xl"
            as="h1"
            className="ml-[446px] text-[20px] font-semibold tracking-[-0.80px] text-black-900_01 md:ml-0"
          >
            Chefs that matched your search criteria ...
          </Heading>
          <div className="flex flex-col items-center self-stretch">
            <div className="container-lg flex items-start justify-center self-stretch py-1.5 md:flex-col md:px-5">
              <div className="mt-3 flex flex-col items-start">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Filters
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-green-800">
                  When can you start?
                </Text>
                <Text
                  size="textmd"
                  as="p"
                  className="mt-[22px] text-[13px] font-normal tracking-[-0.52px] text-gray-400"
                >
                  Within 48 hours
                </Text>
                <Text as="p" className="mt-[26px] text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Search
                </Text>
                <Text as="p" className="mt-3 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Billing
                </Text>
              </div>
              <div className="mt-2.5 flex w-[76%] flex-col items-end gap-12 self-center md:w-full">
                <div className="mt-1.5 self-stretch">
                  <div className="flex flex-col items-end">
                    <div className="mx-[82px] flex items-center gap-12 self-stretch md:mx-0 md:flex-col">
                      <div className="mb-1.5 flex w-[20%] flex-col items-end rounded-[68px] bg-white-a700 py-2.5 md:w-full">
                        <Img
                          src="images/img_rectangle_355.png"
                          alt="Profile Image"
                          className="h-[126px] w-[126px] rounded-[58px] object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-[62px] self-end px-2 md:self-stretch sm:gap-[31px] sm:self-auto">
                        <div className="flex flex-col items-start self-stretch">
                          <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                            $30/person
                          </Text>
                          <Text
                            size="textxs"
                            as="p"
                            className="text-[10px] font-normal tracking-[-0.40px] text-gray-500_01"
                          >
                            starting price
                          </Text>
                        </div>
                        <Button className="mb-2 min-w-[116px] rounded-[16px] px-[18px] tracking-[-0.60px]">
                          View Profile
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start justify-end self-stretch md:flex-col">
                      <div className="mb-[22px] flex w-[64%] flex-col items-start gap-5 md:w-full">
                        <Heading
                          size="headingmd"
                          as="h2"
                          className="text-[15px] font-bold tracking-[-0.60px] text-gray-700_03"
                        >
                          CHEF NICO
                        </Heading>
                        <div className="flex flex-col items-start gap-0.5 self-stretch">
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            324 hires on Conn
                          </Text>
                          <Text
                            size="texts"
                            as="p"
                            className="text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            Serves Raleigh, NC
                          </Text>
                          <Text
                            size="texts"
                            as="p"
                            className="mb-2.5 text-[12px] font-normal tracking-[-0.48px] text-gray-700_03"
                          >
                            Respond a within a day
                          </Text>
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="w-[66%] text-[13px] font-normal leading-[146.7%] tracking-[-0.52px] text-gray-700_03 md:w-full"
                        >
                          Hannah H. Says “I hired Chef Nico to cook for a bachelorette party. He helped me to make a
                          custom menu that would best fit our needs.”
                        </Text>
                      </div>
                      <Switch value={true} className="self-end md:self-auto" />
                    </div>
                    <Switch value={false} className="mt-[132px]" />
                    <div className="mt-[134px] h-[16px] w-[16px] rounded-lg bg-white-a700" />
                  </div>
                </div>
                <Img src="images/img_ellipse_13.png" alt="Secondary Image" className="h-px w-[2%] object-contain" />
              </div>
            </div>
            <Footer className="relative mt-[-6px] self-stretch" />
          </div>
        </div>
      </div>
    </>
  );
}

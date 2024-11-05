import { Helmet } from "react-helmet";
import { Text, Switch, Heading, Img, Button } from "../../components";
import Footer4 from "../../components/Footer4";
import React from "react";

export default function CXTAccountSettingsPage() {
  return (
    <>
      <Helmet>
        <title>Manage Your Account Settings and Notifications</title>
        <meta
          name="description"
          content="Customize your account settings for notifications, billing, and privacy. Stay informed with updates on projects, promotions, and account support."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[62px] bg-white-a700 sm:gap-[31px]">
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
        <div className="container-lg flex items-start self-stretch md:flex-col md:px-5">
          <div className="mt-5 flex w-[16%] flex-col items-start gap-[22px] md:w-full">
            <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
              Account Settings
            </Text>
            <div className="flex flex-col items-start self-stretch">
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-green-800">
                Notification Settings
              </Text>
              <a href="Logout" target="_blank" rel="noreferrer" className="mt-5">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Logout
                </Text>
              </a>
              <Text as="p" className="mt-[18px] text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Search
              </Text>
              <Text as="p" className="mt-2 text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Billing
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-end self-center md:self-stretch">
            <div className="flex w-[94%] flex-col items-start rounded bg-white-a700 px-10 py-[30px] shadow-md md:w-full sm:p-5">
              <Heading
                size="heading2xl"
                as="h1"
                className="text-[20px] font-semibold tracking-[-0.80px] text-black-900_01"
              >
                Notifications
              </Heading>
              <Text as="p" className="mt-7 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                Get push notifications about...
              </Text>
              <div className="relative mr-1 mt-3.5 h-[292px] self-stretch md:mr-0 md:h-auto">
                <div className="mx-4 mt-3.5 flex flex-1 flex-col items-start gap-1 md:mx-0">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                    Messages
                  </Text>
                  <Text size="textmd" as="p" className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03">
                    Pros send you messages.
                  </Text>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] border border-solid border-blue_gray-100_02 py-3">
                  <div className="mt-2.5 flex flex-col items-center">
                    <Switch value={true} className="mr-3.5 self-end md:mr-0" />
                    <div className="mt-[26px] h-px self-stretch bg-blue_gray-100_02" />
                    <div className="relative z-[2] mx-4 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                      <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                        Project reminders and updates
                      </Text>
                      <Switch value={true} className="self-end" />
                    </div>
                    <Text
                      size="textmd"
                      as="p"
                      className="relative ml-4 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                    >
                      You’ve got upcoming projects or there are other updates about your projects.
                    </Text>
                    <div className="mt-2.5 self-stretch">
                      <div className="flex flex-col items-start">
                        <div className="h-px self-stretch bg-blue_gray-100_02" />
                        <div className="relative z-[1] mx-4 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                          <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                            Promotions and tips
                          </Text>
                          <Switch value={true} className="self-end" />
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="relative ml-3.5 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                        >
                          There are coupons, promotions, surveys, and project ideas you might like.
                        </Text>
                        <div className="mt-2.5 h-px self-stretch bg-blue_gray-100_02" />
                      </div>
                    </div>
                    <div className="mx-4 mt-2.5 flex items-start justify-center self-stretch md:mx-0 sm:flex-col">
                      <div className="flex flex-1 flex-col items-start gap-1 self-center sm:self-stretch">
                        <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Account support
                        </Text>
                        <Text
                          size="textmd"
                          as="p"
                          className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03"
                        >
                          We have updates about your account, projects, and security/privacy matters.
                        </Text>
                      </div>
                      <Switch value={true} className="mt-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-1 mt-9 self-stretch md:mr-0">
                <div className="flex flex-col items-start gap-4">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                    Tell me about...
                  </Text>
                  <div className="relative h-[80px] content-center self-stretch md:h-auto">
                    <Text as="p" className="ml-3.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03 md:ml-0">
                      All Text Notifications
                    </Text>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end rounded-[5px] border border-solid border-blue_gray-100_02 px-[18px] py-7 sm:py-5">
                      <Switch value={false} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[38px] mr-1 mt-9 self-stretch md:mr-0">
                <div className="flex flex-col items-start gap-4">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                    Email me about...
                  </Text>
                  <div className="relative h-[432px] self-stretch md:h-auto">
                    <div className="mx-4 mt-3.5 flex flex-1 flex-col items-start gap-1.5 md:mx-0">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                        Helpful tips and inspiration
                      </Text>
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03"
                      >
                        Cost guides, project checklists, and tips from Thumbtack pros
                      </Text>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] border border-solid border-blue_gray-100_02 py-1.5">
                      <div className="mt-4 flex flex-col items-center">
                        <Switch value={true} className="mr-3.5 self-end md:mr-0" />
                        <div className="mt-[26px] h-px self-stretch bg-blue_gray-100_02" />
                        <div className="relative z-[5] mx-4 mt-2 flex items-start justify-between gap-5 self-stretch md:mx-0">
                          <Text as="p" className="mb-3 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                            Recommendations
                          </Text>
                          <Switch value={true} className="self-end" />
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="relative ml-4 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                        >
                          Personalized suggestions for projects, pros, and more
                        </Text>
                        <div className="mt-2.5 flex flex-col gap-2.5 self-stretch">
                          <div className="h-px bg-blue_gray-100_02" />
                          <div className="mx-4 md:mx-0">
                            <div className="flex flex-col items-start">
                              <div className="relative z-[3] flex items-start justify-between gap-5 self-stretch">
                                <Text
                                  as="p"
                                  className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03"
                                >
                                  Special Offers
                                </Text>
                                <Switch value={true} className="self-end" />
                              </div>
                              <Text
                                size="textmd"
                                as="p"
                                className="relative mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03"
                              >
                                Discounts, rewards, and promotions
                              </Text>
                            </div>
                          </div>
                          <div className="h-px bg-blue_gray-100_02" />
                        </div>
                        <div className="relative z-[6] mx-4 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                          <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                            Invitations to give feedback
                          </Text>
                          <Switch value={true} className="self-end" />
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="relative ml-4 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                        >
                          Quick surveys to get your ideas for improving Thumbtack
                        </Text>
                        <div className="mt-2.5 h-px self-stretch bg-blue_gray-100_02" />
                        <div className="relative z-[7] ml-4 mr-3 mt-2 flex items-start justify-between gap-5 self-stretch md:mx-0">
                          <Text as="p" className="mb-3 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                            Reminders
                          </Text>
                          <Switch value={false} className="self-end" />
                        </div>
                        <Text
                          size="textmd"
                          as="p"
                          className="relative ml-4 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                        >
                          Incomplete request reminders, recurring project reminders, and more
                        </Text>
                        <div className="mt-2.5 self-stretch">
                          <div className="flex flex-col items-start">
                            <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                            <div className="relative z-[4] mx-3.5 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                              <Text
                                as="p"
                                className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03"
                              >
                                Other
                              </Text>
                              <Switch value={true} className="self-end" />
                            </div>
                            <Text
                              size="textmd"
                              as="p"
                              className="relative ml-4 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                            >
                              Feature updates and product announcements
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer4 />
      </div>
    </>
  );
}

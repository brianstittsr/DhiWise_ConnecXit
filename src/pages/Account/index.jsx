import { Helmet } from "react-helmet";
import { Text, Button, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import React from "react";

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Manage Your Account Settings on ConnecXit</title>
        <meta
          name="description"
          content="Update your personal details, manage notifications, and customize your ConnecXit account settings. Ensure your event planning is seamless with our user-friendly platform."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[92px] bg-gray-100 lg:gap-[92px] md:gap-[69px] sm:gap-[46px]">
        <div className="h-[100px] self-stretch bg-[url(/public/images/img_group_7482.png)] bg-cover bg-no-repeat py-2 lg:h-auto md:h-auto">
          <div className="mt-2">
            <div className="flex flex-col items-center gap-1">
              <Header2 />
              <div className="container-4xl flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="flex w-[88%] lg:w-full md:w-full">
                  <div className="flex w-[14%] flex-wrap justify-between gap-5">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Home
                    </Text>
                    <Text as="p" className="mr-16 text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Other Info
                    </Text>
                  </div>
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                    Events and more
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-4xl mb-1 flex flex-col gap-[1072px] lg:gap-[804px] lg:px-5 md:gap-[804px] md:px-5 sm:gap-[536px]">
          <div className="mx-[166px] flex items-start md:mx-0 md:flex-col">
            <div className="mt-5 flex flex-col items-start gap-[22px]">
              <Heading size="headingmd" as="h1" className="text-[15px] font-semibold tracking-[-0.60px] text-green-800">
                Account Settings
              </Heading>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Notification Settings
              </Text>
              <a href="Logout" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Logout
                </Text>
              </a>
            </div>
            <div className="flex w-[62%] flex-col items-start gap-[26px] self-center rounded bg-white-a700 p-8 shadow-md md:w-full sm:p-4">
              <Heading
                size="heading2xl"
                as="h2"
                className="ml-2 text-[20px] font-semibold tracking-[-0.80px] text-black-900_01 lg:text-[17px] md:ml-0"
              >
                Account Settings
              </Heading>
              <div className="mb-[42px] ml-2 self-stretch md:ml-0">
                <div className="flex flex-col gap-7">
                  <div>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-1.5">
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[15px] font-semibold tracking-[-0.60px] text-blue_gray-900"
                          >
                            First Name
                          </Heading>
                          <Input
                            size="xs"
                            shape="square"
                            name="First Name Input"
                            placeholder={`Anna`}
                            className="self-stretch !border px-3.5 tracking-[-0.60px]"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-1.5">
                          <Heading
                            size="headingmd"
                            as="h4"
                            className="text-[15px] font-semibold tracking-[-0.60px] text-blue_gray-900"
                          >
                            Last Name
                          </Heading>
                          <Input
                            size="xs"
                            shape="square"
                            name="Last Name Input"
                            placeholder={`Faris`}
                            className="self-stretch !border px-3.5 tracking-[-0.60px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-1.5">
                        <Heading
                          size="headingmd"
                          as="h5"
                          className="text-[15px] font-semibold tracking-[-0.60px] text-blue_gray-900"
                        >
                          Email
                        </Heading>
                        <Input shape="square" name="Email Input" className="self-stretch !border px-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <Heading
                      size="headingmd"
                      as="h6"
                      className="text-[15px] font-semibold tracking-[-0.60px] text-blue_gray-900"
                    >
                      Phone
                    </Heading>
                    <Input
                      size="xs"
                      shape="square"
                      name="Phone Input"
                      placeholder={`+(555) 5555 5555`}
                      className="self-stretch !border px-3.5 tracking-[-0.60px]"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col items-start gap-1.5">
                      <Heading
                        size="headingmd"
                        as="p"
                        className="text-[15px] font-semibold tracking-[-0.60px] text-blue_gray-900"
                      >
                        Timezone
                      </Heading>
                      <div className="relative h-[36px] content-center self-stretch lg:h-auto md:h-auto">
                        <Text
                          as="p"
                          className="ml-3.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03 lg:ml-0 md:ml-0"
                        >
                          Pacific (currently 5:52am)
                        </Text>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[36px] flex-1 border border-solid border-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-[13px]">
                    <Button
                      color="green_900"
                      size="xs"
                      className="min-w-[80px] rounded-[5px] px-5 font-semibold tracking-[-0.60px]"
                    >
                      Save
                    </Button>
                    <Button
                      color="black_900_33"
                      size="xs"
                      className="min-w-[80px] rounded-[5px] pl-4 pr-3 tracking-[-0.60px]"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex flex-col items-start justify-center rounded-[12px] bg-black-900 py-[78px] pl-[188px] pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
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

import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import CXTLandingRowtransportati from "../../components/CXTLandingRowtransportati";
import Footer3 from "../../components/Footer3";
import Header4 from "../../components/Header4";
import CallToActionSection from "./CallToActionSection";
import EventPlannerSection from "./EventPlannerSection";
import EventPlanningSection from "./EventPlanningSection";
import EventPromotionSection from "./EventPromotionSection";
import VendorSearchSection from "./VendorSearchSection";
import React from "react";

export default function CXTLandingPage() {
  return (
    <>
      <Helmet>
        <title>Event Planning Made Easy - Join ConnecXit Today</title>
        <meta
          name="description"
          content="Discover top event planners, venues, and vendors on ConnecXit. Simplify your event planning with our comprehensive resources. Sign up now for a stress-free experience!"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[62px] bg-white-a700 sm:gap-[31px]">
        <Header4 />
        <div className="flex flex-col items-center gap-[60px] sm:gap-[30px]">
          {/* event planning section */}
          <EventPlanningSection />
          <div className="container-xl flex flex-col items-center gap-[58px] self-stretch md:px-5 sm:gap-[29px]">
            {/* event promotion section */}
            <EventPromotionSection />

            {/* event planner section */}
            <EventPlannerSection />
            <Heading
              size="heading4xl"
              as="h4"
              className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
            >
              <span className="text-black-900_02">Explore more&nbsp;</span>
              <span className="text-deep_orange-500">event services</span>
              <span className="text-black-900_01">.</span>
            </Heading>
          </div>
          <div className="flex flex-col gap-[60px] self-stretch">
            {/* transportation and venues section */}
            <CXTLandingRowtransportati />

            {/* vendor search section */}
            <VendorSearchSection />
          </div>

          {/* call to action section */}
          <CallToActionSection />
        </div>
        <Footer3 />
      </div>
    </>
  );
}

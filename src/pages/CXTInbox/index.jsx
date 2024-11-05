import { Helmet } from "react-helmet";
import Footer2 from "../../components/Footer2";
import InboxSection from "./InboxSection";
import RecommendedEventPlannersSection from "./RecommendedEventPlannersSection";
import RecommendedVendorsSection from "./RecommendedVendorsSection";
import React from "react";

export default function CXTInboxPage() {
  return (
    <>
      <Helmet>
        <title>Inbox Communication - Stay Connected</title>
        <meta
          name="description"
          content="Manage your conversations, project reminders, and bookings all in one place with our Inbox Communication tool. Keep the conversation going, even on the go."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[148px] bg-white-a700 py-[42px] lg:gap-[111px] md:gap-[111px] md:py-5 sm:gap-[74px] sm:py-4">
        <div className="mt-[94px] flex flex-col gap-[38px] self-stretch">
          {/* inbox section */}
          <InboxSection />

          {/* recommended event planners section */}
          <RecommendedEventPlannersSection />

          {/* recommended vendors section */}
          <RecommendedVendorsSection />
        </div>
        <Footer2 />
      </div>
    </>
  );
}

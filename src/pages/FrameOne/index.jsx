import { Helmet } from "react-helmet";
import Header1 from "../../components/Header1";
import React from "react";

export default function FrameOnePage() {
  return (
    <>
      <Helmet>
        <title>Event Services - Find Top Event Planners, Photographers, and Caterers</title>
        <meta
          name="description"
          content="Discover premier event services including planners, photographers, and caterers to make your event memorable. Expert coordination, stunning photography, and exquisite catering all in one place."
        />
      </Helmet>
      <div className="flex w-full flex-col overflow-auto">
        <Header1 />
      </div>
    </>
  );
}

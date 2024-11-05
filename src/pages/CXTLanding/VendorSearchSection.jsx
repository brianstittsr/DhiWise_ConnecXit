import { Heading, Img } from "../../components";
import React, { Suspense } from "react";

const serviceProvidersList = [
  { photographerImage: "images/img_rectangle_276_7.png", photographerText: "Photographers" },
  { photographerImage: "images/img_rectangle_276_8.png", photographerText: "Caterers" },
  { photographerImage: "images/img_rectangle_276_9.png", photographerText: "Florists" },
  { photographerImage: "images/img_rectangle_276_10.png", photographerText: "Live Entertainment" },
];

export default function VendorSearchSection() {
  return (
    <>
      {/* vendor search section */}
      <div className="flex flex-1 flex-col items-center gap-[50px] px-14 md:px-5">
        <Heading
          size="heading4xl"
          as="h2"
          className="text-[40px] font-semibold tracking-[-1.60px] text-black-900_02 md:text-[38px] sm:text-[36px]"
        >
          <span className="text-black-900_02">Search Pro Vendors by&nbsp;</span>
          <span className="text-deep_orange-500">category</span>
        </Heading>
        <div className="container-xl flex gap-12 px-6 py-3 md:flex-col sm:px-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {serviceProvidersList.map((d, index) => (
              <div key={"cardList" + index} className="flex w-[24%] flex-col items-center gap-2.5 md:w-full">
                <Img
                  src={d.photographerImage}
                  alt="Photographer Image"
                  className="h-[326px] w-full rounded-[14px] object-cover md:h-auto"
                />
                <Heading as="h3" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                  {d.photographerText}
                </Heading>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}

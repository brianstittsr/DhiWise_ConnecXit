import { Helmet } from "react-helmet";
import React from "react";

export default function ResultListPage() {
  return (
    <>
      <Helmet>
        <title>Results List - Your Search Queries Answered</title>
        <meta
          name="description"
          content="Browse through our comprehensive list of results tailored to your search. Find exactly what you need with ease and convenience."
        />
      </Helmet>
      <div className="h-[1754px] w-full bg-gray-300" />
    </>
  );
}

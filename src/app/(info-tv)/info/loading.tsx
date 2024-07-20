"use client";

import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-screen h-screen mx-auto flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#F5C111"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
import React from "react";
import SwapInput from "./SwapInput";

const Swap = () => {
  return (
    <div className="w-[500px] rounded-3xl bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between pb-2">
        <div className="flex space-x-4 text-sm font-semibold">
          <button className="text-black">Swap</button>
          <button className="text-gray-500">Limit</button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <SwapInput operation="pay" />
        <SwapInput operation="receive" />
      </div>
      <button className="mt-6 flex w-full items-center justify-center space-x-2 rounded-full bg-blue-100 py-2 text-sm text-blue-700">
        <i className="fas fa-wallet"></i>
        <span>Connect wallet</span>
      </button>
    </div>
  );
};

export default Swap;

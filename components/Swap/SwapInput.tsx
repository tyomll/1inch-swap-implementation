import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  operation: "pay" | "receive";
}
const SwapInput = ({ operation }: Props) => {
  const isPaying = operation === "pay";
  return (
    <div
      className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isPaying ? "bg-foreground" : "border bg-white"}`}
    >
      <div className="flex w-full flex-col space-y-2">
        <p className="text-xs text-slate-500">You {operation}</p>
        <div className="flex items-center justify-between">
          <div
            className={`-ml-2 flex cursor-pointer items-center space-x-2 rounded-2xl p-2 ${isPaying ? "hover:bg-white/50" : "hover:bg-foreground/80"}`}
          >
            <Image
              src="https://placehold.co/32x32"
              alt="ETH"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-gray-800">ETH</span>
                <ChevronRight
                  width={18}
                  height={18}
                  className="text-gray-500"
                />
              </div>

              <span className="text-xs text-slate-500">on Ethereum</span>
            </div>
          </div>
          <input
            type="number"
            className="numericInput w-20 border-none bg-transparent text-right text-2xl text-gray-800 outline-none"
            defaultValue="1"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="self-end text-xs text-gray-500">Ether</p>
          <p className="self-end text-xs text-gray-500">~$3,653.47</p>
        </div>
      </div>
    </div>
  );
};

export default SwapInput;

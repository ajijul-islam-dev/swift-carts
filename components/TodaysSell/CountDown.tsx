import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({
  expiryTimestamp,
  isRounded,
}: {
  expiryTimestamp: any;
  isRounded?: boolean;
}) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div className="font-bold text-sm md:text-xl">
        <span className={`${isRounded ? "text-black bg-white w-10 h-10 p-1 md:px-3 py-3 rounded-full" : "text-white bg-black px-1 md:px-3 py-1"}`}>{days}</span> :{" "}
        <span className={`${isRounded ? "text-black bg-white w-10 h-10 p-1 md:px-3 py-3 rounded-full" : "text-white bg-black px-1 md:px-3 py-1"}`}>{hours}</span> :{" "}
        <span className={`${isRounded ? "text-black bg-white w-10 h-10 p-1 md:px-3 py-3 rounded-full" : "text-white bg-black px-1 md:px-3 py-1"}`}>{minutes}</span>{" "}
        :{" "}
        <span className={`${isRounded ? "text-black bg-white w-10 h-10 p-1 md:px-3 py-3 rounded-full" : "text-white bg-black px-1 md:px-3 py-1"}`}>{seconds}</span>
      </div>
    </div>
  );
}

export default function CountDown({ isRounded }: { isRounded?: boolean }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);
  return (
    <div>
      <MyTimer expiryTimestamp={time} isRounded={isRounded} />
    </div>
  );
}

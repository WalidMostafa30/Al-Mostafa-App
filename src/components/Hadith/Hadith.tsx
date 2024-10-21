"use client";
import { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

type HadithsType = {
  hadithnumber: number;
  text: string;
};

const Hadith = ({ hadithData }: { hadithData: HadithsType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHadith = () => {
    if (currentIndex + 1 === hadithData.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevHadith = () => {
    if (currentIndex === 0) {
      setCurrentIndex(hadithData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mainShadow bg-qur-1 rounded-lg p-3">
      <div className="text-qur-1 mb-3 flex items-center justify-between">
        <button
          className="border-qur-2 border rounded-md p-1 lg:p-2 bg-qur-2 font-bold text-lg lg:text-xl hover:bg-qur-1 hover:text-qur-2 duration-300 flex items-center gap-1"
          onClick={prevHadith}
        >
          <BiSolidRightArrow />
          السابق
        </button>

        <span className="rounded-md bg-qur-2 text-qur-1 font-bold p-1 lg:p-2 text-lg lg:text-xl">
          {currentIndex + 1} / {hadithData && hadithData.length}
        </span>

        <button
          className="border-qur-2 border rounded-md p-1 lg:p-2 bg-qur-2 font-bold text-lg lg:text-xl hover:bg-qur-1 hover:text-qur-2 duration-300 flex items-center gap-1"
          onClick={nextHadith}
        >
          التالى
          <BiSolidLeftArrow />
        </button>
      </div>

      <div className="bg-qur-2 text-qur-1 rounded-md p-3 text-lg lg:text-2xl font-semibold min-h-52 content-center">
        {hadithData && hadithData[currentIndex].text}
      </div>
    </div>
  );
};

export default Hadith;

"use client";

import "./TasbehLayout.css";
import { useState } from "react";
import "./TasbehLayout.css";
import { MdOutlineReplay } from "react-icons/md";
import { GiClick } from "react-icons/gi";

interface TasbehLayoutProps {
  content: string;
  goal: number;
}

const TasbehLayout = ({ content, goal }: TasbehLayoutProps) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter === goal - 1) {
      setCounter(0);
      alert("لقد انهيت التسبيح");
    } else if (goal) {
      setCounter(counter + 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const deg = (counter / goal) * 100;

  return (
    <section className="fixed w-full top-16 bg-qur-2 z-10">
      <div className="container">
        <div className="w-full lg:w-1/2 mx-auto mb-10">
          <div className="bg-qur-1 rounded-lg mainShadow text-qur-2 flex items-center text-xl p-1 mb-5">
            <span className="p-2">المضمون</span>
            <p
              className="p-2 font-semibold bg-qur-2 text-qur-1 w-full rounded-md"
              style={{wordBreak:"break-word"}}
            >
              {content}
            </p>
          </div>

          <div className="bg-qur-1 rounded-lg mainShadow text-qur-2 flex items-center text-xl p-1">
            <span className="p-2">العدد</span>
            <p className="p-2 font-semibold bg-qur-2 text-qur-1 w-full rounded-md">
              {goal}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mx-auto">
          <div
            className="w-40 h-40 rounded-full mainShadow flex items-center justify-center bg-slate-950 m-auto"
            style={{
              background: `conic-gradient(#323232 ${deg * 3.6}deg, #d0d0d0 ${
                deg * 3.6
              }deg)`,
            }}
          >
            <div className="bg-white w-36 h-36 rounded-full flex items-center justify-center text-5xl font-semibold">
              {counter}
            </div>
          </div>

          <div className="mx-auto w-fit mt-5 relative">
            <button
              className="mainBtn flex items-center gap-1 text-2xl"
              onClick={handleClick}
            >
              اضغط للتسبيح
              <GiClick />
            </button>

            <button
              className="w-8 h-8 rounded-full mainShadow bg-qur-1 text-qur-2 text-xl flex items-center justify-center absolute bottom-0 right-[-70px]"
              onClick={resetCounter}
            >
              <MdOutlineReplay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasbehLayout;

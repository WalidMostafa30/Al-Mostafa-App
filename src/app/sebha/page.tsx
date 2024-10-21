"use client";

import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import TasbehLayout from "@/src/components/TasbehLayout/TasbehLayout";
import { useState, FormEvent, ChangeEvent } from "react";

const Tasbeh = () => {
  const [tasbehLayout, setTasbehLayout] = useState(false);
  const [content, setContent] = useState("");
  const [goal, setGoal] = useState("");

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onChangeGoal = (e: ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.trim().length > 0 && goal.trim().length > 0) {
      handleTasbehLayout();
    } else {
      alert("تأكد من ادخال المضمون و الهدف");
    }
  };

  const handleTasbehLayout = () => setTasbehLayout(!tasbehLayout);

  return (
    <>
      <section>
        <GlobalTitle title="انشئ سبحتك" />

        <div className="container">
          <form
            className="mx-auto w-full lg:w-2/4 flex flex-col gap-5"
            onSubmit={onSubmit}
          >
            <input
              className="p-3 rounded-lg text-xl outline-none mainShadow"
              type="text"
              placeholder="أدخل مضمون التسبيح .."
              onChange={onChangeContent}
              value={content}
            />

            <input
              className="p-3 rounded-lg text-xl outline-none mainShadow"
              type="number"
              placeholder="أدخل عدد التسبيح .."
              onChange={onChangeGoal}
              value={goal}
            />

            <button type="submit" className="mainBtn text-xl w-fit mx-auto px-5">
              بدء التسبيح
            </button>
          </form>
        </div>
      </section>

      {tasbehLayout && (
        <TasbehLayout content={content} goal={parseInt(goal, 10)} />
      )}
    </>
  );
};

export default Tasbeh;

"use client";

import { MdErrorOutline } from "react-icons/md";

const error = () => {
  return (
    <div className="bg-qur-1 text-qur-2 p-6 rounded-xl mainShadow w-fit text-3xl text-center mx-auto mt-40 flex items-center gap-3">
      الصفحه غير موجوده
      <MdErrorOutline />
    </div>
  );
};

export default error;

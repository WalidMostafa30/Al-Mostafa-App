"use client";

import { useState } from "react";
import GlobalTitle from "../GlobalTitle/GlobalTitle";

type PropsType = {
  Data: {
    id: string;
    title: string;
    category: string;
    array: {
      category: string;
      count: string;
      description: string;
      content: string;
    }[];
  }[];
  ID: string;
};

export default function AdeyaPage({ Data, ID }: PropsType) {
  const [data, setData] = useState(() => {
    const filterData = Data.find((i) => i.id === ID);
    return filterData;
  });

  return (
    <article>
      {data && (
        <>
          <GlobalTitle title={data.title} />
          <div className="container flex flex-col gap-4">
            {data.array.map((ade, index) => {
              return (
                <div
                  className="bg-qur-1 text-qur-2 mainShadow rounded-lg flex items-center border-t-2 border-e-2 border-qur-1"
                  key={index}
                >
                  <div className="px-2">{`(${index + 1})`}</div>

                  <div className="w-full rounded-lg border-s-2 border-qur-2 overflow-hidden">
                    <h5 className="p-2 bg-qur-2 text-qur-1 text-lg lg:text-2xl">
                      {ade.content}
                    </h5>

                    <div className="p-2">
                      <p>عدد المرات : {parseInt(ade.count, 10)}</p>
                      <p>{ade.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </article>
  );
}

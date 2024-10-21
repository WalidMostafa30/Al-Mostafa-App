"use client";

import { useEffect, useState } from "react";
import { egyptCities } from "@/src/assets/data/Data";
import Clock from "@/src/components/Clock/Clock";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import axios from "axios";
import Error from "@/src/components/Error/Error";

type TimeType = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
};

type FormattedTime = {
  name: string;
  hour: number;
  minute: number;
  AM: string;
};

const SalahTime: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [timeArray, setTimeArray] = useState<FormattedTime[]>([]);

  useEffect(() => {
    fetchSalahTime(city);
  }, [city]);

  const fetchSalahTime = async (selectedCity: string) => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    try {
      const res = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${selectedCity}&country=Egypt&method=8`
      );

      const timings: TimeType = res.data.data.timings;
      timings && setTimeArray(formatTimings(timings));
    } catch (error) {
      console.error("Error fetching Salah time:", error);
    }
  };

  const formatTimings = (timings: TimeType): FormattedTime[] => {
    const sTime = (timeString: string) => {
      let [hour, minute] = timeString.split(":").map(Number);
      let AM = "ص";
      if (hour >= 12) {
        AM = "م";
        hour = hour > 12 ? hour - 12 : hour;
      }
      return { hour, minute, AM };
    };

    return [
      { name: "الفجر", ...sTime(timings.Fajr) },
      { name: "الشروق", ...sTime(timings.Sunrise) },
      { name: "الضهر", ...sTime(timings.Dhuhr) },
      { name: "العصر", ...sTime(timings.Asr) },
      { name: "المغرب", ...sTime(timings.Maghrib) },
      { name: "العشاء", ...sTime(timings.Isha) },
    ];
  };

  return (
    <section className="SalahTime">
      <GlobalTitle title="اوقات الصلاة" />
      {timeArray ? (
        <>
          <div className="w-fit mx-auto p-2 rounded-xl flex items-center justify-center gap-3 mb-5 text-xl bg-qur-1 mainShadow">
            <h1 className="text-qur-2">اختر المدينة</h1>
            <select
              className="p-2 rounded-lg outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {egyptCities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="container mainGrid gap-6">
            {timeArray.map((i) => (
              <div key={i.name} className="flex flex-col items-center gap-2">
                <Clock hour={i.hour} minute={i.minute} />
                <div className="bg-qur-1 text-qur-2 p-2 rounded-lg mainShadow text-center text-2xl w-4/5 flex items-center justify-between">
                  <h4>{i.name}</h4>
                  <h1>
                    {i.hour < 10 ? `0${i.hour}` : i.hour}:
                    {i.minute < 10 ? `0${i.minute}` : i.minute} {i.AM}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Error msg="عذرًا، حدث خطأ أثناء جلب مواقيت الصلاة. يرجى المحاولة مرة أخرى لاحقًا." />
      )}
    </section>
  );
};

export default SalahTime;

"use client";
import { useRef, useState } from "react";

type ayahType = {
  text: string;
  audio: string;
  numberInSurah: number;
};

type SurahType = {
  name: string;
  numberOfAyahs: number;
  ayahs: ayahType[];
};

const Ayah = ({ surah }: { surah: SurahType }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [ayahActive, setAyahActive] = useState(false);
  const audios: string[] = surah.ayahs.map((ayah) => ayah.audio);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnded = () => {
    if (currentIndex + 1 < audios.length) {
      setCurrentIndex((prev) => prev + 1);
      if (audioRef.current) {
        audioRef.current.autoplay = true;
      }
    } else {
      setCurrentIndex(0);
      setAyahActive(false);
      if (audioRef.current) {
        audioRef.current.autoplay = false;
      }
    }
  };

  const onPlay = () => {
    setAyahActive(true);
  };

  const handleAyah = (index: number) => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.autoplay = true;
      setCurrentIndex(index);
      setAyahActive(true);
    }
  };

  return (
    <div>
      {surah && (
        <>
          <div className="mainShadow bg-qur-1 p-2 rounded-full mb-4">
            <audio
              className="w-full"
              src={audios[currentIndex]}
              controls
              ref={audioRef}
              onEnded={handleEnded}
              onPlay={onPlay}
            ></audio>
          </div>

          <div className="mainShadow bg-qur-1 p-2 rounded-2xl">
            <div className="bg-qur-2 p-2 rounded-lg">
              {surah.ayahs.map((sur, index) => {
                return (
                  <p
                    key={sur.numberInSurah}
                    onClick={() => handleAyah(index)}
                    className={`text-qur-1 p-1 lg:p-2 text-base lg:text-2xl rounded-md cursor-pointer text-center font-semibold hover:bg-qur-1 hover:text-qur-2 duration-300
                  ${
                    currentIndex === index &&
                    ayahActive &&
                    "bg-qur-1 text-qur-2"
                  }`}
                  >
                    {sur.text}{" "}
                    <span className="font-extrabold">{`{ ${sur.numberInSurah} }`}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Ayah;

import Error from "@/src/components/Error/Error";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import axios from "axios";
import Link from "next/link";
import React from "react";

type SurahType = {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
};

const JuzSurahs = async ({ params }: { params: { juzSurahs: string } }) => {
  const getjuzSurahs = async () => {
    try {
      const data = await axios.get(
        `https://api.alquran.cloud/v1/juz/${params.juzSurahs}`
      );

      return data.data.data.surahs;
    } catch (error) {
      console.log(error);
    }
  };
  const surahData: SurahType[] = await getjuzSurahs();

  return (
    <section className="Quran-kareem">
      <GlobalTitle title={`الجزء { ${params.juzSurahs} }`} />

      <div className="container mainGrid">
        {surahData ? (
          Object.values(surahData).map((surah) => {
            return (
              <Link
                href={`/quran/${params.juzSurahs}/${surah.number}`}
                className="mainBtn text-xl text-center"
                key={surah.number}
              >
                <p>{surah.name}</p>
                <p>{surah.englishName}</p>
                <span>
                  ( {surah.numberOfAyahs}
                  {surah.numberOfAyahs <= 10 ? " أيات" : " أيه"} )
                </span>
                <span></span>
              </Link>
            );
          })
        ) : (
          <Error msg="عذرًا، حدث خطأ أثناء جلب الْقُرْآن الْكَرِيْم. يرجى المحاولة مرة أخرى لاحقًا." />
        )}
      </div>
    </section>
  );
};

export default JuzSurahs;

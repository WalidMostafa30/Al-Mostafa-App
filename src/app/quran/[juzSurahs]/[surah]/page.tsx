import Ayah from "@/src/components/Ayah/Ayah";
import Error from "@/src/components/Error/Error";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import axios from "axios";

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

const surah = async ({ params }: { params: { surah: string } }) => {
  const getJuzSurahs = async () => {
    try {
      const data = await axios(
        `https://api.alquran.cloud/v1/surah/${params.surah}/ar.alafasy`
      );

      return data.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const surahData: SurahType = await getJuzSurahs();

  return (
    <section>
      {surahData ? (
        <div className="container">
          <GlobalTitle title={`{ ${surahData.name} }`} />
          <Ayah surah={surahData} />
        </div>
      ) : (
        <Error msg="عذرًا، حدث خطأ أثناء جلب الْقُرْآن الْكَرِيْم. يرجى المحاولة مرة أخرى لاحقًا." />
      )}
    </section>
  );
};

export default surah;

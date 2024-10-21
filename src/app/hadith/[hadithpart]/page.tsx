import Error from "@/src/components/Error/Error";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import Hadith from "@/src/components/Hadith/Hadith";
import axios from "axios";

type HadithsType = {
  hadithnumber: number;
  text: string;
};

type ParamsType = {
  hadithpart: string;
};

const hadith = async ({ params }: { params: ParamsType }) => {
  const getHadiths = async () => {
    try {
      const data = await axios(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari1/sections/${params.hadithpart}.json`
      );

      return data.data["hadiths"];
    } catch (error) {
      console.log(error);
    }
  };

  const hadithData: HadithsType[] = await getHadiths();

  return (
    <section>
      <GlobalTitle title={`البخارى ( ${params.hadithpart} )`} />

      <div className="container">
        {hadithData ? (
          <Hadith hadithData={hadithData} />
        ) : (
          <Error msg="عذرًا، حدث خطأ أثناء جلب الأحاديث. يرجى المحاولة مرة أخرى لاحقًا." />
        )}
      </div>
    </section>
  );
};

export default hadith;

import { juzData } from "@/src/assets/data/juzData";
import Error from "@/src/components/Error/Error";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import Link from "next/link";

const Quran = () => {
  return (
    <section>
      <GlobalTitle title={"الْقُرْآن الْكَرِيْم"} />

      <div className="container mainGrid">
        {juzData ? (
          juzData.map((juz) => {
            return (
              <Link
                href={`/quran/${juz.number}`}
                key={juz.number}
                className="mainBtn text-xl"
              >
                <h3>
                  <span>( {juz.number} )</span> {juz.title}
                </h3>
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

export default Quran;

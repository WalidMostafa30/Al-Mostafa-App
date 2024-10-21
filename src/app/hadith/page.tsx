import { hadithNum } from "@/src/assets/data/hadithData";
import Error from "@/src/components/Error/Error";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import Link from "next/link";

const hadith = async () => {
  return (
    <section>
      <GlobalTitle title="الأحاديث" />

      <div className="container mainGrid">
        {hadithNum ? (
          hadithNum
            .filter((hadith) => hadith !== undefined)
            .map((hadith, index) => (
              <Link
                key={index}
                href={`/hadith/${index + 1}`}
                className="mainBtn text-center"
              >
                <h3 className="text-2xl font-bold mb-2">
                  البخارى ( {index + 1} )
                </h3>
                <p>
                  ( {hadith.hadithnumber_last - hadith.hadithnumber_first + 1} )
                  حديث
                </p>
              </Link>
            ))
        ) : (
          <Error msg="عذرًا، حدث خطأ أثناء جلب الأحاديث. يرجى المحاولة مرة أخرى لاحقًا." />
        )}
      </div>
    </section>
  );
};

export default hadith;

import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import { azkar } from "@/src/assets/data/Azkar";
import Link from "next/link";

const Azkar = () => {
  return (
    <section>
      <GlobalTitle title={"الأذكار"}></GlobalTitle>

      <div className="container flex flex-col items-center justify-center gap-5">
        {azkar.map((azkar) => {
          return (
            <Link
              className="mainBtn w-11/12 lg:w-96 text-center text-2xl"
              href={`/azkar/${azkar.id}`}
              key={azkar.id}
            >
              {azkar.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Azkar;

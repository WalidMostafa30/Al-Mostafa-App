import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import { adeya } from "@/src/assets/data/Adeya";
import Link from "next/link";

const Adeya = () => {
  return (
    <section>
      <GlobalTitle title={"الأدعية"}></GlobalTitle>

      <div className="container flex flex-col items-center justify-center gap-5">
        {adeya.map((adeya) => {
          return (
            <Link
              className="mainBtn w-11/12 lg:w-96 text-center text-2xl"
              href={`/adeya/${adeya.id}`}
              key={adeya.id}
            >
              {adeya.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Adeya;

import { pagesData } from "@/src/assets/data/Data";
import GlobalTitle from "@/src/components/GlobalTitle/GlobalTitle";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <section className="Main">
      <GlobalTitle title={"العناوين"} />

      <div className="container mainGrid">
        {pagesData.slice(1).map((page, index) => {
          return (
            <Link
              key={index}
              href={page.link}
              className="bg-qur-1 text-qur-2 rounded-xl overflow-hidden mainShadow hover:bg-qur-2 hover:text-qur-1 hover:-translate-y-2 duration-300"
            >
              <div className="w-full h-64 rounded-xl overflow-hidden">
                {page.img ? (
                  <Image
                    className="w-full h-full object-cover"
                    src={page.img}
                    alt={page.title}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    No Image Available
                  </div>
                )}
              </div>

              <h3 className="text-center text-3xl py-3">{page.title}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

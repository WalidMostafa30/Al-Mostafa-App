import Image from "next/image";
import homeImg from "@/src/assets/Images/moshaf.webp";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import "./home.css";

const Home = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse xl:flex-row justify-center xl:justify-around gap-10 items-center h-full">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <p className="text-2xl md:text-3xl">مرحبا بك فى </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-qur-1">
            موقع المصطفى الاسلامى
          </h1>

          <Link
            href={"/main"}
            className="flex items-center mt-3 gap-2 text-xl md:text-3xl mainBtn"
          >
            إبدأ التصفح
            <BiSolidLeftArrow />
          </Link>
        </div>

        <div className="Home__img after:bg-qur-1/40 w-80 md:w-[500px]">
          <Image priority src={homeImg} alt="moshaf-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;

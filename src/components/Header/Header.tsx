"use client";

import { pagesData } from "@/src/assets/data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const isActive = (path: string) => {
    const regex = new RegExp(`${path}(\/.*)?$`);
    return regex.test(pathName);
  };

  return (
    <header className="mainShadow bg-qur-1 text-qur-2 sticky rounded-b-2xl z-50">
      <div className="container flex items-center justify-between h-16">
        <Link
          onClick={closeNav}
          href={"/"}
          className="text-4xl font-bold"
        >
          المصطفى
        </Link>

        {nav ? (
          <IoClose
            onClick={closeNav}
            className="xl:hidden block cursor-pointer text-4xl"
          />
        ) : (
          <IoMenu
            onClick={openNav}
            className="xl:hidden block cursor-pointer text-4xl"
          />
        )}

        <nav
          className={`bg-qur-1 flex flex-col xl:flex-row xl:items-center justify-between xl:static absolute xl:z-auto gap-2 w-full xl:w-auto right-[-100%] rounded-2xl xl:opacity-100 opacity-0 top-16 p-4 xl:p-0 transition-all ease-in-out duration-500 ${
            nav ? "right-[0%] opacity-100" : ""
          }`}
        >
          {pagesData.map((link) => (
            <Link
              className={`${
                isActive(link.link) ? "bg-qur-2 text-qur-1" : ""
              } text-xl font-semibold p-2 rounded-md duration-300 text-center hover:bg-qur-2 hover:text-qur-1`}
              href={link.link}
              key={link.title}
              onClick={closeNav}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

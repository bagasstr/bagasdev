"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const filterPath = pathName?.split("/").filter((item) => item);

  const checkPath = "/" + (filterPath.length > 0 ? filterPath[0] : "");

  const dataLink = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/projects",
      name: "Projects",
    },
    {
      link: "/about",
      name: "About",
    },
  ];

  return (
    <>
      <div className='py-8'>
        <div className=''>
          <ul className='flex items-center justify-center sm:gap-x-8 lg:gap-10'>
            {dataLink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  passHref
                  className={`${
                    checkPath === item.link
                      ? "after:content-[''] after:w-full after:rounded-full after:h-[2px] after:block after:dark:bg-slate-50 after:bg-slate-900"
                      : ""
                  } sm:text-lg sm:font-semibold lg:text-xl`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

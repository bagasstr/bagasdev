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
                <Link href={item.link} passHref>
                  {checkPath === item.link ? (
                    <span className='border-b-2 border-black dark:border-white sm:text-lg sm:font-semibold lg:text-xl pb-1'>
                      {item.name}
                    </span>
                  ) : (
                    <span className='sm:text-lg sm:font-semibold sm:text-white/85 lg:text-xl'>
                      {item.name}
                    </span>
                  )}
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

"use client";

import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const handlerLink: () => void = () => {
    const links = document.querySelectorAll("h1");
    const linkEl = document.querySelector("h1");
    linkEl?.classList.add("active");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        link?.classList.add("active");
      });
    });
  };
  useEffect(() => {
    handlerLink();
    return () => {
      handlerLink();
    };
  }, []);
  return (
    <>
      <div className='py-8'>
        <div className=''>
          <ul className='flex items-center justify-center gap-x-8'>
            <Link href={""} id='link'>
              <h1 className=''>Home</h1>
            </Link>
            <Link href={""} id='link'>
              <h1 className=''>Projects</h1>
            </Link>
            <Link href={""} id='link'>
              <h1 className=''>About</h1>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";

import { handlerLink } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
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

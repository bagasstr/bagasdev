import React, { useEffect } from "react";
import { ThemeToggle } from "./themeToggle";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className='sm:text-center lg:text-start sm:mt-36'>
        <div className='sm:mt-12 lg:py-16'>
          <div className=''>
            <h2 className='sm:text-2xl sm:font-semibold lg:text-3xl'>
              Hi! I'm
            </h2>
            <h1 className='sm:text-4xl sm:font-bold lg:text-4xl'>
              Bagas Satrio
            </h1>
          </div>
        </div>
        <div className='sm:w-1/2 sm:mx-auto sm:mt-8'>
          <p className='sm:text-lg'>
            "If you're fed up with errors, catfish farming is the best option."
          </p>
        </div>
        <div className='flex items-center justify-center sm:gap-x-4 sm:mt-12'>
          <Link
            href={"/projects"}
            passHref
            className='sm:px-4 sm:py-3 sm:rounded-lg dark:text-white dark:border-2 dark:bg-black border-black text-black'>
            <p className='sm:text-lg sm:font-medium'>See Projects</p>
          </Link>
          <Link
            href={"/about"}
            passHref
            className='sm:px-4 sm:py-3 sm:rounded-lg dark:text-white dark:border-2 dark:bg-black border-black text-black'>
            <p className='sm:text-lg sm:font-medium'>About</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

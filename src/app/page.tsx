import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// Optimized metadata for the home page
export const metadata: Metadata = {
  title: "Bagas Satrio - Portfolio | Home",
  description: "Welcome to Bagas Satrio's portfolio. Explore my projects and learn about my development journey.",
  keywords: ["portfolio", "developer", "Bagas Satrio", "web development", "projects"],
  openGraph: {
    title: "Bagas Satrio - Portfolio",
    description: "Welcome to my portfolio showcasing development projects and skills",
    type: "website",
  },
};

const Home = () => {
  return (
    <section className='sm:text-center lg:text-start sm:mt-36' aria-labelledby="hero-heading">
      <div className='sm:mt-12 lg:py-16'>
        <header>
          <h2 className='sm:text-2xl sm:font-semibold lg:text-3xl text-gray-600 dark:text-gray-300'>
            Hi! I'm
          </h2>
          <h1 
            id="hero-heading" 
            className='sm:text-4xl sm:font-bold lg:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          >
            Bagas Satrio
          </h1>
        </header>
      </div>
      
      <div className='sm:w-1/2 sm:mx-auto sm:mt-8 lg:w-2/3'>
        <blockquote className='sm:text-lg text-gray-700 dark:text-gray-300 italic'>
          "If you're fed up with errors, catfish farming is the best option."
        </blockquote>
      </div>
      
      <nav 
        className='flex items-center justify-center sm:gap-x-4 sm:mt-12' 
        aria-label="Main actions"
      >
        <Link
          href="/projects"
          className='
            sm:px-4 sm:py-3 sm:rounded-lg 
            dark:text-black border-2 dark:bg-white border-black text-black 
            hover:bg-black hover:text-white dark:hover:bg-gray-100 
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          '
          aria-describedby="projects-description"
        >
          <span className='sm:text-lg sm:font-medium'>See Projects</span>
        </Link>
        <span id="projects-description" className="sr-only">
          View my portfolio projects and development work
        </span>
        
        <Link
          href="/about"
          className='
            sm:px-4 sm:py-3 sm:rounded-lg 
            dark:text-black border-2 dark:bg-white border-black text-black 
            hover:bg-black hover:text-white dark:hover:bg-gray-100 
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          '
          aria-describedby="about-description"
        >
          <span className='sm:text-lg sm:font-medium'>About</span>
        </Link>
        <span id="about-description" className="sr-only">
          Learn more about my background and experience
        </span>
      </nav>
    </section>
  );
};

export default Home;

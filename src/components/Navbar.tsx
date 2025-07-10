"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo } from "react";

// Memoized Navbar component for better performance
const Navbar = memo(() => {
  const pathName = usePathname();
  
  // Memoize path calculation to avoid recalculating on every render
  const checkPath = useMemo(() => {
    const filterPath = pathName?.split("/").filter((item) => item);
    return "/" + (filterPath.length > 0 ? filterPath[0] : "");
  }, [pathName]);

  // Static data that doesn't change - can be moved outside component
  const dataLink = useMemo(() => [
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
  ], []);

  return (
    <nav className='py-8' role="navigation" aria-label="Main navigation">
      <div>
        <ul className='flex items-center justify-center sm:gap-x-8 lg:gap-10'>
          {dataLink.map((item) => (
            <li key={item.link}>
              <Link 
                href={item.link} 
                className={`
                  sm:text-lg sm:font-semibold text-black dark:text-white lg:text-xl transition-colors
                  ${checkPath === item.link 
                    ? 'border-b-2 border-black dark:border-white pb-1' 
                    : 'hover:opacity-70'
                  }
                `}
                aria-current={checkPath === item.link ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

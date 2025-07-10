import React, { Suspense } from "react";
import { getAllData } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { IProjects } from "../lib/interface";

// Increase revalidation time to reduce API calls
export const revalidate = 300; // 5 minutes

// Loading component for better UX
const ProjectsLoading = () => (
  <div className='flex sm:flex-col sm:gap-y-12 justify-center'>
    {[...Array(3)].map((_, i) => (
      <div key={i} className='bg-slate-200 dark:bg-slate-700 pt-4 animate-pulse'>
        <div className='mb-8'>
          <div className='h-6 bg-slate-300 dark:bg-slate-600 rounded w-3/4 mx-auto mb-2'></div>
          <div className='flex gap-x-4 justify-center'>
            <div className='h-4 bg-slate-300 dark:bg-slate-600 rounded w-16'></div>
            <div className='h-4 bg-slate-300 dark:bg-slate-600 rounded w-20'></div>
          </div>
        </div>
        <div className='h-40 bg-slate-300 dark:bg-slate-600 rounded'></div>
      </div>
    ))}
  </div>
);

// Individual Project Component for better performance
const ProjectCard = ({ item }: { item: IProjects }) => (
  <Link
    href={`/projects/${item.slug}`}
    className='bg-slate-700 pt-4 hover:bg-slate-600 transition-colors duration-200 group'
    key={item._id}
    prefetch={false} // Disable prefetch for better initial load
  >
    <div>
      <div className='mb-8'>
        <h2 className='text-center font-semibold text-lg group-hover:text-white transition-colors'>
          {item.title}
        </h2>
        <div className='flex gap-x-4 justify-center flex-wrap'>
          {item?.tools?.map((tool) => (
            <span 
              className='text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded' 
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className='rounded w-full h-40 overflow-hidden'>
        <Image
          className='w-full h-full object-cover object-top rounded-md group-hover:scale-105 transition-transform duration-300'
          alt={`${item.title} project screenshot`}
          width={400}
          height={300}
          src={item.image ? item.image : '/placeholder-image.jpg'}
          loading="lazy" // Explicit lazy loading
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </div>
  </Link>
);

const Projects = async () => {
  let data: IProjects[] = [];
  let error = null;

  try {
    data = await getAllData();
  } catch (e) {
    error = 'Failed to load projects. Please try again later.';
    console.error('Error fetching projects:', e);
  }

  if (error) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <div className='text-center'>
          <h2 className='text-xl font-semibold mb-2'>Unable to load projects</h2>
          <p className='text-gray-600 dark:text-gray-400'>{error}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <div className='text-center'>
          <h2 className='text-xl font-semibold mb-2'>No projects found</h2>
          <p className='text-gray-600 dark:text-gray-400'>Check back later for updates.</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<ProjectsLoading />}>
      <div className='flex sm:flex-col sm:gap-y-12 justify-center'>
        {data.map((item) => (
          <ProjectCard key={item._id} item={item} />
        ))}
      </div>
    </Suspense>
  );
};

export default Projects;

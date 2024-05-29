import React from "react";
import { client, urlFor } from "../lib/sanity";
import { IProjects } from "../lib/interface";
import { getAllData } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 30;
const Projects = async () => {
  const data: IProjects[] = await getAllData();
  // console.log(data);

  return (
    <>
      <div className='flex sm:flex-col sm:gap-y-12 justify-center'>
        {data.map((item) => (
          <Link
            href={`/projects/${item.slug}`}
            className='bg-slate-700 pt-4'
            key={item._id}>
            <div className=''>
              <div className='mb-8'>
                <h1 className='text-center font-semibold text-lg'>
                  {item.title}
                </h1>
                <div className='flex gap-x-4 justify-center'>
                  {item?.tools?.map((tool) => (
                    <p className='' key={tool}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className='rounded w-full h-40 overflow-clip'>
                <Image
                  className='w-full object-top rounded-md'
                  alt={item.title}
                  width={1000}
                  height={1000}
                  src={urlFor(item.image).url()}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;

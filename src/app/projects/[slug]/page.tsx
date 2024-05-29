import { IProjects } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { getSingleData } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 20;
const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getSingleData(params.slug);
  console.log(data);

  return (
    <>
      {data.map((item: IProjects) => (
        <div className='' key={item._id}>
          <Image
            className='w-full h-96 object-cover'
            alt={item.title}
            width={500}
            priority
            height={500}
            src={urlFor(item.image).url()}
          />
          <h1 className=''>{item.title}</h1>
          <p className=''>{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default page;

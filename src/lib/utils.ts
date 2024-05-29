import { client } from "@/app/lib/sanity";

export const handlerLink: () => void = () => {
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

export const getAllData = async () => {
  const query = `*[_type == "projects"] | order(_createdAt desc){
    title,
    "image": image.asset->url,
    desc,
    "slug": slug.current,
    tools,
    github,
    demo,
    _id
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getSingleData = async (slug: string) => {
  const query = `*[_type == "projects" && slug.current == "${slug}"]{
    title,
    "image": image.asset->url,
    desc,
    "slug": slug.current,
    tools,
    github,
    demo,
    _id
  }`;
  const data = await client.fetch(query);
  return data;
};

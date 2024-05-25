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

import { Url } from "next/dist/shared/lib/router/router";
import { Key } from "react";

export interface IProjects {
  _id: any;
  title: string;
  slug: string;
  tools: string[];
  desc: string;
  image: any;
  github: Url;
  demo: Url;
}

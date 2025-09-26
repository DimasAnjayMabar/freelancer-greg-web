// src/components/PortfolioData.ts
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  apk?: string;
}

export const websiteTypes: PortfolioItem[] = [
  {
    id: 1,
    title: "PCU Chess Club Website",
    description: "A web application for PCU Chess Club",
    image: "/png/ukmcatur.png",
    link: "https://ukmcaturukpetra.vercel.app/",
  },
  {
    id: 2,
    title: "Financial Manager App (Piggi)",
    description: "Personal, completely offline app for managing financial, including expenses or savings",
    image: "/png/PIGGI.png",
    link: "https://piggiapp.vercel.app/",
    github: "https://github.com/DimasAnjayMabar/fund-divider.git",
    apk: "https://drive.google.com/file/d/1eCPd441-f3s8-Ugmu5SVMY_XHwFKhH8n/view?usp=sharing"
  },
  {
    id: 3,
    title: "Administration Information System",
    description: "(Under development for thesis) An all in one application for point of sales and inventory ",
    image: "/png/agusplastik.png",
    link: "https://agusplastikapp.vercel.app/"
  },
  {
    id: 4,
    title: "Simple Cooperation app",
    description: "A demo for cooperation app to help cooperation staff manage their members. \nTry to use username = greg and password = 123456 for login. \nProfile won't load because using vercel's static page, db only saves relative path, not blob",
    image: "/png/koperasi.png",
    link: "https://koperasiapp-qskb4jcnq-gregs-projects-44e86848.vercel.app",
    github: "https://github.com/DimasAnjayMabar/koperasi.git"
  },
];

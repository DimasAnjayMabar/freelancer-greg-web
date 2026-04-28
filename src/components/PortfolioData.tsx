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
    description: "A web application for PCU Chess Club.",
    image: "/png/ukmcatur.png",
    link: "https://ukmcaturukpetra.vercel.app/",
  },
  {
    id: 2,
    title: "Financial Manager App (Piggi)",
    description: "Personal, completely offline app for managing financial, including expenses or savings.",
    image: "/png/PIGGI.png",
    link: "https://piggiapp.vercel.app/",
    github: "https://github.com/DimasAnjayMabar/fund-divider.git",
    apk: "https://drive.google.com/file/d/1m0HR6lOwKTSOM8Nza-LuVz9O5WBeecZf/view?usp=sharing"
  },
  {
    id: 3,
    title: "Administration Information System",
    description: "(Under development for thesis) An all in one application for point of sales and inventory.",
    image: "/png/agusplastik.png",
    link: "https://agusplastikapp.vercel.app/"
  },
  {
    id: 4,
    title: "Disney Image Converter",
    description: 
      "Local image converter using stable diffuser model",
    image: "/png/disney.jpeg",
    github: "https://github.com/DimasAnjayMabar/disney-image-converter.git"
  }, 
    {
    id: 5,
    title: "Project Agribot",
    description: 
      "RAG chatbot for local farmers",
    image: "/png/leaf.png",
    github: "https://github.com/DimasAnjayMabar/agribot.git"
  }
];

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
    title: "Simple Cooperation app (Important : Scroll to Read Description Below)",
    description: 
      "A demo for cooperation app to help cooperation staff manage their members. To operate the app:\n" +
      "- Add /staff behind url to go to admin page\n" +
      "- To try existing account, try username = admin for staff page, or username = user for user page. Both with the same password = 123456. You can also register an account yourself with your own email\n" +
      "- Profile wont load because vercel's static page and website is built to store image with only relative path not blob inside db. I suggest dont add a profile when register new account for staff or user\n" + 
      "- If the page automatically log you in and causing fetch data error, try to signout and login again using the right credential",
    image: "/png/koperasi.png",
    link: "https://koperasiapp-qskb4jcnq-gregs-projects-44e86848.vercel.app",
    github: "https://github.com/DimasAnjayMabar/koperasi.git"
  },
  {
    id: 5,
    title: "Disney Image Converter",
    description: 
      "Local image converter using stable diffuser model",
    image: "/png/disney.jpeg",
    github: "https://github.com/DimasAnjayMabar/disney-image-converter.git"
  }
];

import WorkIm from "../assets/projects/workImg.jpeg";
import RealEst from "../assets/projects/realestate.jpg";
import Snapdeal from "../assets/projects/snapdeal.png";
import Nordstorm from "../assets/projects/nordstorm.png";
import GithubRepoSearch from "../assets/projects/gitRepoSearch.png";
import promiseImg from "../assets/mobile.png";
import thisImg from "../assets/creator.png";
import useReducerImg from "../assets/web.png";
import useStateImg from "../assets/backend.png";
import CodeVortex from "../assets/CodeVortexInterview.png";
import hrDashboard from "../assets/projects/HR Dashboard.png";

export const data = [
  {
    id: 1,
    name: "React JS Application",
    pName: "Flashdeal",
    pDesc:
      "Flashdeal is a clone of Snapdeal. Snapdeal is an Indian e-commerce company that offers a wide range of clothing, accessories, and footwear.",
    image: Snapdeal,
    github: "https://github.com/GRAviTY-GAGAN/-invincible-ice-6073",
    live: "https://grand-dasik-526567.netlify.app/",
    tech: [
      { name: "#ReactJS", color: "red" },
      { name: "#ChakraUi", color: "orange" },
      { name: "#json-server", color: "green" },
    ],
  },
  {
    id: 2,
    name: "JavaScript Application",
    image: Nordstorm,
    pName: "Sandstorm",
    pDesc:
      "Sandstorm is a clone of Nordstorm. Nordstrom is a high-end American department store chain that sells clothing, shoes, accessories, and beauty products for women, men, and children.",
    github: "https://github.com/GRAviTY-GAGAN/righteous-hand-1433",
    live: "https://sandstorm-gsvr.netlify.app/",
    tech: [
      { name: "#JavaScript", color: "red" },
      { name: "#CSS", color: "orange" },
      { name: "#json-server", color: "green" },
    ],
  },
  {
    id: 3,
    name: "React JS Application",
    image: GithubRepoSearch,
    pName: "Github Repository Search App",
    pDesc:
      "A app using which you can search for any user on github. you will get to see the details of the user and also the repositories of the user.",
    github: "https://github.com/GRAviTY-GAGAN/Github-Repositiry-Search-App",
    live: "https://github-repository-search1.netlify.app",
    tech: [
      { name: "#ReactJS", color: "red" },
      { name: "#CSS", color: "orange" },
      { name: "#Firebase", color: "green" },
    ],
  },
  {
    id: 4,
    name: "React JS Application",
    image: CodeVortex,
    pName: "Interview Simulator",
    pDesc:
      "Code Vortex is an innovative self-interview prep platform harnessing the power of AI and natural language processing. It leverages OpenAI's advanced capabilities and prompt engineering techniques to replicate real interview scenarios. With personalized feedback and a comprehensive set of resources, Code Vortex empowers users to enhance their interview skills and excel in their job search.",
    github: "https://github.com/GRAviTY-GAGAN/CodeVertex-FE",
    live: "https://interview-simulator-open-ai.netlify.app/",
    tech: [
      { name: "#ReactJS", color: "red" },
      { name: "#MongoDB", color: "orange" },
      { name: "#ExpressJS", color: "green" },
    ],
  },
  {
    id: 5,
    name: "React JS Application",
    image: hrDashboard,
    pName: "HR Dashboard",
    pDesc:
      "HR dashboard application that empowers both administrators and users to effortlessly access and manage essential HR information. From viewing shift schedules and holiday details to checking salary information, offering a comprehensive overview of crucial HR aspects. Additionally, users can raise issues related to salary or holiday matters, ensuring efficient problem resolution. Moreover, the app allows users to save and organize their daily tasks, enhancing productivity and organization.",
    github: "https://github.com/GRAviTY-GAGAN/hr-dashboard-fe",
    live: "https://hr-dashboard-app.netlify.app",
    tech: [
      { name: "#ReactJS", color: "red" },
      { name: "#MongoDB", color: "orange" },
      { name: "#ExpressJS", color: "green" },
    ],
  },
  //   {
  //     id: 4,
  //     name: "React JS Application",
  //     image: RealEst,
  //     github: "",
  //     live: "",
  //   },
];

export const blogs = [
  {
    name: "Custom useReducer Hook",
    link: "https://gagan-bn.hashnode.dev/building-our-own-custom-usereducer-hook",
    img: useReducerImg,
  },
  {
    name: "this keyword in Javascript",
    link: "https://gagan-bn.hashnode.dev/this-keyword-in-javascript",
    img: thisImg,
  },
  {
    name: "Promise in JavaScript",
    link: "https://gagan-bn.hashnode.dev/promise-in-javascript",
    img: promiseImg,
  },
  {
    name: "useState() hook",
    link: "https://gagan-bn.hashnode.dev/usestate-hook",
    img: useStateImg,
  },
];

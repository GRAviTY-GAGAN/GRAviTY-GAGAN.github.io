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
import TaskBoard from "../assets/projects/task board.png";
import ssipeople from "../assets/Jobs/ssipeople.jpg";
import skillvalley from "../assets/Jobs/skillvalley.jpg";
import ezxbrl from "../assets/Jobs/ez-xbrl.jpg";
import k2v from "../assets/Jobs/K2V.jpg";

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
  {
    id: 6,
    name: "React TS Application",
    image: TaskBoard,
    pName: "Task Boards",
    pDesc:
      "Organize your work effortlessly with multiple boards, tasks, and subtasks. After a quick login, users can seamlessly manage their tasks across different boards, breaking them down into manageable subtasks for increased productivity and efficiency.",
    github: "https://github.com/GRAviTY-GAGAN/Task-Board",
    live: "https://task-board-web-app.netlify.app",
    tech: [
      { name: "#Typescript", color: "red" },
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

export const experienceData = [
  {
    title: "Web Development Intern",
    date: "Aug 2020 - Sep 2020",
    company: "K2V Infotech LLP",
    image: k2v,
    work: [
      `Wrote well-designed, testable, efficient code by using best software development practices.`,
      `Created website layout/user interfaces by using standard HTML/CSS practices.`,
      `Integrated data from various back-end services and databases.`,
    ],
    iconBg: "#C9C9C9",
  },
  {
    title: "Talent Acquisition Associate",
    date: "Nov 2021 - Jul 2022",
    company: "SSi People",
    image: ssipeople,
    work: [
      `Recruited IT professionals for clients through sourcing, technical screening,
      negotiating rates, scheduling interviews, and checking references.`,
      `Utilized Boolean search and passive sourcing on LinkedIn and Google for
      niche skills, and recruited via job boards such as Dice, Monster, Indeed, and
      CareerBuilder.`,
      `Efficiently evaluated candidates based on skills, experience, and
      qualifications, and coordinated end-to-end interviews between client and
      candidate.`,
    ],
    iconBg: "#FFFFFF",
  },
  {
    title: "Frontend Developer Intern",
    date: "Aug 2022 - Oct 2022",
    company: "Skillvalley",
    image: skillvalley,
    work: [
      `Worked on the entire employee side of the project including both frontend and backend. Also responsible for fixing bugs.`,
      `Implemented an email-based password reset feature.`,
      `Implemented the raise issue feature on the employee side and resolve the issue feature on the admin/HR side. Where admin can give feedback on issues.`,
      `Made the entire app responsive.`,
      `Implemented token-based authorization on the employee side.`,
    ],
    iconBg: "#FFFFFF",
  },
  {
    title: "Associate Software Engineer",
    date: "Aug 2023 - Present",
    company: "Ez-XBRL Solutions",
    image: ezxbrl,
    work: [],
    iconBg: "#FFFFFF",
  },
];

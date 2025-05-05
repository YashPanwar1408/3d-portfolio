const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Yash joined our startup TechieGreek with exceptional energy and curiosity. He played an active role in contributing to our technical growth and product development.",
    imgPath: "/images/yash11.jpg",
    logoPath: "/images/yash11.jpg",
    title: "Tech Team Member – TechieGreek (Startup)",
    date: "April 2025 - Present",
    responsibilities: [
      "Contributing to the development of innovative web solutions.",
      "Collaborating with a small team to build scalable product features.",
      "Engaged in startup-level decision making and brainstorming.",
    ],
  },
  {
    review:
      "Yash successfully completed the 0-100 Full Stack Web Development Course by 100xDevs, showcasing strong dedication and hands-on skills across the full development stack. His commitment to mastering backend and frontend technologies reflects his potential as a well-rounded developer.",
    imgPath: "/images/Full stack certificate.jpg",
    logoPath: "/images/Full stack certificate.jpg",
    title: "Certified Full Stack Developer – 100xDevs",
    date: "Completed on: April 2025",
    responsibilities: [
      "Gained expertise in building full-stack applications using modern web technologies.",
      "Completed real-world projects demonstrating practical implementation of web development concepts.",
      "Earned certification under the mentorship of Harkirat Singh, validating strong technical foundations.",
    ],
  },
  

  {
    review:
      "Yash built and deployed NewTube, a sleek and fast YouTube clone, showcasing his skills in frontend architecture and responsive UI design.",
    imgPath: "/images/Newtube.png",
    logoPath: "/images/Newtube.png",
    title: "Project: NewTube (YouTube Clone)",
    date: "February 2025",
    responsibilities: [
      "Created a fully responsive video browsing platform using React and RapidAPI.",
      "Implemented dynamic video fetching and search functionality.",
      "Focused on performance, design, and user experience.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Yash is a highly skilled problem solver with a knack for turning complex requirements into clean, functional websites. He makes the toughest challenges look effortless.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Detail-oriented and committed to quality, Yash brings outdated platforms back to life with modern, user-friendly designs. A true asset for any web project.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Yash stands out for his professionalism, speed, and genuine passion for development. He delivers outstanding results and brings contagious energy to every project.",
    imgPath: "/images/client2.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    url:"yashhhhh_008_",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    url:"https://github.com/YashPanwar1408",
    imgPath: "/images/7.png",
  },
  {
    name: "x",
    url:"https://x.com/YashPanwar_0001",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/yash-panwar-796673320/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

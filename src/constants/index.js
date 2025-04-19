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
  {
    review:
      "Yash developed BookMyRoom, an Airbnb-like web app, demonstrating his understanding of UI/UX principles and frontend development.",
    imgPath: "/images/airbnb.png",
    logoPath: "/images/airbnb.png",
    title: "Project: BookMyRoom (Airbnb Clone)",
    date: "March 2025",
    responsibilities: [
      "Developed a modern room booking UI using React and TailwindCSS.",
      "Integrated mock data and created responsive listing pages.",
      "Emulated real-world booking interfaces with smooth transitions.",
    ],
  },
  {
    review:
      "Yash completed an Advanced Software Engineering simulation on Forage, gaining hands-on skills in architecture, databases, and data handling.",
    imgPath: "/images/walmart.jpg",
    logoPath: "/images/walmart.jpg",
    title: "Advanced Software Engineering (Forage Virtual Experience)",
    date: "April 2025",
    responsibilities: [
      "Worked on data structures and backend architecture concepts.",
      "Practiced relational database design and data munging techniques.",
      "Simulated real-world software engineering problem-solving.",
    ],
  },
  {
    review:
      "Yash completed a Quantitative Research simulation, gaining exposure to pricing models and risk analysis strategies.",
    imgPath: "/images/jpmorgan.jpg",
    logoPath: "/images/jpmorgan.jpg",
    title: "Quantitative Research (Forage Virtual Experience)",
    date: "April 2025",
    responsibilities: [
      "Analyzed pricing data and simulated commodity contracts.",
      "Explored FICO score analysis and credit risk assessments.",
      "Developed data-driven thinking for financial tech applications.",
    ],
  },
  {
    review: "Yash has shown exceptional skill in full stack development, successfully completing the One Roadmap Full Stack Certification. His commitment to continuous learning is truly commendable.",
    imgPath: "/images/one-roadmap.jpeg", // custom-made logo
    logoPath: "/images/one-roadmap.jpeg",
    title: "Full Stack Developer - Certified",
    date: "April 2025",
    responsibilities: [
      "Completed comprehensive training in MERN stack, REST APIs, and deployment.",
      "Built and deployed projects as part of the certification curriculum.",
      "Demonstrated strong problem-solving and UI/UX skills.",
    ],
  },
  {
    review: "Yash completed the AWS Academy course on Cloud Foundations. His understanding of cloud infrastructure and services gives him a strong edge in backend and deployment.",
    imgPath: "/images/aws.jpg",
    logoPath: "/images/aws.jpg",
    title: "AWS Cloud Foundations - Certified",
    date: "2025",
    responsibilities: [
      "Learned core AWS services, infrastructure, and cloud security.",
      "Built understanding of EC2, S3, IAM, and Cloud Computing concepts.",
      "Applied knowledge in deploying small-scale apps on cloud platforms.",
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
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Yash has a great eye for intuitive design. He transformed our website into something fresh and modern while keeping the user experience smooth and accessible.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "An expert in scalable web development, Yash helped boost our e-commerce performance significantly. His work directly impacted our growth and success.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Yash delivered beyond expectations, seamlessly handling both frontend and backend. He understands client needs and brings them to life with skill and precision.",
    imgPath: "/images/client6.png",
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

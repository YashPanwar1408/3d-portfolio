import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button"
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NewTube – Redefining Video Streaming with a Sleek, Modern UI",
    description:
      "NewTube is a next-generation video streaming platform built with React and Tailwind CSS. It offers a clean and responsive design inspired by YouTube, allowing users to explore playlists, watch videos, and experience seamless navigation. Perfect for showcasing front-end skills, NewTube demonstrates component-based development, responsive layouts, and intuitive UI/UX interactions that deliver a smooth viewing experience.",
    image: "/images/newtube.png",
    url: "https://new-tube-sage.vercel.app/",
  },
  {
    title: "CodeFlex – AI-Powered Fitness Coach for Personalized Workouts & Meal Plans",
    description:
      "CodeFlex is an AI-driven fitness coach that delivers personalized workout routines and meal plans through intelligent conversation. Built using Next.js, Tailwind CSS, and powered by the Vapi AI agent, CodeFlex engages users in natural dialogue to understand their fitness goals and generate customized plans in real-time. Whether you're aiming to lose weight, gain muscle, or eat healthier, CodeFlex adapts to your needs—like having a personal trainer and nutritionist in your pocket.",
    image: "/images/codeflex.png",
    url: "https://codeflex-ai-trainer.vercel.app/",
  },
  {
    title: "CodeSync – AI-Powered Mock Interview Platform for DSA & Tech Roles",
    description:
      "CodeSync is a cutting-edge mock interview platform that simulates real technical interviews with the help of an AI-powered interviewer. Built with Next.js, Tailwind CSS, and integrated with Vapi for real-time voice interaction, CodeSync allows candidates to practice DSA and system design questions, record their sessions, switch languages, and receive intelligent feedback. It's the ultimate preparation tool for cracking interviews at top tech companies.",
    image: "/images/codesync.png",
    url: "https://code-sync-interviewer.vercel.app/",
  },
  {
    title: "FoodRescue – Connecting Restaurants with NGOs to Fight Hunger",
    description:
      "FoodRescue is a socially-driven platform that bridges the gap between surplus food and hunger relief. Built with Next.js and Tailwind CSS, it enables restaurants to donate leftover food, which is then claimed and distributed by verified NGOs to people in need. Featuring AI-powered food image analysis, real-time listings, and a clean user interface, FoodRescue makes the process of food donation simple, efficient, and impactful—ensuring that no good food goes to waste.",
    image: "/images/foodrescue.png",
    url: "https://food-rescue-portal.vercel.app/",
  },
  {
    title: "Bolt – AI-Powered Website Builder",
    description:
      "BoltBuilder is a sleek and intelligent AI website builder inspired by Bolt. Developed using Next.js, Tailwind CSS, and advanced AI integration, it allows users to create fully responsive, customizable websites in seconds. With a user-friendly interface, real-time preview, and drag-and-drop editing, BoltBuilder simplifies web development for everyone—from beginners to professionals.",
    image: "/images/bolt.jpg",
    url: "https://bolt-20-nu.vercel.app/",
  },
  {
    title: "StayEase – A Stylish and Fully Functional Airbnb Clone",
    description:
      "StayEase is a modern Airbnb clone built with Next.js, Tailwind CSS, and Prisma. It offers a seamless booking experience, dynamic property listings, user authentication, and a fully responsive design. Whether you're browsing as a guest or hosting properties, StayEase delivers a polished, real-world accommodation platform.",
    image: "/images/hotel.jpg",
    url: "https://bookmyroom-one.vercel.app/",
  },
  
];

const ProjectCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fade in section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each card
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 w-full overflow-x-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {projects.map((project, index) => (
      <div
        key={index}
        className="project-card bg-[#0D0E12] p-4 rounded-lg shadow-lg flex flex-col h-full"
      >
        <div className="image-wrapper mb-4 h-48 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-content text-white flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-white/70 mb-4 text-sm md:text-base">
              {project.description}
            </p>
          </div>
          <Button
            text="Website"
            className="mt-auto w-full text-center text-black py-2 rounded  transition"
            url={project.url}
          />
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default ProjectCards;

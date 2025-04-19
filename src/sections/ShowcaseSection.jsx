import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const newtubeRef = useRef(null);
  const airbnbRef = useRef(null);
  const rydeRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [newtubeRef.current, airbnbRef.current, rydeRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*left*/}
          <div ref={newtubeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Newtube.png" alt="Newtube" />
            </div>
            <div className="text-content">
              <h2>
                NewTube – Redefining Video Streaming with a Sleek, Modern UI
              </h2>
              <p className="text-white-50 md:text-xl">
                NewTube is a cutting-edge YouTube clone built with React and TailwindCSS, delivering a fast and responsive video streaming experience. It features a clean, modern interface, dynamic video loading, and intuitive navigation for seamless user engagement.
              </p>
             
              <Button text="Website" url="https://new-tube-sage.vercel.app/" />

             
            </div>
          </div>
          {/*right*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={airbnbRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/hotel.jpg"
                  alt="airbnb clone"
                />
              </div>
              <h2>StayEase – A Stylish and Fully Functional Airbnb Clone</h2>
              <Button text="Website" url="https://bookmyroom-one.vercel.app/" />
            </div>

            <div className="project" ref={rydeRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/taxi-app.png" alt="ryde" />
              </div>
              <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde</h2>
              <Button text="Website" url="https://yashpanwar.vercel.app/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
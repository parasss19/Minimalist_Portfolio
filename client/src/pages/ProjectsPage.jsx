import { useState } from "react";
import DotTitle from "../components/Dot_Title";
import DetailedProjectCard from "../components/DetailedProjectCard";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      logoImg: "subsyncLogo.svg",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1760297818/image_32_skoctn.png",
      title: "Subsync AI ✨",
      gitLink: "https://github.com/parasss19/Subsync",
      liveLink: "https://subsync.site",
      techStack: ["ReactJS", "Tailwind", "Node", "Express", "MongoDB", "Autosend", "Gemini API", "Chrome Extension"],
      description: [
        "Developed and published a Chrome extension used to manage recurring subscriptions via an intuitive dashboard",
        "Implemented auto capture using Gemini AI to extract billing details, reducing manual input by 70%.",
        "Integrated smart renewal reminders (7, 3, 1)days via autosend Email API, boosting on-time payments by 60%.",
        "Ensured privacy first storage using Chrome Storage API and added JSON import/export for seamless backups."
      ],
      category: "Web Tools",
    },
    {
      logoImg: "payeasy.png",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1756624919/image_5_morwwi.png",
      title: "PayEasy 💸",
      gitLink: "https://github.com/parasss19/Payment-App",
      liveLink: "https://payeasy.site",
      techStack: ["ReactJS", "Tailwind", "Node", "Express", "MongoDB", "Zod", "Context API", "JWT"],
      description: [
        "Built a digital payment platform serving 200+ registered users with real-time transaction processing to simulate real-time digital payments",
        "Fully secure and optimized using JWT authentication and MongoDB transactions.",
        "Implemented a responsive dashboard with Features like wallet top-up, P2P Transactions, real-time balance updates, user search and profile management.",
      ],
      category: "Full Stack",
    },
    {
      logoImg: "sticky.svg",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1753859399/image_psndzo.png",
      title: "Sticky",
      gitLink: "https://github.com/parasss19/GiphyApp",
      liveLink: "https://stickyy.site",
      techStack: ["ReactJS", "Tailwind", "Framer", "Context API", "Node", "Express", "MongoDB", "Giphy API", "Vite", "Google OAuth"],
      description: [
        "Built a GIF discovery platform that attracted 100+ registered users, featuring real-time search across trending categories, GIFs, stickers, and text content through seamless Giphy API integration.",
        "Implemented Google OAuth authentication system using Passport.js, reducing authentication time by 60\%",
        "Integrated Local Storage for GIF Saving, with Like, Share, and Download functionality, to Improve Session Retention",
        "Enhanced performance with lazy loading and data caching, cutting page load times.",
      ],
      category: "Full Stack",
    },
    {
      logoImg: "instantly.svg",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1760299479/image_32_ht5gme.png",
      title: "Instantly - AI Summarizer",
      gitLink: "https://github.com/parasss19/AI-summarizer-Extension",
      liveLink: "https://instantly-one.vercel.app",
      techStack: ["ReactJS", "Tailwind", "Gemini Pro", "Chrome Storage"],
      description: [
        "Built an AI-powered fully functional Chrome Extension using React (Vite) and TailwindCSS to summarize any webpage content instantly.",
        "Integrated Gemini Pro API to generate intelligent summaries in three formats: Brief summary, Detailed explanation, Bullet points",
        "Created a custom Options Page for storing and managing the Gemini API key securely via Chrome Storage API.",
        "Used Chrome local storage to persist API keys and user preferences across sessions.",
      ],
      category: "Web Tools",
    },
    {
      logoImg: "escape.png",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1750152060/EA3C85FC-11D2-401F-BFB5-5289D3E521D1_iu5aqz.png",
      title: "Landing Page - SaaS",
      gitLink: "https://github.com/parasss19/Escape",
      liveLink: "https://parasss19.github.io/Escape/",
      techStack: ["HTML", "Tailwind", "Javascript"],
      description: [
        "Responsive Landing Page built using HTML, TailwindCSS, and Vanilla JavaScript, mimicking the official ToDesktop aesthetic with pixel-perfect precision.",
        "Optimized for all devices – mobile-first design.",
        "Integrated interactive features like dynamic navbar, scroll-based animations, and responsive layout.",
      ],
      category: "Fun Project",
    },
    {
      logoImg: "camera.png",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1749972542/982B66D0-4442-4AB6-BF54-BE00413055F5_tqbxke.png",
      title: "WebCam Fun",
      gitLink: "https://github.com/parasss19/JS-Project6",
      liveLink: "https://parasss19.github.io/JS-Project6/",
      techStack: ["HTML", "Tailwind", "Javascript", "Web API", "HTML5 Canvas"],
      description: [
        "Developed a webcam-based image filter and screenshot application using HTML5, JavaScript, and TailwindCSS.",
        "Integrated the MediaDevices API to access the user's webcam and stream real-time video to a <video> element.",
        "Implemented real-time canvas rendering by drawing video frames onto an HTML5 <canvas> element using drawImage().",
      ],
      category: "Fun Project",
    },
    {
      logoImg: "paint-brush.png",
      websiteImg: "https://res.cloudinary.com/dxxeks4o5/image/upload/v1749970933/2236200A-B48A-4232-B13F-F2715C9A1E4D_m2ckmq.png",
      title: "Free Hand",
      gitLink: "https://github.com/parasss19/JS-Project5",
      liveLink: "https://parasss19.github.io/JS-Project5/",
      techStack: ["HTML", "Tailwind", "Javascript", "HTML5 Canvas"],
      description: [
        "Implemented a dynamic drawing interface with real-time mouse tracking and smooth line rendering using the <canvas> API.",
        "Developed a “Magic Mode” feature using HSL color shifting to create animated rainbow strokes. Added 'Erase Mode' and 'Reset' button functionality.",
        "Utilized canvas context APIs (beginPath, moveTo, lineTo, stroke) to render smooth freehand lines.",
      ],
      category: "Fun Project",
    },
  ];

  const filters = ["All", "Full Stack", "Web Tools", "Fun Project"];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="mx-2 mt-4">
      {/* Main heading */}
      <div className="mx-4">
        <DotTitle title="Projects" />
        <h1 className="font-[inter] font-semibold text-[30px] text-white mt-6 mb-4">
          My Works
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mx-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-[inter]
              ${
                activeFilter === filter
                  ? "bg-yellow-300 text-black font-semibold shadow-md"
                  : "bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-700/40 hover:text-white"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>


      {/* Project Cards */}
      <div className="my_container bg-[#2C2C2C] mx-2 my-6 py-1 rounded-lg">
        {filteredProjects.map((project, idx) => (
          <DetailedProjectCard 
            key={idx} 
            {...project}   //here we passed all the props of project array to our DetailedProjectCard comp
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

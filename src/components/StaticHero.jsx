import { useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

/**
 * Static fallback hero for devices that cannot handle WebGL.
 * Provides a visually appealing experience without 3D rendering.
 */
const StaticHero = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    {
      title: "Hi, I'm Ritik 👋",
      subtitle: "A Full Stack Developer from India",
    },
    {
      title: "Experience",
      subtitle: "Worked with companies building production-grade apps",
      link: "/about",
      linkText: "Learn more",
    },
    {
      title: "Projects",
      subtitle: "Built ERP systems, SaaS platforms & automation tools",
      link: "/projects",
      linkText: "View projects",
    },
    {
      title: "Let's Connect",
      subtitle: "Looking for a developer? I'm just a message away",
      link: "/contact",
      linkText: "Get in touch",
    },
  ];

  const current = stages[currentStage];

  return (
    <section className='w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-slate-100'>
      {/* Animated gradient background */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse' />
        <div className='absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000' />
        <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000' />
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10 px-8'>
        <div className='text-center max-w-2xl'>
          <h1 className='sm:text-5xl text-3xl font-bold font-poppins text-gray-800 mb-4'>
            {current.title}
          </h1>
          <p className='sm:text-xl text-lg text-gray-600 mb-8'>
            {current.subtitle}
          </p>
          {current.link && (
            <Link
              to={current.link}
              className='inline-flex items-center gap-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity'
            >
              {current.linkText}
              <img src={arrow} alt='arrow' className='w-4 h-4 object-contain invert' />
            </Link>
          )}
        </div>

        {/* Navigation dots */}
        <div className='flex gap-3 mt-12'>
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStage
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Swipe hint for mobile */}
      <div className='absolute bottom-8 left-0 right-0 text-center text-gray-400 text-sm'>
        Tap the dots to navigate
      </div>
    </section>
  );
};

export default StaticHero;

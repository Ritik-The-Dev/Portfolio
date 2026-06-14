import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  // Sort featured projects first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've built production-grade applications ranging from ERP systems to SaaS platforms.
        Here are the projects I'm most proud of:
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {sortedProjects.map((project) => (
          <div
            className='lg:w-[400px] w-full transition-all duration-300 hover:translate-y-[-4px]'
            key={project.name}
          >
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
                {project.featured && (
                  <span className='ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium align-middle'>
                    Featured
                  </span>
                )}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              {project.techStack && (
                <p className='mt-2 text-xs text-blue-500 font-medium'>
                  {project.techStack}
                </p>
              )}
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 hover:text-blue-800 live-demo-link'
                >
                  Live Demo
                </a>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain transition-transform duration-200 hover:translate-x-1'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const SkillIcon = ({ skill }) => {
  const [hasError, setHasError] = useState(false);

  if (!skill.imageUrl || hasError) {
    return (
      <span className='text-[10px] font-semibold text-center px-1 text-gray-700 leading-tight'>
        {skill.name}
      </span>
    );
  }

  return (
    <img
      src={skill.imageUrl}
      alt={skill.name}
      loading='lazy'
      onError={() => setHasError(true)}
      className='w-1/2 h-1/2 object-contain'
    />
  );
};

const ExperienceIcon = ({ experience }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className='flex justify-center items-center w-full h-full bg-gray-100 rounded-full'>
        <span className='text-[8px] font-bold text-gray-500 text-center leading-tight px-1'>
          {experience.company_name.split(' ')[0]}
        </span>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={experience.icon}
        alt={experience.company_name}
        loading='lazy'
        onError={() => setHasError(true)}
        className='w-[60%] h-[60%] object-contain rounded-full'
      />
    </div>
  );
};

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Ritik
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Full Stack Developer based in India, specializing in building scalable web applications,
          ERP systems, and automation platforms with modern JavaScript technologies.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 group' key={skill.name} title={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <SkillIcon skill={skill} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've built production-grade applications serving thousands of users,
            optimized system performance, and delivered end-to-end solutions. Here's my journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={<ExperienceIcon experience={experience} />}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  {experience.type && (
                    <p className='text-sm text-slate-400 mt-1'>
                      {experience.type}
                    </p>
                  )}
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {experience.technologies && (
                  <p className='text-xs text-blue-500 font-medium mt-3'>
                    Tech: {experience.technologies}
                  </p>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

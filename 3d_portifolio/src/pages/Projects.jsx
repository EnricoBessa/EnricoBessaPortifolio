import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import arrow from '/images/arrow.png';

const Projects = () => {
  return (
    <section className="w-full px-6 pt-28 pb-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          My <span className="orange-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>

        <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed">
          <p>
            I've embarked ........................ those are .........
          </p>
        </div>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.IconUrl} alt="project icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className=" mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="font-semibold text-white flex items-center gap-2"
                >
                  Live Link <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;

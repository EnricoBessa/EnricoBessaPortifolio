import React from 'react';
import { projects } from '../constants/index';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import arrow from '/images/arrow.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-6 pt-28 pb-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          {t('projects_title')} <span className="orange-gradient_text font-semibold drop-shadow">{t('projects_span')}</span>
        </h1>

        <div className="mt-5 text-slate-400 text-lg mx-auto leading-relaxed text-justify">
          <p>{t('projects_intro')}</p>
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
            <div className="mt-5 flex flex-col bg-black/10 p-5 rounded-2xl shadow-lg backdrop-blur-sm">
              <h4 className="text-3xl font-bold text-white mb-1">{project.name}</h4>
              <p className="text-gray-300 text-base mb-3">{project.initialDescription}</p>
              <h5 className="text-orange-300 text-sm uppercase font-semibold tracking-wider">{project.technology}</h5>
              <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1">
                {project.description.split("\n").map((line, idx) =>
                  line.trim() !== '' ? (
                    <li key={idx} className="leading-relaxed">{line}</li>
                  ) : null
                )}
              </ul>
              <div className="mt-6">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold transition hover:bg-orange-300"
                >
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
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

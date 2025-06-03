import { experience as experienceEn } from '../constants/experience.en';
import { experience as experiencePt } from '../constants/experience.pt';
import { education as educationEn } from '../constants/education.en';
import { education as educationPt } from '../constants/education.pt';
import { skills } from '../constants/index';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const experience = i18n.language === 'pt' ? experiencePt : experienceEn;
  const education = i18n.language === 'pt' ? educationPt : educationEn;

  return (
    <>
      <section className="contact-page w-full px-6 pt-28 pb-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            {t('about_title')} <span className="orange-gradient_text font-semibold drop-shadow">Enrico</span>
          </h1>

          <div className="mt-5 text-slate-400 text-lg mx-auto leading-relaxed text-justify">
            <p>{t('about_intro')}</p>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2">
              {t('about_my_skills')}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <div key={index} className="block-container w-20 h-20 transition-transform duration-300 hover:scale-110">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center bg-white shadow-lg">
                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16">
          <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2 text-center">
            {t('about_education')}
          </h3>
          <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed text-center">
            <p>{t('about_education_intro')}</p>
          </div>

          <div className="mt-12">
            <VerticalTimeline>
              {education.map((edu, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={<div className="flex justify-center">{edu.date}</div>}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img src={edu.icon} alt={edu.institution_name} className="w-[70%] h-[70%] object-contain" />
                    </div>
                  }
                  iconStyle={{ background: edu.iconBg }}
                  contentStyle={{
                    borderBottom: '8px solid ' + edu.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div className="text-black text-xl font-semibold">
                    <h3>{edu.title}</h3>
                    <p className="text-gray-700 font-medium m-0">{edu.institution_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {edu.points.map((point, i) => (
                      <li key={`education-point-${i}`} className="text-gray-600 text-sm pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <div className="py-16">
          <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2 text-center">
            {t('about_experience')}
          </h3>
          <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed text-center">
            <p>{t('about_experience_intro')}</p>
          </div>

          <div className="mt-12">
            <VerticalTimeline>
              {experience.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={<div className="flex justify-center">{exp.date}</div>}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img src={exp.icon} alt={exp.company_name} className="w-[65%] h-[65%] object-contain" />
                    </div>
                  }
                  iconStyle={{ background: exp.iconBg }}
                  contentStyle={{
                    borderBottom: '8px solid ' + exp.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div className="text-black text-xl font-semibold">
                    <h3>{exp.title}</h3>
                    <p className="text-gray-700 font-medium m-0">{exp.company_name}</p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={`experience-point-${i}`} className="text-gray-600 text-sm pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>


      </section>
      <CTA />
    </>
  );
};

export default About;

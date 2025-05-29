import { skills, experience, education } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Hello, I'm <span className="text-orange-400">Enrico</span>
        </h1>

        <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed">
          <p>
            Software Engineer based in Croatia, specializing in technical education through hands-on learning and building applications.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2">My Skills</h3>
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
        <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2 text-center">Education</h3>
        <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed text-center">
          <p>
            I've stduied ......................................................  :
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                date={edu.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={edu.icon} alt={edu.institution_name} className="w-[60%] h-[60%] object-contain" />
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
        <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2 text-center">Experience</h3>
        <div className="mt-5 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed text-center">
          <p>
            I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline>
            {experience.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                date={exp.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={exp.icon} alt={exp.company_name} className="w-[60%] h-[60%] object-contain" />
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
  );
};

export default About;

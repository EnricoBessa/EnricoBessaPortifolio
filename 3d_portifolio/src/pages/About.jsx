import { skills } from '../constants'
const About = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Hello, I'm <span className="text-orange-400">Enrico</span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-prose mx-auto leading-relaxed">
          Software Engineer based in Croatia, specializing in technical education through hands-on learning and building applications.
        </p>

        <div className="mt-14">
          <h3 className="text-3xl font-semibold text-white mb-8 border-b border-slate-600 pb-2">
            My Skills
          </h3>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

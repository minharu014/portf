import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, staggerContainer } from "../utils/motion";
import AnimatedList from "./AnimatedList";

const ExperienceCard = ({
  title,
  company,
  date,
  description,
  skills,
  logo,
}) => (
  <div className="bg-[#111] p-4 rounded-lg">
    <div className="flex justify-between items-start gap-3">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-white/5 p-1.5 flex items-center justify-center">
          {logo ? (
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-xl text-blue-400 font-bold">
              {company.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-white text-[18px] font-bold">{title}</h3>
          <p className="text-blue-400 text-[14px]">{company}</p>
        </div>
      </div>
      <span className="text-gray-400 text-[12px] whitespace-nowrap">
        {date}
      </span>
    </div>
    <p className="text-gray-300 mt-2 text-[13px] leading-[1.5]">
      {description}
    </p>
    <div className="mt-2 flex flex-wrap gap-1.5">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-[11px] text-blue-300 bg-blue-900/20 px-2 py-0.5 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const formattedItems = experiences.map((exp) => <ExperienceCard {...exp} />);

  return (
    <div
      id="experience"
      className="w-full min-h-screen relative z-0 bg-[#060606]"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-white`}>
            What I have done so far
          </p>
          <h3 className={`text-center text-white ${styles.sectionHeadText}`}>
            Work Experience.
          </h3>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <AnimatedList
            items={formattedItems}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
            className="w-full max-w-[1000px]"
            itemClassName="hover:bg-[#222] transition-colors duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

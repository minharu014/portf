import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div
        className="relative w-full h-full bg-white rounded-2xl shadow-card hover:shadow-2xl 
        transition-all duration-300 overflow-hidden group border border-gray-100"
      >
        {/* Card content container */}
        <div className="relative w-full h-[200px] bg-white rounded-t-2xl overflow-hidden">
          {/* Project image */}
          <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors duration-300" />
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Project info */}
        <div className="p-6">
          <h3 className="text-gray-900 font-bold text-[24px] group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-gray-600 text-[14px] leading-[1.6]">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[14px] ${tag.color} font-medium px-3 py-1 rounded-full 
                  bg-gray-50 border border-gray-100`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Hover effect line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 
            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div className="w-full relative z-0 bg-white">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-20 relative"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-gray-600`}>
            My Work
          </p>
          <h3 className={`text-center text-gray-900 ${styles.sectionHeadText}`}>
            Projects.
          </h3>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;

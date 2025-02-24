import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { technologies } from "../constants";

// Import all tech icons
import reactIcon from "../assets/tech/reactjs.png";
import javascriptIcon from "../assets/tech/javascript.png";
import typescriptIcon from "../assets/tech/typescript.png";
import nodejsIcon from "../assets/tech/nodejs.png";
import pythonIcon from "../assets/tech/python.png";
import tailwindIcon from "../assets/tech/tailwind.png";
import gitIcon from "../assets/tech/git.png";
import htmlIcon from "../assets/tech/html.png";
import cssIcon from "../assets/tech/css.png";
import dockerIcon from "../assets/tech/docker.png";
import nextjsIcon from "../assets/tech/nextjs.png";
import threejsIcon from "../assets/tech/threejs.png";

// Create an icon map
const iconMap = {
  "reactjs.png": reactIcon,
  "javascript.png": javascriptIcon,
  "typescript.png": typescriptIcon,
  "nodejs.png": nodejsIcon,
  "python.png": pythonIcon,
  "tailwind.png": tailwindIcon,
  "git.png": gitIcon,
  "html.png": htmlIcon,
  "css.png": cssIcon,
  "docker.png": dockerIcon,
  "nextjs.png": nextjsIcon,
  "threejs.png": threejsIcon,
};

const TechCard = ({ name, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-28 h-28"
    >
      <div className="group relative flex justify-center items-center cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center
            shadow-card relative overflow-hidden"
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500"
          />

          <img
            src={iconMap[icon]}
            alt={name}
            className="w-12 h-12 object-contain filter brightness-0 invert opacity-70
              group-hover:opacity-100 transition-all duration-300 relative z-10"
          />
        </motion.div>
        <div className="absolute -bottom-8 flex items-center justify-center">
          <motion.span
            className="text-white/50 text-sm font-medium tracking-wider relative
              group-hover:text-white transition-all duration-300"
          >
            {name}
            {/* Modern frame that appears on hover */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              className="absolute -inset-x-2 -inset-y-1 rounded-lg border border-blue-500/0
                group-hover:border-blue-500/20 transition-all duration-500"
            />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="bg-gray-900 w-full relative z-0">
      {/* Cooler shadow transition */}
      <div className="absolute top-0 inset-x-0">
        <div className="h-24 bg-gradient-to-b from-white/80 via-gray-400/20 to-gray-900 opacity-40" />
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-20 relative"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-white`}>
            This is my
          </p>
          <h3 className={`text-center text-white ${styles.sectionHeadText}`}>
            TECH STACK
          </h3>
        </motion.div>

        <motion.div className="mt-20 flex flex-wrap justify-center gap-12">
          {technologies.map((technology, index) => (
            <TechCard key={technology.name} index={index} {...technology} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;

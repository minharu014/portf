import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { technologies } from "../constants";
import GridDistortion from "./GridDistortion";
import GitHubCalendar from "react-github-calendar";

// Import all tech icons (PNG)
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

// Import SVG icons
import yoloIcon from "../assets/icons/yolo.svg";
import kubernetesIcon from "../assets/icons/kubernetes.svg";
import openshiftIcon from "../assets/icons/redhatopenshift.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";

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
  "yolo.svg": yoloIcon,
  "kubernetes.svg": kubernetesIcon,
  "redhatopenshift.svg": openshiftIcon,
  "mysql.svg": mysqlIcon,
  "mongodb.svg": mongodbIcon,
};

const TechCard = ({ name, icon, index }) => {
  const iconSrc = iconMap[icon];
  const hasIcon = icon && iconSrc;

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
            shadow-card relative overflow-hidden border border-white/20"
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500"
          />

          {hasIcon ? (
            <img
              src={iconSrc}
              alt={name}
              className="w-12 h-12 object-contain filter brightness-0 invert opacity-70
                group-hover:opacity-100 transition-all duration-300 relative z-10"
            />
          ) : (
            <span
              className="text-white/70 text-xs font-bold text-center px-2 leading-tight
                group-hover:text-white transition-all duration-300 relative z-10"
            >
              {name}
            </span>
          )}
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
      {/* Grid Distortion Background */}
      <div className="absolute inset-0 z-[1]">
        <GridDistortion
          imageSrc="https://picsum.photos/1920/1080?grayscale"
          grid={10}
          mouse={0.2}
          strength={0.15}
          relaxation={0.9}
        />
      </div>

      {/* Update the overlay to be between the distortion and content */}
      <div className="absolute inset-0 bg-gray-900/70 z-[2]" />

      {/* Move the content to the top layer */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-20 relative z-[3]"
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

        {/*  GitHub Activity  */}
        <motion.div
          variants={fadeIn("up", "spring", 1.0, 1)}
          className="mt-24 flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              <a
                href="https://github.com/minharu014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-900 border-b-3 border-blue-900/50 hover:border-white/50 transition-colors duration-300"
              >
                GitHub / minharu014
              </a>
            </h3>

            <GitHubCalendar
              username="minharu014"
              colorScheme="dark"
              blockSize={13}
              blockMargin={3}
              fontSize={10}
              hideColorLegend={true}
              weekStart={1}
              showWeekdayLabels={[
                "mon",
                "tue",
                "wed",
                "thu",
                "fri",
                "sat",
                "sun",
              ]}
              style={{
                borderRadius: "0.5rem",
                padding: "1rem",
                background: "rgba(255, 255,255, 0.20)",
                color: "white",
              }}
            />
            <p className="text-white text-sm text-center mt-4">
              I do laundry on sundays
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;

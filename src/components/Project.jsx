import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import Squares from "./Squares";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const ProjectCard = ({ index, name, description, tags, image, youtube }) => {
  const videoId = getYouTubeVideoId(youtube);
  const hasVideo = !!videoId;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div
        className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl 
        shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:via-transparent 
        before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100"
      >
        {/* Media container - Video or Image */}
        <div className="relative w-full h-[200px] rounded-t-2xl overflow-hidden">
          {hasVideo ? (
            /* YouTube Video Embed */
            <div className="w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
                title={name}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            /* Regular Image */
            <>
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-gray-400/10 
                group-hover:opacity-0 transition-all duration-700 ease-out z-[2]"
              />
              <div className="absolute inset-0 bg-black/20 z-[1]" />
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: 1.15,
                  transition: {
                    type: "spring",
                    stiffness: 160,
                    damping: 30,
                    mass: 1.2,
                    velocity: 2,
                  },
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[0.95] 
                    saturate-[0.85] [&]:grayscale-[15%]"
                />
              </motion.div>
            </>
          )}
        </div>

        {/* Project info */}
        <div className="p-2.5 bg-transparent backdrop-blur-[2px] flex-1 flex flex-col relative">
          {/* Subtle gradient border */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <h3 className="text-gray-900 font-bold text-[18px] group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-1 text-gray-600 text-[12px] leading-[1.6] flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[10px] ${tag.color} font-medium px-1 py-1 rounded-sm 
                  bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-sm
                  hover:shadow-md transition-all duration-300`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Modern gradient line effect */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50
            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div id="projects" className="w-full relative z-0 bg-[#41415fb4]">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#a0a0a7b4"
          hoverFillColor="#fff"
        />
      </div>

      {/* Add a subtle overlay to improve text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#060606]/50 to-[#060606]/50" />

      {/* Content */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 py-20 relative z-[2]"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-white`}>
            My Work
          </p>
          <h3 className={`text-center text-white ${styles.sectionHeadText}`}>
            Projects
          </h3>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              tags={project.tags}
              image={project.image}
              youtube={project.youtube}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;

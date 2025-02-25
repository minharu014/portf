import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import backend from "../assets/icons/backend.png";
import frontend from "../assets/icons/frontend.png";
import ux from "../assets/icons/ux.png";
import ShinyText from "./ShinyText";
import whiteEmail from "../assets/me/whiteEmail2.png";

const iconMap = {
  "backend.png": backend,
  "frontend.png": frontend,
  "ux.png": ux,
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.25)}
      className="w-[120px] card-gradient p-[1px] rounded-[15px] shadow-card"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className="bg-blue-400/30 backdrop-blur-sm rounded-[15px] py-3 px-3 min-h-[120px] flex 
        justify-evenly items-center flex-col group relative overflow-hidden shadow-xl"
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-[15px]
            bg-gradient-to-r from-blue-300/30 via-blue-200/30 to-blue-50/30"
          initial={{ scale: 0, borderRadius: "100%" }}
          whileHover={{
            scale: 2,
            borderRadius: "100%",
            transition: { duration: 0.8 },
          }}
          style={{
            transformOrigin: "center",
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-2"
          whileHover={{ y: -3 }}
        >
          <motion.img
            src={iconMap[icon]}
            alt={title}
            className="w-12 h-12 object-contain brightness-0 invert"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1.0, type: "spring" }}
          />
          <motion.h3
            className="text-white text-[14px] font-medium text-center"
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const github = "https://github.com/minharu014";
  const linkedin = "https://linkedin.com/in/harutran";

  return (
    <div id="about" className="bg-white relative z-0">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I express my creativity through programming, building cool backend
          solutions and some pretty web apps. I enjoy using React, JavaScript,
          Next.js, Python, and TailwindCSS. <br />
          Every day, I explore the latest tech news to stay up-to-date and don't
          fall behind!
          <br />
          <br />I speak Swedish, English & Korean
          <br />
          Contact for resume :)
        </motion.p>

        {/* Contact Links */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="mt-8 flex flex-wrap gap-4 items-center"
        >
          {/* Email - removed onClick handler */}
          <div className="group flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <img
              src={whiteEmail}
              alt="email"
              className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* GitHub */}
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-800/10 flex items-center justify-center group-hover:bg-gray-800/20 transition-colors">
              <svg
                className="w-5 h-5 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <ShinyText
              text="GitHub"
              speed={2}
              className="text-gray-800 text-[16px]"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <ShinyText
              text="LinkedIn"
              speed={2}
              className="text-blue-600 text-[16px]"
            />
          </motion.a>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

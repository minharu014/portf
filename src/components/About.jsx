import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import backend from "../assets/icons/backend.png";
import frontend from "../assets/icons/frontend.png";
import ux from "../assets/icons/ux.png";

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
  return (
    <div className="w-full relative z-0 bg-white/80">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="pt-20 pb-20 max-w-7xl mx-auto px-4 relative"
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            This is ME!
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-600 text-[18px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          I express my creativity through programming, building cool backend
          solutions and eye-catching web apps. I enjoy using React, JavaScript,
          Next.js, Python, and TailwindCSS. <br />
          Every day, I explore the latest tech news to stay up-to-date and don't
          fall behind!
          <br />I speak Swedish, English & Korean
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

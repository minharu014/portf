import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { services } from "../constants";
import me from "../assets/me/hr.png";
import whiteAbstract from "../assets/background/white-abstract.png";
import whiteEmail from "../assets/me/whiteEmail2.png";
import backend from "../assets/icons/backend.png";
import frontend from "../assets/icons/frontend.png";
import ux from "../assets/icons/ux.png";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
import TrueFocus from "./TrueFocus";

const iconMap = {
  "frontend.png": frontend,
  "backend.png": backend,
  "ux.png": ux,
};

const Hero = () => {
  const github = "https://github.com/minharu014";
  const linkedin = "https://linkedin.com/in/harutran";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1.4, 1.2]);
  const opacity = useTransform(scrollY, [0, 400], [0.7, 0.3]);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-screen w-full">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 h-[120vh] w-full"
        >
          <motion.img
            src={whiteAbstract}
            alt="background"
            style={{ opacity }}
            className="w-full h-full object-cover scale-125"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-50/50"
            style={{ opacity }}
          />
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 h-screen w-screen z-[1] overflow-hidden animate-fade-in-right">
        <img
          className="absolute right-0 bottom-0 
          w-4/5 sm:w-auto
          h-[54vh] sm:h-[63vh] md:h-[49vh] xl:h-[56vh] 
          ml-0 sm:ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
          object-contain object-bottom sm:object-right-bottom"
          src={me}
          alt="ht"
        />
      </div>

      <section
        className={`relative ${styles.flexStart} w-full min-h-screen mx-auto overflow-hidden z-[2]`}
      >
        <div
          className={`absolute inset-0 sm:top-[180px] top-[120px] 
          lg:top-[120px] xl:top-[150px] ${styles.paddingX} 
          ${styles.innerWidth} mx-auto ${styles.flexStart} animate-fade-in-up`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-blue-600 sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 sm:hidden" />
          </div>

          <div className="ml-4 sm:ml-8">
            <h1 className={`${styles.heroHeadText} font-poppins uppercase`}>
              Hello I am
              <br />
              <span className="relative text-blue-600 sm:text-[70px] text-[40px] font-bold block mt-4">
                <span className="relative z-[1]">Haru Tran</span>
                <span className="absolute inset-0 rounded-lg transform -skew-x-12 translate-x-2 translate-y-2" />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 max-w-[600px]`}>
              <TrueFocus
                sentence="Full-Stack Developer"
                manualMode={false}
                blurAmount={2}
                borderColor="#0047b3"
                animationDuration={1.2}
                pauseBetweenAnimations={1}
              />
              <br className="sm:block hidden" />
            </p>
          </div>
        </div>

        {/* About Card - Positioned in Hero */}
        <div className="hidden lg:block absolute bottom-8 left-8 z-[3] w-96 animate-fade-in-left">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/20">
            <div>
              <p className="text-gray-600 text-sm font-medium">Introduction</p>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                Overview.
              </h2>
            </div>

            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              Specialized in COMPUTER VISION AI/ML + REACT
              <br />I express my creativity through programming, building cool
              backend solutions and fine web apps.
              <br />I speak Swedish, English & Korean
            </p>

            {/* Contact Links - Email on its own line */}
            <div className="mt-3">
              {/* Email - Full width with white email image */}
              <div className="flex items-center rounded">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-500"
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
                <img src={whiteEmail} alt="email" className="h-10 opacity-90" />
              </div>

              {/* GitHub and LinkedIn on same line */}
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded flex-1"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-800"
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
                  <span className="text-gray-800 text-sm font-medium">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded flex-1"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-blue-600 text-sm font-medium">
                    LinkedIn
                  </span>
                </a>
              </div>
              <hr className="opacity-20"></hr>
            </div>

            {/* Service Icons with Text - Smaller cards */}
            <div className="mt-1 grid grid-cols-2 gap-2">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center gap-0 p-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={iconMap[service.icon] || iconMap["frontend.png"]}
                    alt={service.title}
                    className="mb-1 w-5 h-5 object-contain brightness-0 opacity-90"
                  />
                  <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute xs:bottom-2 bottom-10 w-full ${styles.flexCenter} animate-fade-in-up`}
        >
          <a href="#about">
            <div className="w-[25px] h-[45px] rounded-2xl border-3 border-gray-700 flex justify-center items-start p-1">
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-blue-600 mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

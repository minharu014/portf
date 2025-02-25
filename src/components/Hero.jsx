import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import me from "../assets/me/round.png";
import whiteAbstract from "../assets/background/white-abstract.png";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import TrueFocus from "./TrueFocus";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1.4, 1.2]);
  const opacity = useTransform(scrollY, [0, 400], [0.7, 0.3]);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-screen w-full">
        <motion.div
          style={{ y, scale }}
          initial={{ scale: 1.4 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
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

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="absolute right-0 top-0 h-screen w-screen z-[1] overflow-hidden"
      >
        <img
          className="absolute right-0 bottom-0 ml-[50vw] 
          lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
          sm:h-[90vh] md:h-[70vh] xl:h-[80vh] object-contain"
          src={me}
          alt="ht"
        />
      </motion.div>

      <section
        className={`relative ${styles.flexStart} w-full min-h-screen mx-auto overflow-hidden z-[2]`}
      >
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className={`absolute inset-0 sm:top-[180px] top-[120px] 
          lg:top-[120px] xl:top-[150px] ${styles.paddingX} 
          ${styles.innerWidth} mx-auto ${styles.flexStart}`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-blue-600 sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 sm:hidden" />
          </div>

          <div className="ml-4 sm:ml-8">
            <motion.h1
              variants={fadeIn("right", "tween", 0.2, 1)}
              className={`${styles.heroHeadText} font-poppins uppercase`}
            >
              Hello I am
              <br />
              <span className="relative text-blue-600 sm:text-[70px] text-[40px] font-bold block mt-4">
                <span className="relative z-[1]">Haru Tran</span>
                <span className="absolute inset-0 rounded-lg transform -skew-x-12 translate-x-2 translate-y-2" />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("right", "tween", 0.4, 1)}
              className={`${styles.heroSubText} mt-2 max-w-[600px]`}
            >
              <TrueFocus
                sentence="Full-Stack Developer"
                manualMode={false}
                blurAmount={2}
                borderColor="#0047b3"
                animationDuration={1.2}
                pauseBetweenAnimations={1}
              />
              <br className="sm:block hidden" />
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          initial="hidden"
          animate="show"
          className={`absolute xs:bottom-2 bottom-10 w-full ${styles.flexCenter}`}
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
        </motion.div>
      </section>
    </>
  );
};

export default Hero;

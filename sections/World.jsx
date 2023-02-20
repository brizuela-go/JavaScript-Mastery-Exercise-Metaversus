"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-opacity-60 bg-[#5D6680] hover:scale-150 hover:shadow-2xl transition ease-in duration-150">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-opacity-60 bg-[#5D6680] hover:scale-150 hover:shadow-2xl transition ease-in duration-150">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-opacity-60 bg-[#5D6680] hover:scale-150 hover:shadow-2xl transition ease-in duration-150">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="gradient-01 absolute top-[180px] left-[20%] w-[176px] h-[140px] " />
        <div className="absolute top-[180px] left-[20%] w-[216px] h-[170px] p-[6px] rounded-[30px] bg-opacity-30 bg-[#5D6680] hover:scale-150 hover:shadow-2xl transition ease-in duration-150">
          <img src="world-card2.png" alt="card" className="w-full h-full " />
        </div>

        <div className="gradient-01 absolute left-[60%] top-10 w-[176px] h-[140px] " />
        <div className="absolute  left-[60%] sm:block hidden top-10 w-[200x] h-[156px] p-[6px]  rounded-[30px] bg-opacity-40 bg-[#5D6680] hover:scale-150 hover:shadow-2xl transition ease-in duration-150">
          <img src="world-card.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

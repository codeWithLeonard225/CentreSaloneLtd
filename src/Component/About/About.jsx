import React from "react";
import img from "../../assets/CEO.jpeg";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Utility";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-4">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-10"
      >
        About Us
      </motion.h1>

      {/* Content Wrapper */}
      <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 items-center place-items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-full flex justify-center md:justify-start"
        >
          <img
            src={img}
            alt="Law Firm"
            className="w-[320px] md:w-[380px] h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-3/4 text-center md:text-left space-y-6">
          {/* Mission */}
          <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-blue-900 uppercase"
          >
            Mission Statement
          </motion.h1>

          <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            className="text-sm md:text-base text-gray-700 text-left md:text-justify hyphens-auto"
          >
            At <strong>CENTRE SALONE LTD</strong>, our mission is to drive
            technological innovation, empower individuals through quality
            education, and support business growth while fostering social
            impact. We equip people with the skills, tools, and resources
            needed to succeed in the digital age and create meaningful change.
          </motion.p>

          {/* Vision */}
          <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-blue-900 uppercase"
          >
            Vision Statement
          </motion.h1>

          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            className="text-sm md:text-base text-gray-700 text-left md:text-justify hyphens-auto"
          >
            To be Sierra Leone’s premier hub for technology, education, and
            business excellence—bridging the gap between innovation and
            opportunity. We envision a future where individuals and enterprises
            thrive, digital skills are accessible to all, and sustainable
            solutions drive national development and global competitiveness.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

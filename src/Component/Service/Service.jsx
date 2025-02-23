import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Utility";
import img1 from "../../assets/It.jpeg";
import img2 from "../../assets/business.jpeg";
import img3 from "../../assets/tech.jpeg";
import img4 from "../../assets/community.jpeg";

const services = [
  {
    title: "Technology Services",
    image: img1, // Unique image
    description: [
      "Website & App Development",
      "Custom Software Solutions",
      "IT Consultancy",
      "Cloud & Hosting Services",
      "Technical Support",
    ],
  },
  {
    title: "Business Solutions",
    image: img2, // Unique image
    description: [
      "Startup Incubation",
      "Business Consultation",
      "Market Research & Analysis",
      "Brand Development",
      "E-Commerce Solutions",
    ],
  },
  {
    title: "Digital Skills Training",
    image: img3, // Unique image
    description: [
      "Coding Bootcamps",
      "Graphic Design & UI/UX",
      "Cybersecurity Awareness",
      "Digital Marketing",
      "Data Analytics",
    ],
  },
  {
    title: "Community Empowerment",
    image: img4, // Unique image
    description: [
      "Youth Entrepreneurship Programs",
      "Women in Tech Initiatives",
      "STEM Education for Schools",
      "Career Development Workshops",
      "Public Tech Awareness Campaigns",
    ],
  },
];

export default function Service() {
    return (
      <section className="bg-gray-100 py-24 px-4 w-full overflow-hidden"> {/* Ensure no horizontal scrolling */}
        <div className="container mx-auto px-4 max-w-[1200px]"> {/* Limits max width */}
          {/* Section Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-10"
          >
            Our Services
          </motion.h1>
  
          {/* Intro Text */}
          <p className="text-center md:px-6 text-gray-700 leading-relaxed">
            At <strong>CENTRE SALONE LTD</strong>, we empower individuals and
            businesses through technology, education, and innovation. Our services
            range from software development to business support and digital skills
            training. We also drive community impact through youth and women
            empowerment initiatives.
          </p>
        </div>
  
        {/* Services Grid */}
        <div id="service" className="container mx-auto px-4 max-w-[1200px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-5 text-center w-full"
            >
              {/* Image */}
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[180px] object-cover rounded-md"
                />
              </div>
  
              {/* Service Title */}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                {service.title}
              </h2>
  
              {/* Service List */}
              <ul className="text-left text-sm text-gray-600 space-y-1">
                {service.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  

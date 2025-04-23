import React from 'react';
import aboutPhoto from "../assets/img/jonny-gios-4SQ1IfHNIlc-unsplash.jpg";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-11/12 mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team dedicated to helping people recover their lost items and make the world a little more connected. With advanced technology and a strong community, we aim to simplify the process of reporting, finding, and managing lost & found items.
            </p>
            <p className="text-md text-gray-500 mb-6">
              Our platform is built with love by developers who care about impact. We ensure privacy, transparency, and easy access for all users. Whether you've lost something or want to help others — you're in the right place.
            </p>
            
          </motion.div>

          {/* Image Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-80 md:h-full"
          >
            <img
              src={aboutPhoto}
              alt="About us"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

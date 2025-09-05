'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';
// Stats Section
const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Team Members', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Globe },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
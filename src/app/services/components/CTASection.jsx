import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that drives real
            results for your brand
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Play size={20} /> Watch Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;
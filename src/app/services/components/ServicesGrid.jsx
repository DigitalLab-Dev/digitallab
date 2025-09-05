import { motion } from 'framer-motion';
import {
  Pen,
  Video,
  Palette,
  Share2,
  Megaphone,
  ShoppingCart,
  Code,
  Search,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Content Writing',
      icon: Pen,
      description:
        'Compelling content that converts visitors into customers with persuasive storytelling',
      features: ['SEO-Optimized', 'Brand Voice', 'Conversion-Focused'],
    },
    {
      title: 'Video Production',
      icon: Video,
      description:
        'Professional video production that captivates your audience and tells your story',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement'],
    },
    {
      title: 'Design',
      icon: Palette,
      description:
        'Stunning visual designs that make your brand memorable and impactful',
      features: ['Brand Identity', 'Print Design', 'Digital Assets'],
    },
    {
      title: 'Social Media',
      icon: Share2,
      description:
        'Strategic social presence that builds communities and drives engagement',
      features: ['Content Strategy', 'Community Management', 'Analytics'],
    },
    {
      title: 'Advertising',
      icon: Megaphone,
      description:
        'Targeted ad campaigns that maximize ROI and reach your ideal customers',
      features: ['PPC Management', 'Creative Assets', 'Performance Tracking'],
    },
    {
      title: 'E-Commerce',
      icon: ShoppingCart,
      description:
        'Complete online stores that convert browsers into loyal customers',
      features: ['Store Setup', 'Payment Integration', 'Optimization'],
    },
    {
      title: 'Web Development',
      icon: Code,
      description:
        'Custom web applications built with modern technologies and best practices',
      features: ['Full-Stack', 'Mobile-First', 'Performance Optimized'],
    },
    {
      title: 'SEO',
      icon: Search,
      description:
        'Advanced SEO strategies that boost rankings and drive organic traffic',
      features: ['Technical SEO', 'Content Optimization', 'Link Building'],
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* glowing blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Craft</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Future-ready digital experiences with radiant minimalism
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative group rounded-2xl p-[1px] bg-white/5 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
            >
              {/* Glassmorphic card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Title reveal on hover */}
                {/* Title reveal on hover */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" top-6 left-6 text-xl font-bold text-white z-20"
                >
                  {service.title}
                </motion.h3>

                {/* radiant hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 z-0"></div>

                <div className="mb-6">
                  <service.icon className="w-14 h-14 text-orange-400 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                  <p className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-orange-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </motion.button>

                {/* radiant hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

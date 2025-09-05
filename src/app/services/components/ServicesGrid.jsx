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
// Services Grid
const ServicesGrid = () => {
  const services = [
    {
      icon: Pen,
      title: 'Copywriting',
      description:
        'Compelling content that converts visitors into customers with persuasive storytelling',
      features: ['SEO-Optimized', 'Brand Voice', 'Conversion-Focused'],
    },
    {
      icon: Video,
      title: 'Video Editing',
      description:
        'Professional video production that captivates your audience and tells your story',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement'],
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Stunning visual designs that make your brand memorable and impactful',
      features: ['Brand Identity', 'Print Design', 'Digital Assets'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Strategic social presence that builds communities and drives engagement',
      features: ['Content Strategy', 'Community Management', 'Analytics'],
    },
    {
      icon: Megaphone,
      title: 'Advertising',
      description:
        'Targeted ad campaigns that maximize ROI and reach your ideal customers',
      features: ['PPC Management', 'Creative Assets', 'Performance Tracking'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description:
        'Complete online stores that convert browsers into loyal customers',
      features: ['Store Setup', 'Payment Integration', 'Optimization'],
    },
    {
      icon: Code,
      title: 'Development',
      description:
        'Custom web applications built with modern technologies and best practices',
      features: ['Full-Stack', 'Mobile-First', 'Performance Optimized'],
    },
    {
      icon: Search,
      title: 'SEO',
      description:
        'Advanced SEO strategies that boost rankings and drive organic traffic',
      features: ['Technical SEO', 'Content Optimization', 'Link Building'],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesGrid;
import { TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';
import { motion } from "framer-motion";
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your goals, audience, and challenges',
      icon: Target,
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting a customized roadmap for success',
      icon: BarChart3,
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Implementing solutions with precision and care',
      icon: Zap,
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous improvement and performance monitoring',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-gray-400 text-xl">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 bg-black text-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-orange-500">
                  {step.number}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;
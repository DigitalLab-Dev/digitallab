

// Loader Component
const Loader = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        className="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        className="text-white text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Digital Lab
      </motion.h2>
      <motion.p
        className="text-orange-500 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Loading Services...
      </motion.p>
    </div>
  </div>
);
export default Loader;
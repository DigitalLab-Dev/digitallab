import CTASection from './components/CTASection';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import DesignMattersComponent from './components/WhyItMatters';

const Page = () => {
  return (
    <main className="relative">
      {/* Background */}
      <div className="fixed inset-0 -z-5 ">
        {/* Glow bulb in top-left */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500 blur-[250px] opacity-40" />
        {/* Inner stronger glow */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-orange-400 blur-[120px] opacity-60" />
      </div>

      <Hero />
      <DesignMattersComponent />
      <Gallery />
      <CTASection />
    </main>
  );
};

export default Page;

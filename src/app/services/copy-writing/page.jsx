import CopywritingServices from './sections/CopywritingServices';
import CTASection from './sections/CTASection';
import CopywritingHero from './sections/Hero';
import ProcessTimeline from './sections/ProcessTimeline';
import WhyCopyMatters from './sections/WhyItMatters';

export default function CopyWriting() {
  return (
    <main>
      <CopywritingHero />
      <WhyCopyMatters />
      <CopywritingServices/>
      <ProcessTimeline/>
      <CTASection/>
    </main>
  );
}

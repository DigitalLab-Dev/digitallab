import AdsHero from './sections/AdsHero';
import ServicesSection from './sections/AdsServices';
import PainPointSection from './sections/PainPointSection';

export default function AdsManagement() {
  return (
    <main>
      <AdsHero />
      <PainPointSection />
      <ServicesSection/>
    </main>
  );
}

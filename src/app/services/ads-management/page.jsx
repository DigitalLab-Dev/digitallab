import AdsHero from './sections/AdsHero';
import AdsManagementCTA from './sections/AdsManagementCta';
import AdsManagementPortfolio from './sections/AdsManagementPortfolio';
import ServicesSection from './sections/AdsServices';
import PainPointSection from './sections/PainPointSection';

export default function AdsManagement() {
  return (
    <main>
      <AdsHero />
      <PainPointSection />
      <ServicesSection/>
      <AdsManagementPortfolio/>
      <AdsManagementCTA/>
    </main>
  );
}


import Hero from './sections/Hero';
import ImageSection from './sections/ImageSection';
import Portfolio from './sections/Portfolio';
import ServicesSection from './sections/ServicesSection';
import WebsiteCTA from './sections/WebsiteCTA';
import WhyNeedThis from './sections/WhyNeedThis';

export default function WebDevelopment() {
  return (
    <main>
      <Hero />
      <WhyNeedThis/>
      <ServicesSection/>
      <Portfolio/>
      <WebsiteCTA/>
    </main>
  );
}

import CaseStudiesSection from "./sections/CaseStudiesSection";
import ClientsHeroSection from "./sections/ClientsHero";
import InfluencerShowcase from "./sections/InfluencerShowcase";
import LogoCloudSection from "./sections/LogoCloudSection";
import TestimonialCarousel from "./sections/Testimonial";


export default function Clients(){
  return(
    <main>
      <ClientsHeroSection/>
      <LogoCloudSection/>
      <CaseStudiesSection/>
      <InfluencerShowcase/>
      <TestimonialCarousel/>
    </main>
  )
}
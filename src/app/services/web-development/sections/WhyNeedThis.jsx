

'use client';
import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent';

const WhyNeedThis = () => {
  return (
    <section 
      className="px-4 sm:px-6 md:px-10" 
      aria-labelledby="why-web-dev-heading"
    >
      <Header />
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center max-w-7xl mx-auto">
        <article className="w-full mt-6 lg:mt-10">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-100">
            Your website is the foundation of your online presence. It is
            your digital storefront, open to anyone, anywhere, at any time. A
            great website does more than just look pretty. It builds trust,
            shows off your services, and gives customers the confidence to
            buy from you.
          </p>
        </article>
        
        <aside className="w-full lg:w-auto flex-shrink-0" aria-label="Visual representation">
          <ImageComponent />
        </aside>
      </div>
    </section>
  );
};

export default WhyNeedThis;
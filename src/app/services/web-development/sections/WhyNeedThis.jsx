

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
          <h2 id="why-web-dev-heading" className="sr-only">
            Why Web Development Matters
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-100">
            <strong className="text-orange-500 capitalize text-2xl sm:text-3xl md:text-4xl font-bold">
              Web development
            </strong>{' '}
            is essential because it builds the foundation of your online
            presence, making your brand accessible to anyone, anywhere. A
            well-structured website helps you{' '}
            <strong className="text-orange-500 text-xl sm:text-2xl md:text-3xl font-semibold">
              showcase your services, products, and values
            </strong>{' '}
            in a professional way. It improves credibility and trust, allowing
            potential customers to engage confidently with your business.
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
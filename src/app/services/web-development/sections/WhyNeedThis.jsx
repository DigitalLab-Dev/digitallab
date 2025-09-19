import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent';

const WhyNeedThis = () => {
  return (
    <section className="px-10 py-10 ">
      <Header />
      <div className="flex gap-5 ">
        <article className="w-full mt-10 ">
          <p className="w-full text-2xl">
            <span className="text-orange-500 capitalize text-4xl">
              Web development
            </span>{' '}
            is essential because it builds the foundation of your online
            presence, making your brand accessible to anyone, anywhere. A
            well-structured website helps you{' '}
            <span className="text-orange-500 text-3xl">
              showcase your services, products, and values
            </span>{' '}
            in a professional way. It improves credibility and trust, allowing
            potential customers to engage confidently with your business.
          </p>
        </article>
        <ImageComponent />
      </div>
    </section>
  );
};

export default WhyNeedThis;

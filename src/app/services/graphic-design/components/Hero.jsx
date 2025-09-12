const Hero = () => {

  return (
    <section
      className="py-20 min-h-screen w-full px-10 relative"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "radial-gradient(circle at top left, rgba(249, 115, 22, 0.6) 0%, transparent 45%)",
      }}
    >
      <h1 className="w-full text-left text-8xl font-semibold">
        WE CREATE <br />
        UNSEEN <span className="text-orange-500 italic">DESIGN</span>
      </h1>
      <h2 className="w-full text-right items-center justify-end text-8xl font-semibold ">
        WITH A TASTE <br />OF <span className="text-orange-500 italic">DEJA-VU.</span>
      </h2>
      <div className="w-full flex items-center justify-start mt-4 relative -top-20">
        <p className="text-lg w-[40%] text-left ">
          Our creations are singular, never seen elsewhere and do not follow
          fashion. Nevertheless, they are anchored in a history. Our references
          are linked to what inspires and drives us: an artistic movement, an
          architectural style, a way of life... Our French culture also
          influences us unconsciously. Let's cultivate that.
        </p>
      </div>
    </section>
  );
};

export default Hero;

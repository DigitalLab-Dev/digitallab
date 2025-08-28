import Image from 'next/image';
import Process from './Process';

const Methods = () => {
  const steps = [
    {
      index: 1,
      heading: 'Planning',
      desc: 'Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that, and what problem can we solve with a new design?',
      points: [
        'We get to know each other better',
        'Determine how i can best assist you',
        'Understand the goals you have for the work',
      ],
      image: '/images/planning.svg',
    },
    {
      index: 2,
      heading: 'concept & strategy',
      desc: 'Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach for your designproject. What are the core ideas we want to develop?',
      points: ['UX/UI Design', 'Wireframes', 'Interactive Prototype'],
      image: '/images/strategy.svg',
    },
    {
      index: 3,
      heading: 'Optimize & Scale',
      desc: 'At this stage, we fine-tune performance, implement best practices, and prepare your product to handle growth seamlessly. The focus is on efficiency, reliability, and scalability.',
      points: [
        'Performance Optimization',
        'Deployment & Monitoring',
        'Scalable Architecture',
      ],
      image: '/images/optimization.svg',
    },
  ];
  return (
    <section className="w-full  py-20 flex flex-col items-center justify-center">
      <header className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="uppercase text-4xl text-[#f0750f]">
          Let me show HOW We do
        </h2>
        <h3 className="uppercase text-6xl font-extrabold">
          discover our work method
        </h3>
        <h4 className="text-2xl uppercase">
          [ ©elevate your visual design with expert techniques and advicE ]
        </h4>
      </header>
      <div className="relative flex w-full rounded-4xl bg-black mt-10 min-h-screen">
        {/* Left Column (sticky) */}
        <div className="w-1/2 p-10 sticky top-0 h-screen bg-black  flex items-center justify-center">
          <Image src="/images/iteration.jpg" width={400} height={400} />
        </div>

        {/* Right Column (scrollable content) */}
        <div className="w-1/2 p-10 space-y-20">
          {steps.map((step, index) => (
            <Process
              key={index}
              index={step.index}
              heading={step.heading}
              desc={step.desc}
              points={step.points}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;

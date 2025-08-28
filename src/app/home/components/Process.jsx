import Image from 'next/image';

const Process = ({ index, heading, desc, points, image }) => {
  return (
    <div className="h-[70vh] border-b border-orange-500  flex flex-col items-center justify-center px-5">
      <div className="flex items-start justify-start text-left w-full">
        <span className="text-xl text-orange-500 font-bold">[{index}]</span>
      </div>
      <div className="flex items-end justify-end w-full">
        <Image src={image} width={80} height={80} className="animate-pulse" />
      </div>
      <header className="flex items-start flex-col gap-5 justify-start text-left">
        <h5 className="text-2xl font-bold uppercase">{heading}</h5>
        <p>{desc}</p>
      </header>
      <div className="flex mt-5 w-full flex-col items-start justify-start text-left gap-2">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-left">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Process;

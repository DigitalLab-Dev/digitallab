import ImageComponent from './ImageComponent';

const Gallery = () => {
  const designs = [
    '/portfolios/graphic-design/1.png',
    '/portfolios/graphic-design/2.png',
    '/portfolios/graphic-design/3.png',
    '/portfolios/graphic-design/4.png',
    '/portfolios/graphic-design/5.png',
    '/portfolios/graphic-design/6.png',
    '/portfolios/graphic-design/7.png',
    '/portfolios/graphic-design/8.png',
    '/portfolios/graphic-design/9.png',
    '/portfolios/graphic-design/10.jpg',
    '/portfolios/graphic-design/11.jpg',
    '/portfolios/graphic-design/12.jpg',
    '/portfolios/graphic-design/13.png',
    '/portfolios/graphic-design/14.png',
    '/portfolios/graphic-design/15.png',
    '/portfolios/graphic-design/16.png',
    '/portfolios/graphic-design/17.png',
    '/portfolios/graphic-design/18.jpg',
    '/portfolios/graphic-design/19.png',
    '/portfolios/graphic-design/20.png',
    '/portfolios/graphic-design/21.png',
    '/portfolios/graphic-design/22.png',
    '/portfolios/graphic-design/23.png',
  ];

  const renderImages = () => {
    const rows = [];
    let currentIndex = 0;
    let isTwoImageRow = true; // start with two images

    while (currentIndex < designs.length) {
      if (isTwoImageRow) {
        // two images row
        const imagesInRow = designs.slice(currentIndex, currentIndex + 2);
        rows.push(
          <div
            key={`row-${currentIndex}`}
            className="flex flex-col sm:flex-row gap-4 mb-4 w-full"
          >
            {imagesInRow.map((imageUrl, index) => (
              <div key={currentIndex + index} className="flex-1">
                <ImageComponent imageUrl={imageUrl} isFullWidth={false} />
              </div>
            ))}
          </div>
        );
        currentIndex += 2;
      } else {
        // one image row
        rows.push(
          <div key={`row-${currentIndex}`} className="w-full mb-4">
            <ImageComponent imageUrl={designs[currentIndex]} isFullWidth={true} />
          </div>
        );
        currentIndex += 1;
      }

      // alternate for next iteration
      isTwoImageRow = !isTwoImageRow;
    }

    return rows;
  };

  return (
    <section className="mt-10">
      <header className="text-center my-10">
        <h2 className="text-6xl font-semibold">OUR WORK</h2>
        <p>
          Explore a curated selection of graphic design projects showcasing
          creativity and innovation.
        </p>
      </header>
      <div className="w-full max-w-7xl mx-auto px-4">{renderImages()}</div>
    </section>
  );
};

export default Gallery;

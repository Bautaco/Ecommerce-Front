import { useEffect, useState } from "react";

const images = Array.from(
  { length: 11 },
  (_, i) => `src/assets/fotos/${i + 1}.webp`
);

export default function PhotoGallery() {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array.from({ length: 8 }, () => Math.floor(Math.random() * images.length))
  );
  const [fadeStates, setFadeStates] = useState(Array(8).fill(false));

  useEffect(() => {
    const intervals = currentIndexes.map((_, index) => {
      const randomInterval = Math.random() * 5000 + 5000;
      return setInterval(() => {
        setFadeStates((prevFadeStates) => {
          const newFadeStates = [...prevFadeStates];
          newFadeStates[index] = true;
          return newFadeStates;
        });

        setTimeout(() => {
          setCurrentIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[index] = Math.floor(Math.random() * images.length);
            return newIndexes;
          });
          setFadeStates((prevFadeStates) => {
            const newFadeStates = [...prevFadeStates];
            newFadeStates[index] = false;
            return newFadeStates;
          });
        }, 900);
      }, randomInterval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const getImageClass = (index: number) =>
    `absolute inset-0 w-full h-full object-cover transition-opacity duration-750 ${
      fadeStates[index] ? "opacity-0" : "opacity-100"
    }`;

  return (
    <div className="grid grid-cols-12 gap-2 p-4 bg-black">
      <div className="col-span-3 row-span-2 bg-gray-300  aspect-square relative overflow-hidden">
        <img
          src={images[currentIndexes[0]]}
          alt="Foto dinámica 1"
          className={getImageClass(0)}
          loading="lazy"
        />
      </div>
      <div className="col-span-2 row-span-1">
        <div className="m-2 bg-gray-300 aspect-square relative overflow-hidden">
          <img
            src={images[currentIndexes[1]]}
            alt="Foto dinámica 2"
            className={getImageClass(1)}
          />
        </div>
        <div className="m-2 bg-gray-300 aspect-square relative overflow-hidden">
          <img
            src={images[currentIndexes[2]]}
            alt="Foto dinámica 3"
            className={getImageClass(2)}
          />
        </div>
      </div>
      <div className="col-span-4 row-span-2 bg-gray-300  aspect-square relative overflow-hidden">
        <img
          src={images[currentIndexes[3]]}
          alt="Foto dinámica 4"
          className={getImageClass(3)}
        />
      </div>
      <div className="col-span-3 row-span-1 bg-gray-300 aspect-square relative overflow-hidden">
        <img
          src={images[currentIndexes[4]]}
          alt="Foto dinámica 5"
          className={getImageClass(4)}
        />
      </div>
      <div className="col-span-3 row-span-2 bg-gray-300 aspect-square relative overflow-hidden">
        <img
          src={images[currentIndexes[5]]}
          alt="Foto dinámica 6"
          className={getImageClass(5)}
        />
      </div>
      <div className="col-span-3 row-span-3 bg-gray-300  aspect-square -mt-8 relative overflow-hidden">
        <img
          src={images[currentIndexes[6]]}
          alt="Foto dinámica 7"
          className={getImageClass(6)}
        />
      </div>
      <div className="col-span-4 row-span-1 bg-gray-300  aspect-square relative overflow-hidden">
        <img
          src={images[currentIndexes[7]]}
          alt="Foto dinámica 8"
          className={getImageClass(7)}
        />
      </div>
    </div>
  );
}

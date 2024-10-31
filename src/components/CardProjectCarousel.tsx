import  { useEffect, useState } from "react";
import { type ProjectType } from "./ProjectsSection.astro";
type CarouselProps = Pick<ProjectType, "images">;

type ReactComponentProps = {
  className?: string;
};
function ArrowLeftComponent(props: ReactComponentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M5 12l4 4"></path>
      <path d="M5 12l4 -4"></path>
    </svg>
  );
}

function ArrowRightComponent(props: ReactComponentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M15 16l4 -4"></path>
      <path d="M15 8l4 4"></path>
    </svg>
  );
}

function CardProjectCarousel({ images }: CarouselProps) {
  const [currentIndexImage, setCurrentIndexImage] = useState(0);
  const arraySize = images.length;
  const slideImgLeft = () => setCurrentIndexImage((prevState) => prevState - 1);
  const slideImgRight = () =>
    setCurrentIndexImage((prevState) => prevState + 1);

  return (
    <article className="relative w-full overflow-hidden h-[300px] sm:h-[400px] lg:h-[450px]  border-gray-500  ">
      <div
        className={`left-2 bottom-1/4 size-7 justify-center items-center absolute flex z-10 rounded-lg ${currentIndexImage !== 0 ? "scale-1" : "scale-0"} text-light-primary bg-light-secondary dark:text-dark-primary dark:bg-dark-secondary`}
      >
        {currentIndexImage !== 0 && (
          <button onClick={slideImgLeft}>
            <ArrowLeftComponent />
          </button>
        )}
      </div>

      {images.map((image, index) => {
        return (
          <img
          key={index}
            src={image.src}
            className={` absolute h-full w-full z-0 transition-all object-cover rounded-xl ${index == currentIndexImage ? "scale-1" : "scale-0"} duration-300 `}
          ></img>
        );
      })}
      <div
        className={`size-7 right-2 bottom-1/4 justify-center items-center absolute flex  z-10 rounded-lg  transition-all ${currentIndexImage !== arraySize - 1 ? "scale-1" : "scale-0"} text-light-primary bg-light-secondary dark:text-dark-primary dark:bg-dark-secondary rounded-lg`}
      >
        {currentIndexImage !== arraySize - 1 && (
          <button onClick={slideImgRight}>
            <ArrowRightComponent />
          </button>
        )}
      </div>

      <div className="absolute z-10 h-4 w-full  flex  justify-center bottom-2 gap-2">
        <div className=" flex flex-row gap-2 items-center justify-center p-2 backdrop-blur-3xl rounded-lg border border-gray-600">
        {images.map((e, index) => (
          <div
          key={index}
            className={`size-2 sm:size-3 rounded-full ${index == currentIndexImage ? "bg-gray-600 dark:bg-gray-500" : "bg-gray-600/50 dark:bg-gray-500/50"} `}
          ></div>
        ))}
        </div>
        
      </div>
    </article>
  );
}

export default CardProjectCarousel;

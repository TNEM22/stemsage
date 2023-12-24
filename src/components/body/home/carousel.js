import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Carousel = (props) => {
  const [slides, setSlides] = useState([
    "https://firebasestorage.googleapis.com/v0/b/fir-exmp-9b19b.appspot.com/o/pexels-fauxels-3183197.jpg?alt=media&token=b7bd49ed-4483-46fe-909e-f53fae919f54",
    "https://firebasestorage.googleapis.com/v0/b/fir-exmp-9b19b.appspot.com/o/pexels-canva-studio-3153198.jpg?alt=media&token=eb14fb31-2b6a-4bf5-b8f9-5c89a86028fb",
    "https://firebasestorage.googleapis.com/v0/b/fir-exmp-9b19b.appspot.com/o/pexels-antoni-shkraba-4348401.jpg?alt=media&token=76853052-abab-414a-b2a6-68e5e4be09dc",
  ]);
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const [per, setPer] = useState(50);

  useEffect(() => {
    if (window.innerWidth > 1024) setPer(50);
    else setPer(100);

    const move = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    const slideInterval = setInterval(move, props.slideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides, props]);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${curr * per}%)` }}
        >
          <div className="flex lg:gap-5">
            {slides.map((s, index) => (
              <>
                <img
                  key={s}
                  src={s}
                  alt="demo"
                  title="demo"
                  style={{ display: loading ? "none" : "block" }}
                  onLoad={() => {
                    setLoading(false);
                  }}
                  className={index === 0 ? "lg:w-1/2 lg:ml-80" : "lg:w-1/2"}
                />
                <div
                  key={index}
                  role="status"
                  className={"animate-pulse w-[200px] lg:ml-80"}
                  style={{ display: loading ? "block" : "none" }}
                >
                  <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white px-2 active:pl-0 opacity-55 hover:opacity-85"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white px-2 active:pr-0 opacity-55 hover:opacity-85"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

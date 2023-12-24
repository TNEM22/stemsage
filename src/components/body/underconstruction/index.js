import logo from "../.././media/stemsage.png";
import { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const UnderConstruction = () => {
  const [curr, setCurr] = useState(0);
  const ele = 100;
  useEffect(() => {
    const move = () => {
      setCurr((curr) => (curr === ele / 5 ? 0 : curr + 1));
    };
    const slideInterval = setInterval(move, 1000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  return (
    <>
      <div className="h-[560px] flex flex-col overflow-hidden justify-center">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${curr * 10}%)` }}
        >
          {[...Array(ele + 2)].map((_, i) => (
            <img
              key={i}
              src={logo}
              alt="Stem Heads At Work"
              title="Stem Heads At Work"
              className="w-48 h-48"
            />
          ))}
        </div>
        <div className="flex justify-center w-full">
          <h1
            data-tooltip-id="tooltip"
            className="bg-zinc-600 font-extrabold p-3 rounded-lg w-fit text-6xl"
          >
            Stem Heads At Work
          </h1>
        </div>
        <div
          className="flex flex-row-reverse transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(${curr * 10}%)` }}
        >
          {[...Array(ele + 2)].map((_, i) => (
            <img
              key={i}
              src={logo}
              alt="Stem Heads At Work"
              title="Stem Heads At Work"
              className="w-48 h-48"
            />
          ))}
        </div>
      </div>
      <ReactTooltip
        id="tooltip"
        place="bottom"
        content="!! Developer ko Coffee pilao bhai☕ !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default UnderConstruction;

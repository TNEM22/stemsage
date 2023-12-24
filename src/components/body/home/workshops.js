import Carousel from "./carousel";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Workshops = () => {
  return (
    <>
      <div className="h-[490px] lg:h-[580px]">
        <h1
          data-tooltip-id="easter-tooltip"
          className="xl:text-6xl text-4xl font-extrabold mt-2 mb-8 w-fit"
        >
          Workshops at Stemsage
        </h1>
        <Carousel slideInterval={5000} />
      </div>
      <ReactTooltip
        id="easter-tooltip"
        place="bottom"
        content="!! Find small easter eggs by hovering over the texts.. !!"
        style={{ zIndex: 99 }}
      />
      <ReactTooltip
        id="easter-tooltip"
        place="top"
        content="!! After the major update of the website the easter eggs will be removed !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Workshops;

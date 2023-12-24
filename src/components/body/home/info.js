import { Tooltip as ReactTooltip } from "react-tooltip";

const Info = () => {
  return (
    <>
      <h1
        data-tooltip-id="what-tooltip"
        className="xl:text-6xl text-4xl font-extrabold mt-2 mb-8 w-fit"
      >
        What is Stemsage?
      </h1>
      <ReactTooltip
        id="what-tooltip"
        place="bottom"
        content="!! A Startup !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Info;

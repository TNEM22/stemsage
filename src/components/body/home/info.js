import { Tooltip as ReactTooltip } from "react-tooltip";

const Info = () => {
  return (
    <>
      <div data-tooltip-id="what-tooltip" className="w-fit">
        What is Stemsage?
      </div>
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

import { Tooltip as ReactTooltip } from "react-tooltip";

const Sage = () => {
  return (
    <>
      <h1
        data-tooltip-id="work-tooltip"
        className="xl:text-6xl text-4xl font-extrabold mt-2 mb-8 w-fit"
      >
        Sages At Work
      </h1>
      <ReactTooltip
        id="work-tooltip"
        place="bottom"
        content="!! Working 24/6 !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Sage;

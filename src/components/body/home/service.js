import { Tooltip as ReactTooltip } from "react-tooltip";

const Service = () => {
  return (
    <>
      <h1
        data-tooltip-id="service-tooltip"
        className="xl:text-6xl text-4xl font-extrabold mt-2 mb-8 w-fit"
      >
        Services by us...
      </h1>
      <ReactTooltip
        id="service-tooltip"
        place="bottom"
        content="!! Humpe toh hai hi nou! 🙌 !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Service;

import { Tooltip as ReactTooltip } from "react-tooltip";

const Client = () => {
  return (
    <>
      <h1
        data-tooltip-id="client-tooltip"
        className="xl:text-6xl text-4xl font-extrabold mt-2 mb-8 w-fit"
      >
        Proudful Clients
      </h1>
      <ReactTooltip
        id="client-tooltip"
        place="bottom"
        variant="success"
        content="!! RCPIT | Google | Microsoft !!"
        style={{ zIndex: 99 }}
      />
    </>
  );
};

export default Client;

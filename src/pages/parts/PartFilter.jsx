import { useEffect, useState, useRef } from "react";
import Select from "react-select";
import MachineService from "services/MachineService";
import MachinePartHeadingService from "services/PartHeadingService";

function PartFilter({
  filter,
  setFilter,
  enableFilter,
  setEnableFilter,
  onClickOutside,
  paramsType,
}) {
  const ref = useRef(null);

  const [data, setData] = useState({
    stock: "all",
    machineId: null,
    partHeadingId: null,
    defaultType: null,
    type: paramsType,
  });

  const partTypes = [
    { value: "is_foc", label: "Foc parts" },
    { value: "non_foc", label: "Non Foc parts" },
  ];
  const [machines, setMachines] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [defaultMachine, setDefaultMachine] = useState(null);
  const [defaultHeading, setDefaultHeading] = useState(null);
  const [defaultType, setDefaultType] = useState(null);

  let custom = {
    zIndex: 105,
    position: "fixed",
    inset: "0px 0px auto auto",
    margin: 0,
    transform: "translate(-100%, 50%)",
  };

  const handleSelect = (option, action) => {
    const value = option.value;
    const name = action.name;

    setData({
      ...data,
      [name]: value,
    });

    if (name === "machineId")
      setDefaultMachine({
        label: option.label,
        value: value,
      });

    if (name === "partHeadingId")
      setDefaultHeading({
        label: option.label,
        value: value,
      });
    if (name === "part")
      setDefaultType({
        label: option.label,
        value: value,
      });
  };

  const apply = () => {
    setFilter(data);
    setEnableFilter(!enableFilter);
  };

  const getMachines = async () => {
    let dt = await MachineService.getAll();
    dt = dt?.data?.map((itm) => {
      return { label: itm.name, value: itm.id };
    });
    setMachines(dt);
  };

  const getHeadings = async (machineId) => {
    let dt = await MachinePartHeadingService.getAll(machineId);
    dt = dt.map((itm) => {
      return { label: itm.name, value: itm.id };
    });
    setHeadings(dt);
  };

  const reset = () => {
    setData({
      stock: "all",
      machine_id: null,
      part_heading_id: null,
      defaultType: null,
    });

    setDefaultMachine(null);
    setDefaultHeading(null);
    setDefaultType(null);

    setFilter(null);
    setEnableFilter(!enableFilter);
  };

  useEffect(() => {
    if (enableFilter && !machines.length) getMachines();

    if (!defaultMachine) setDefaultHeading(null);
  }, [enableFilter]);

  useEffect(() => {
    if (enableFilter) getHeadings(data.machineId);
  }, [data.machineId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target))
        onClickOutside && onClickOutside();
    };

    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [onClickOutside]);

  if (!enableFilter) return null;

  return (
    <>
      <div
        ref={ref}
        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px show"
        style={custom}
      >
        <div className="px-7 py-5">
          <div className="fs-5 text-dark fw-bolder">Filter Options</div>
        </div>
        <div className="separator border-gray-200"></div>
        <div className="px-7 py-5">
          <div className="mb-10">
            <label className="form-label fw-bold">Machine:</label>
            <Select
              options={machines}
              onChange={(option, action) => handleSelect(option, action)}
              name="machineId"
              value={defaultMachine}
            />
          </div>
          <div className="mb-10">
            <label className="form-label fw-bold">Part Heading:</label>
            <Select
              options={headings}
              onChange={(option, action) => handleSelect(option, action)}
              name="partHeadingId"
              value={defaultHeading}
            />
          </div>

          {paramsType !== "company" && (
            <div className="mb-10">
              <label className="form-label fw-bold">Foc Parts:</label>
              <Select
                options={partTypes}
                onChange={(option, action) => handleSelect(option, action)}
                name="part"
                value={defaultType}
              />
            </div>
          )}
          
          <div className="d-flex justify-content-end">
            <button
              onClick={reset}
              type="button"
              className="btn btn-sm btn-light btn-active-light-primary me-2"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={apply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartFilter;

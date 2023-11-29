import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "services/CompanyService";
import PartService from "services/PartService";
import RequisitionService from "services/RequisitionService";
toast.configure();

const AddItem = ({ open, requisition, onCloseModal, onAdded }) => {
  const [data, setData] = useState({
    part_ids: [],
    remarks: "",
  });
  const [machineModels, setMachineModels] = useState([]);
  const [search, setSearch] = useState(null);
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [parts, setParts] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const [block, setBlock] = useState(false);
  const [pause, setPause] = useState(null);

  const addItems = async () => {
    await RequisitionService.addItems(requisition?.id, data);
    onAdded();
    onCloseModal();
  };

  const getMachineModels = async () => {
    setBlock(true);

    let models = await CompanyService.getMachinesforRequisitions(
      requisition?.company_id
    );
    if (requisition?.type == "purchase_request") {
      if (!models.length) {
        return;
      }

      models = models[0].machine_model.map((itm) => ({
        label: itm.name,
        value: itm.company_machine_id,
        machineId: itm.machine_id,
      })); //Parse the data as per the select requires

      setMachineModels(models);

      setData({
        ...data,
        ...{ machine_model_id: null },
      });
    } else {
      let carry = [];
      if (!models.length) {
        return;
      }

      models[0].contracts.forEach((element) => {
        element?.is_foc &&
          !element?.is_expired &&
          element?.is_status &&
          element?.machine_model?.forEach((itm) =>
            carry.push({
              label: itm.name,
              value: itm.Company_machine_id,
              machineId: itm.machine_id,
            })
          );
      });

      setMachineModels(carry);

      setData({
        ...data,
        ...{ machine_model_id: null },
      });
    }

    setBlock(false);
  };

  const getParts = async () => {
    let res = await PartService.getSellable({
      q: search,
      company_id: requisition?.company_id,
      is_company: requisition?.is_foc ? 1 : 0,
      machine_id: selectedMachines.map((itm) => itm.value),
    });

    let items = res.data?.map((dt) => {
      return { name: dt.name, id: dt.id };
    });

    setParts(items);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (open) {
      getMachineModels();
      setSelectedMachines(
        requisition.machines.map((itm) => ({
          label: itm.model?.name,
          value: itm.machine_model_id,
        }))
      );
    }
  }, [open]);

  useEffect(() => {
    if (pause) clearTimeout(pause);

    if (search)
      setPause(
        setTimeout(() => {
          getParts();
        }, 500)
      );
  }, [search]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Part Items</>}
        body={
          <>
            <form id="update-company">
              <div className="form-group">
                <label className="required form-label">Machine</label>
                <Select
                  isMulti
                  options={machineModels}
                  onChange={(option) => setSelectedMachines(option)}
                  name="machine_id"
                  value={selectedMachines}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="machine_id"
                ></div>
              </div>

              {selectedParts.length ? (
                <div className="card border mb-4">
                    <div className="card-header p-3">
                        <h3 className="card-title text-gray-800 fw-bold m-0 p-0">Selected Parts</h3>
                    </div>
                  <div className="card-body p-4">
                    { selectedParts.map((item, index) => (
                        <div key={index}>
                        {index ? (<div className="separator separator-dashed my-3"></div>) : ''}
                        
                    <div className="d-flex flex-stack">
                      <span className="text-primary fw-semibold fs-6 me-2 cursor-pointer">
                        {item.name}
                      </span>
                      <button
                        type="button"
                        className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                      >
                        <i className="fa fa-check fs-2"></i>
                      </button>
                    </div>
                    </div>)) }
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Search Parts</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter part name or number"
                  value={search ?? ""}
                  onChange={handleSearch}
                />
              </div>
              {parts.length ? (
                <div className="card border mb-4">
                  <div className="card-body p-4">
                    { parts.map((item, index) => (
                        <div key={index}>
                        {index ? (<div className="separator separator-dashed my-3"></div>) : ''}
                        
                    <div className="d-flex flex-stack">
                      <span className="text-primary fw-semibold fs-6 me-2 cursor-pointer" onClick={(item) => setSelectedParts([...selectedParts, item])}>
                        {item.name}
                      </span>
                      <button
                        type="button"
                        className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                      >
                        <i className="fa fa-check fs-2"></i>
                      </button>
                    </div>
                    </div>)) }
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter remarks"
                  name="remarks"
                  id="remarks"
                  value={data.remarks ?? ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="remarks"
                ></div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={addItems}
              >
                Update
              </button>
              <button
                type="reset"
                className="btn btn-secondary  mt-5 "
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </form>
          </>
        }
      />
    </div>
  );
};

export default AddItem;

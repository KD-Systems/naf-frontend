import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "services/CompanyService";
import PartService from "services/PartService";
import QuotationService from "services/QuotationService";
toast.configure();

const AddItem = ({ open, quotation, onCloseModal, onAdded }) => {
  const [machineModels, setMachineModels] = useState([]);
  const [search, setSearch] = useState(null);
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [parts, setParts] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const [block, setBlock] = useState(false);
  const [remarks, setRemarks] = useState(null);
  const [pause, setPause] = useState(null);

  const addItems = async () => {
    await QuotationService.addItems(quotation?.id, {
      machines: selectedMachines.map(dt => dt.value),
      parts: selectedParts,
      remarks
    });

    setParts([])
    setSelectedMachines([])
    setSelectedParts([])
    onAdded();
    onCloseModal();
  };

  const getMachineModels = async () => {
    setBlock(true);

    let models = await CompanyService.getMachinesforRequisitions(
      quotation.company?.id
    );
    if (quotation.requisition?.type == "purchase_request") {
      if (!models.length) {
        return;
      }

      models = models[0].machine_model.map((itm) => ({
        label: itm.name,
        value: itm.company_machine_id,
        machineId: itm.machine_id,
      })); //Parse the data as per the select requires

      setMachineModels(models);
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
    }

    setBlock(false);
  };

  const getParts = async () => {
    let res = await PartService.getSellable({
      q: search,
      company_id: quotation?.company_id,
      is_company: quotation.requisition?.is_foc ? 1 : 0,
      machine_id: selectedMachines.map((itm) => itm.value),
      quantity: 0,
    });

    let items = res.data
      ?.map((dt) => {
        return { name: dt.name, id: dt.id, number: dt.part_number, quantity: 0 };
      })
      .filter((item) => !quotation.part_items.filter((dt) => dt.part_id == item.id).length);

    setParts(items);
  };

  const handleChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const removeItem = (index) => {
    setSelectedParts(selectedParts.splice(index, 1));
  };

  const addItem = (item, index) => {
    let items = [...selectedParts];
    items.push(item);

    setSelectedParts(items);
    setParts([]);
    setSearch('');
  };

  const increment = (item) => {
    const tempList = [...selectedParts];
    const tempItem = tempList.filter((val) => val.id === item.id);
    tempItem[0].quantity++;

    setSelectedParts(tempList);
  };

  const decrement = (item) => {
    const tempList = [...selectedParts];
    const tempItem = tempList.filter((val) => val.id === item.id);
    tempItem[0].quantity--;

    setSelectedParts(tempList);
  };

  useEffect(() => {
    if (open) {
      setRemarks(quotation.requisition?.remarks);
      getMachineModels();
      setSelectedMachines(
        quotation.requisition.machines.map((itm) => ({
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
        size="xl"
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
                <div className="card border mb-2">
                  <div className="card-header p-3">
                    <h3 className="card-title text-gray-800 fw-bold m-0 p-0">
                      Selected Parts
                    </h3>
                  </div>
                  <div className="card-body p-4">
                    <table
                      width="100%"
                      className="table g-5 gs-0 mb-0 fw-bolder text-gray-700"
                    >
                      <thead>
                        <tr className="border-bottom">
                          <th width="20%">Number</th>
                          <th width="50%">Name</th>
                          <th width="30%">Quantity</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedParts.map((item, index) => (
                          <tr key={index} className="border-bottom">
                            <td>{item.number}</td>
                            <td>
                              <span className="text-primary fw-semibold fs-6 me-2 cursor-pointer">
                                {item.name}
                              </span>
                            </td>

                            <td>
                              <div className="input-group input-group-sm">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-sm"
                                  onClick={() => {
                                    if (item?.quantity > 0) {
                                      decrement(item);
                                    }
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  aria-label="Small"
                                  aria-describedby="inputGroup-sizing-sm"
                                  min="1"
                                  value={item.quantity ? item.quantity : 0}
                                  onChange={() => {}}
                                  name="quantity"
                                />

                                <span
                                  className="input-group-text"
                                  onClick={() => increment(item)}
                                  style={{
                                    cursor: "pointer",
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </span>
                              </div>
                            </td>

                            <td>
                              <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                              >
                                <i className="fa fa-times fs-2 text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                    {parts.map((item, index) => (
                      <div key={index}>
                        {index ? (
                          <div className="separator separator-dashed my-3"></div>
                        ) : (
                          ""
                        )}

                        <div className="d-flex flex-stack">
                          <div>
                            <span
                              className="text-primary fw-semibold fs-6 me-2 cursor-pointer"
                              onClick={() => addItem(item, index)}
                            >
                              {item.name}
                            </span>
                            <span>- {item.number}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => addItem(item, index)}
                            className="btn btn-icon btn-sm h-auto btn-color-gray-500 justify-content-end"
                          >
                            <i className="fa fa-plus fs-2 text-success"></i>
                          </button>
                        </div>
                      </div>
                    ))}
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
                  value={remarks}
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

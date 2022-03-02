import React, { Fragment, useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import MachineService from "services/MachineService";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import PartService from "services/PartService";
import MachinePartHeadingService from "services/MachinePartHeadingService";

const CreatePart = ({ open, onCloseModal, onCreated }) => {
  const [machines, setMachines] = useState([]);
  const [headings, setHeadings] = useState([]);

  const handlePartAdd = () => {
    setInputField([...inputField, {}]);
  };

  const handlePartRemove = (index) => {
    const list = [...inputField];
    list.splice(index, 1);
    setInputField(list);
  };

  const [data, setData] = useState({
    machine_id: "",
    machine_model_id: "",
    machine_heading_id: "",
    name: "",
    part_number: "",
    description: "",
    image: "",
    arm: "",
  });

  const [inputField, setInputField] = useState([{}]);

  const [block, setBlock] = useState(false);

  // Set the selected image to preview
  const setImage = async (e) => {
    let logoShow = document.getElementById("logo");
    let fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);

    fr.addEventListener("load", function () {
      logoShow.style.backgroundImage = "url(" + this.result + ")";
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlock(false);

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePartChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputField];

    // index?list[index][name]= value:list[name]=value
    list[index][name] = value;
    setInputField(list);
  };

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;
    setBlock(false);

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePartSelect = (option, action, index) => {
    const value = option.value;
    const name = action.name;
    const list = [...inputField];
    list[index][name] = value;
    setInputField(list);
  };

  const addPart = async () => {
    setBlock(true);
    let temp1 = [];

    inputField.forEach((value) => {
      temp1.push({
        machine_id: value.machine_id,
        part_heading_id: value.part_heading_id,
        part_number: value.part_number,
      });
    });

    let formData = new FormData();
    // formData.append('aliases', inputField)
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("arm", data.arm);
    formData.append("description", data.descriptions);
    formData.append("parts", JSON.stringify(temp1));
    // formData.append('part_heading_id', temp2)
    // formData.append('part_number', temp3)

   await PartService.create(formData);
    onCreated();
    onCloseModal();
    setBlock(false);
  };

  const getMachines = async () => {
    setBlock(false);
    let data = await MachineService.getAll();
    data = data.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setMachines(data);
    setBlock(false);
  };

  const getHeadings = async (machineId) => {
    setBlock(false);
    let data = await MachinePartHeadingService.getAll(machineId);
    data = data.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setHeadings(data);
    setBlock(false);
  };

  useEffect(() => {
    // if (open) getHeadings(data.machine_id);
    if (open) {
      inputField.map((item, index) => getHeadings(item?.machine_id));
    }
  }, [data.machine_id, inputField]);

  useEffect(() => {
    if (open)
      //Prevent preload data while modal is hidden
      getMachines();
    setBlock(false);
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Part</>}
        body={
          <>
            <form id="part-create" encType="multipart/form-data">
              <div className="mb-5 fv-row fv-plugins-icon-container text-center">
                <div
                  className="mx-auto image-input image-input-outline image-input-changed"
                  data-kt-image-input="true"
                >
                  <div
                    id="logo"
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage:
                        "url(/assets/media/svg/files/blank-image.svg)",
                    }}
                  ></div>
                  <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Change avatar"
                  >
                    <i className="bi bi-pencil-fill fs-7"></i>
                    <input
                      type="file"
                      name="image"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        setImage(e);
                        handleChange(e);
                      }}
                    />
                  </label>
                </div>
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="image"
                ></div>
              </div>

              <div className="form-group">
                <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  // onChange={handlePartChange}
                  // value={data.name ?? ""}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="name"
                ></div>
              </div>

              <div className="form-group">
                <label className="required form-label">Arm</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Arm"
                  name="arm"
                  id="arm"
                  onChange={handleChange}
                  // value={data.name ?? ""}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="name"
                ></div>
              </div>

              {inputField?.map((item, index) => (
                <Fragment key={index}>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-4">
                        {" "}
                        <label className="required form-label">Machine</label>
                        <Select
                          options={machines}
                          // onChange={handleSelect}
                          onChange={(option, action) =>
                            handlePartSelect(option, action, index)
                          }
                          name="machine_id"
                        />
                        <div
                          className="fv-plugins-message-container invalid-feedback"
                          htmlFor="machine_id"
                        ></div>
                      </div>

                      <div className="col-sm-4">
                        <label className="required form-label">
                          Part Heading
                        </label>
                        <Select
                          options={headings}
                          // onChange={handleSelect}
                          onChange={(option, action) =>
                            handlePartSelect(option, action, index)
                          }
                          name="part_heading_id"
                        />
                        <div
                          className="fv-plugins-message-container invalid-feedback"
                          htmlFor="part_heading_id[]"
                        ></div>
                      </div>

                      <div className="col-sm-4">
                        <label className="required form-label">
                          Part Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Part Number"
                          name="part_number"
                          id="part_number"
                          onChange={(e) => handlePartChange(e, index)}
                          // onChange={handleChange}
                          // value={data.part_number ?? ""}
                        />
                        <div
                          className="fv-plugins-message-container invalid-feedback"
                          htmlFor="part_number[]"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {inputField.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger mt-5 mb-5"
                        onClick={() => handlePartRemove(index)}
                      >
                        -
                      </button>
                    )}
                  </div>

                  {inputField.length - 1 === index && (
                    <button
                      type="button"
                      className="btn btn-primary mt-5"
                      onClick={handlePartAdd}
                    >
                      +
                    </button>
                  )}
                </Fragment>
              ))}
              <div className="form-group mt-5">
                <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Description"
                  name="description"
                  id="description"
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="description"
                ></div>
              </div>
              {/* 
              <div className="form-group">
                <label className="required form-label">Machine</label>
                <Select options={machines} onChange={handleSelect} name="machine_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Part Heading</label>
                <Select options={headings} onChange={handleSelect} name="part_heading_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="part_heading_id"></div>
              </div> */}

              {/* <div className="form-group">
                <label className="required form-label">Part Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Part Number"
                  name="part_number"
                  id="part_number"
                  onChange={handleChange}
                  value={data.part_number ?? ''}
                />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="part_number"></div>
              </div> */}

              <button
                disabled={block}
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  addPart();
                }}
              >
                Submit
              </button>
              <button
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

export default CreatePart;

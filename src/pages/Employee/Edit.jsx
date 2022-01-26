import React, { useState, useEffect } from "react";
import Modal from "../../components/utils/Modal";
import EmployeeService from "../../services/EmployeeService";
import DesignationService from "../../services/DesignationService";
import RoleService from "../../services/RoleService";
import Select from "react-select";
import "./Employee.css";

const EditEmployee = ({ open, onCloseModal, getEmployees, employeeId }) => {
  const [employee, setEmployee] = useState("");
  const [designations, setDesignations] = useState([]);
  const [roles, setRoles] = useState([]);
  const [defaultRole, setDefaultRole] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
    status: false,
    designation_id: null,
    role: "",
  });

  const getEmployee = async () => {
    setEmployee(await EmployeeService.get(employeeId));
  };

  const getDesignations = async () => {
    setDesignations(await DesignationService.getAll());
  };

  const getRoles = async () => {
    let data = await RoleService.getAll();
    data = data.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setRoles(data);
  };

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const setImage = async (e) => {
    let logoShow = document.getElementById("avatar");
    let fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);

    fr.addEventListener("load", function () {
      logoShow.style.backgroundImage = "url(" + this.result + ")";
    });
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    let tempdata = { ...data };
    tempdata[name] = value;

    console.log(tempdata);

    setData(tempdata);
  };

  useEffect(() => {
    if (employeeId) {
      getEmployee();
    }
  }, [open, employeeId]);

  useEffect(() => {
    getRoles();
  }, [open]);

  useEffect(() => {
    setData(employee);
  }, [employee]);

  useEffect(() => {
    getDesignations();
  }, [open]);

  useEffect(() => {
    if (open) {
      setDefaultRole({ label: data.role, value: data.role_id });
    }
  }, [data.role]);

  const updateEmployee = async () => {
    let formData = new FormData(document.getElementById("update-employee"));

    formData.append("_method", "PUT");
    await EmployeeService.update(employeeId, formData);
    getEmployees();
    onCloseModal();
  };
  const onSumbit = (e) => {
    e.preventDefault();
    updateEmployee();
    onCloseModal();
  };

  console.log(defaultRole);
  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit Employee</>}
        body={
          <>
            <form id="update-employee">
              <div className="mb-10 fv-row fv-plugins-icon-container text-center">
                <div
                  className="mx-auto image-input image-input-outline image-input-changed"
                  data-kt-image-input="true"
                >
                  <div
                    id="avatar"
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
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                      onChange={setImage}
                    />
                  </label>
                </div>
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="avatar"
                ></div>
              </div>
              <div className="form-group">
                <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter  Name"
                  name="name"
                  id="name"
                  value={data.name || ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="name"
                ></div>
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={data.email || ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="email"
                ></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  value={data.password || ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="password"
                ></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Designation</label>
                <select
                  className="form-control"
                  name="designation_id"
                  id="designation_id"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {designations?.map((item, index) => (
                    <option
                      value={item?.id}
                      selected={
                        data?.designation?.id == item?.id ? "selected" : ""
                      }
                      key={index}
                    >
                      {item?.name}
                    </option>
                  ))}
                </select>
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="designation_id"
                ></div>
              </div>

              <div className="form-group">
                <label className="required form-label">Role</label>
                {defaultRole && (
                  <Select
                    options={roles}
                    onChange={handleSelect}
                    name="role"
                    defaultValue={defaultRole}
                  />
                )}

                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="role"
                ></div>
              </div>

              <div className="form-group mt-5">
                <div className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={data.status}
                    defaultValue={data.status == true ? "true" : "false"}
                    name="status"
                    id="flexSwitchDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchDefault"
                  >
                    Status {data.status ? "active" : "inactive"}
                  </label>
                </div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSumbit}
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

export default EditEmployee;

import React, { useState, useEffect } from "react";
import Modal from "../../components/utils/Modal";
import EmployeeService from "../../services/EmployeeService";
import DesignationService from "../../services/DesignationService";
const CreateEmployee = ({ open, onCloseModal, getEmployees }) => {
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    designation_id: null,
  });


  const setImage = async (e) => {
    let logoShow = document.getElementById("avatar");
    let fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);

    fr.addEventListener("load", function () {
      logoShow.style.backgroundImage = "url(" + this.result + ")";
    });
  };

  const createEmployee = async () => {
    let formData = new FormData(document.getElementById("create-employee"));
    await EmployeeService.create(formData);
    getEmployees();
    onCloseModal();
  };
  const [designations, setDesignations] = useState([]);



  const getDesignations = async () => {
    setDesignations(await DesignationService.getAll());
  };

  useEffect(() => {
    getDesignations();
  }, [open]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onSumbit = (e) => {
    e.preventDefault();
    createEmployee(data);

    onCloseModal();
  };

  

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Create Employee</>}
        body={
          <>
            <form id="create-employee">

            <div className="mb-10 fv-row fv-plugins-icon-container text-center">
                <div
                  className="mx-auto image-input image-input-outline image-input-changed"
                  data-kt-image-input="true"
                >
                  <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage:
                        "url(/assets/media/svg/files/blank-image.svg)",
                    }}
                    id="avatar"
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
                      onChange={(e) => {setImage(e)}}
                    />
                  </label>
                </div>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>
              <div className="form-group">
                <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter  Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Designation</label>
              
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <select className="form-control" name="designation_id" id="designation_id" onChange={handleChange}>
                    <option value="">Select</option>
                    {designations?.map((item,index)=>(
                        <option value={item?.id} key={index}>{item?.name}</option>
                    ))}
                   
                  </select>
                  <span className="form-text text-muted">
                    Please select an option.
                  </span>
                </div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSumbit}
              >
                Create
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

export default CreateEmployee;

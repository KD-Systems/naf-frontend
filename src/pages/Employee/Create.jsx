import React, { useState, useEffect } from "react";
import Modal from "../../components/utils/Modal";
import EmployeeService from "../../services/EmployeeService";
import DesignationService from "../../services/DesignationService";
const CreateEmployee = ({ open, onCloseModal, getEmployees }) => {
  const [data, setData] = useState({
    user_id: null,
    designation_id: null,
  });

  const [designations, setDesignations] = useState([]);

  const createEmployee = async (data) => {
    await EmployeeService.create(data);
    getEmployees();
  };

  const getDesignations = async () => {
    setDesignations(await DesignationService.getAll());
  };

  useEffect(() => {
    getDesignations();
  }, []);

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
        title={<>Create Designation</>}
        body={
          <>
            <form>
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
                  <select className="form-control" name="designation_id" id="designation_id">
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

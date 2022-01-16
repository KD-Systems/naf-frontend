import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import CreateEmployee from "./Create";
import EditEmployee from "./Edit";
const Employee = () => {
  const [action, setAction] = useState(false);

  const [employeeId, setEmployeeId] = useState("");

  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [updateOpen,setUpdateOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const onOpenUpdateModal = ()=> setUpdateOpen(true);
  const onCloseUpdateModal = ()=>setUpdateOpen(false)

  const getEmployees = async () => {
    setEmployees(await EmployeeService.getAll());
  };
  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you want to do it?")) return false;

    await EmployeeService.remove(id);
    getEmployees();
    setAction(false);
  };



  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
    >
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card card-flush">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              <div className="card-title">
                <div className="d-flex align-items-center position-relative my-1">
                  <span className="svg-icon svg-icon-1 position-absolute ms-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="17.0365"
                        y="15.1223"
                        width="8.15546"
                        height="2"
                        rx="1"
                        transform="rotate(45 17.0365 15.1223)"
                        fill="black"
                      />
                      <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="black"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    data-kt-ecommerce-product-filter="search"
                    className="form-control form-control-solid w-250px ps-14"
                    placeholder="Search Employee"
                  />
                </div>
              </div>

              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <Link
                  to="#"
                  className="btn btn-light-primary btn-md"
                  onClick={() => {
                    onOpenModal();
                  }}
                >
                  Add Employee
                </Link>
              </div>
            </div>

            <div className="card-body pt-0">
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id=""
              >
                <thead>
                  <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                    <th className="w-10px pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                          value="1"
                        />
                      </div>
                    </th>
                    <th className="min-w-100px">Name</th>

                    <th className="min-w-70px">Designation</th>
                    <th className="min-w-100px">Role</th>
                    <th className="min-w-100px">Status</th>
                    <th className="min-w-100px text-end">Actions</th>
                  </tr>
                </thead>

                <tbody className="fw-bold text-gray-600">
                  {employees.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="symbol symbol-50px">
                            <span className="symbol-label">
                              {" "}
                              <img
                                src={item.avatar}
                                className="h-75 align-self-end"
                                alt=""
                              />
                            </span>
                          </Link>

                          <div className="ms-5">
                            <Link
                              to="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bolder"
                              data-kt-ecommerce-product-filter="product_name"
                            >
                              {item?.name}
                            </Link>
                          </div>
                        </div>
                      </td>

                      <td className="pe-0" data-order="32">
                        <span className="fw-bolder ms-3">
                          {item?.designation}
                        </span>
                      </td>

                      <td className="pe-0" data-order="32">
                        <span className="fw-bolder ms-3">Administration</span>
                      </td>

                      <td className="pe-0" data-order="Scheduled">
                        <div
                          className={
                            item?.status == 1
                              ? "badge badge-light-success"
                              : "badge badge-light-danger"
                          }
                        >
                          {item?.status == 1 ? "active" : "inactive"}
                        </div>
                      </td>

                      <td className="text-end">
                        <Link
                          //  to={"/panel/designations/" + item.id}
                          to={"/panel/employees/"+item.id}
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                        >
                          <span className="svg-icon svg-icon-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          onClick={() => {
                            onOpenUpdateModal();
                            setEmployeeId(item.id);
                          }}
                        >
                          <span className="svg-icon svg-icon-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="black"
                              />
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          onClick={() => deleteEmployee(item.id)}
                        >
                          <span className="svg-icon svg-icon-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                fill="black"
                              />
                              <path
                                opacity="0.5"
                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                fill="black"
                              />
                              <path
                                opacity="0.5"
                                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </Link>
                      </td>

              
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CreateEmployee
        open={open}
        onCloseModal={onCloseModal}
        getEmployees={getEmployees}
      />

      <EditEmployee
        open={updateOpen}
        onCloseModal={onCloseUpdateModal}
        getEmployees={getEmployees}
        employeeId = {employeeId}
      />

      
    </div>
  );
};

export default Employee;

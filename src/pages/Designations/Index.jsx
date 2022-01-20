import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/utils/Modal";
import DesignationService from "../../services/DesignationService";
import CreateDesignation from "./Create";

const Index = () => {
  const [designations, setDesignations] = useState([]);
  const [designationId, setDesignationId] = useState("");
  const [designation, setDesignation] = useState("");

  const [data, setData] = useState({ name: "", description: "" });

  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const onOpenNewModal = () => setOpenModal(true);
  const onCloseNewModal = () => setOpenModal(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getDesignations = async () => {
    setDesignations(await DesignationService.getAll());
  };

  const getDesignation = async () => {
    setDesignation(await DesignationService.get(designationId));
  };

  const updateDesignation = async () => {
    await DesignationService.update(designationId, data);
  };

  // change data
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    let tempdata = { ...data };
    tempdata[name] = value;

    setData(tempdata);
  };
  //update designation
  const onSubmit = () => {
    updateDesignation();
    onCloseModal();
  };

  //delete Designation
  const deleteDesignation = async (id) => {
    if (!window.confirm("Are you want to do it?")) return false;

    await DesignationService.remove(id);
    getDesignations();
    setOpen(false);
  };

  useEffect(() => {
    getDesignations();
  }, []);

  useEffect(() => {
    if (designationId) {
      getDesignation();
    }
  }, [designationId]);

  useEffect(() => {
    let tempdata = { ...data };
    tempdata.name = designation.name;
    tempdata.description = designation.description;
    setData(tempdata);
  }, [designation]);

  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-3 mb-1">
                  Designations
                </span>
              </h3>

              <div className="card-toolbar">
                <button
                  
                  className="btn btn-light-primary btn-md"
                  onClick={() => {
                    onOpenNewModal();
                  }}
                >
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                      <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                      <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                    </svg>
                  </span>
                  Add Designation
                </button>
              </div>
            </div>

            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="w-25px"></th>
                      <th className="min-w-50px">Id</th>

                      <th className="min-w-120px">Designation</th>
                      <th className="min-w-120px">Members</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {designations?.map((item, index) => (
                      <tr key={index}>
                        <td></td>
                        <td>
                          <Link
                            to="#"
                            className="text-dark fw-bolder text-hover-primary fs-6"
                          >
                            {item.id}
                          </Link>
                        </td>

                        <td>
                          <Link
                            to="/"
                            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to="#"
                            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                          >
                            1
                          </Link>
                        </td>

                        <td className="text-end">
                          <Link
                           to={"/panel/designations/" + item.id}
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
                              onOpenModal();
                              setDesignationId(item.id);
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
                            onClick={() => deleteDesignation(item.id)}
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
      </div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit Designation</>}
        id={designationId}
        body={
          <>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Name"
                  name="name"
                  id="name"
                  value={data.name || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Description"
                  name="description"
                  id="description"
                  value={data.description || ""}
                  onChange={handleChange}
                />
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSubmit}
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
      <CreateDesignation
        open={openModal}
        onCloseModal={onCloseNewModal}
        getDesignations={getDesignations}
      />
    </>
  );
};

export default Index;
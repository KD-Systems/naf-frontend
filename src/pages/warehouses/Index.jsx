import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/utils/Modal";
import WareHouseService from "../../services/WareHouseService";
import CreateWareHouse from "./Create";
import EditWareHouse from "./Edit";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [wareHouses, setWareHouses] = useState([]);
  const [warehousId, setWarehousId] = useState("");
  const [updateOpen, setUpdateOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenUpdateModal = () => setUpdateOpen(true);
  const onCloseUpdateModal = () => setUpdateOpen(false);

  const getWareHouses = async () => {
    setWareHouses(await WareHouseService.getAll());
  };

  const deleteWarehouse = async (id) => {
    if (!window.confirm("Are you want to do it?")) return false;

    await WareHouseService.remove(id);
    getWareHouses();
  };

  useEffect(() => {
    getWareHouses();
  }, []);
  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-3 mb-1">
                  WareHouses
                </span>
              </h3>

              <div className="card-toolbar">
                <button
                  className="btn btn-light-primary btn-md"
                  onClick={() => {
                    onOpenModal();
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
                      <rect
                        opacity="0.3"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        fill="black"
                      ></rect>
                      <rect
                        x="10.8891"
                        y="17.8033"
                        width="12"
                        height="2"
                        rx="1"
                        transform="rotate(-90 10.8891 17.8033)"
                        fill="black"
                      ></rect>
                      <rect
                        x="6.01041"
                        y="10.9247"
                        width="12"
                        height="2"
                        rx="1"
                        fill="black"
                      ></rect>
                    </svg>
                  </span>
                  Add WareHouse
                </button>
              </div>
            </div>

            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="w-25px"></th>
                     

                      <th className="min-w-120px">Name</th>
                      <th className="min-w-120px">parts</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {wareHouses?.map((item, index) => (
                      <tr key={index}>
                        <td></td>
                      

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
                            to="#"
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                              onOpenUpdateModal();
                              setWarehousId(item.id);
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
                            onClick={() => deleteWarehouse(item.id)}
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

      <CreateWareHouse
        open={open}
        onCloseModal={onCloseModal}
        getWareHouses={getWareHouses}
      />

      <EditWareHouse
        open={updateOpen}
        onCloseModal={onCloseUpdateModal}
        getWareHouses={getWareHouses}
        warehousId={warehousId}
      />
    </>
  );
};

export default Index;
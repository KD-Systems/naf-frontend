import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                  Warehouses
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
                  Add Warehouse
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
                      <th className="min-w-120px">Parts</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {wareHouses?.map((item, index) => (
                      <tr key={index}>
                        <td></td>


                        <td>
                          <Link
                            to={"/panel/warehouses/" + item.id}
                            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                          >
                            {item.name}
                          </Link>
                        </td>

                        <td>{item.parts_count}</td>

                        <td className="text-end">
                          <Link
                            to={"/panel/warehouses/" + item.id}
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                              onOpenUpdateModal();
                              setWarehousId(item.id);
                            }}
                          >
                            <i className="fa fa-pen"></i>
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            onClick={() => deleteWarehouse(item.id)}
                          >
                            <i className="fa fa-trash"></i>
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
        getWareHouses={() => getWareHouses}
      />

      <EditWareHouse
        open={updateOpen}
        onCloseModal={onCloseUpdateModal}
        getWareHouses={() => getWareHouses}
        warehousId={warehousId}
      />
    </>
  );
};

export default Index;

import PermissionAbility from "helpers/PermissionAbility";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BoxHeadingService from "services/BoxHeadingService";
import CreateBoxHeading from "./Create";
import EditBoxHeading from "./Edit";

const BoxHeadings = () => {
  const [open, setOpen] = useState(false);
  const [boxHeadins, setBoxHeadins] = useState([]);
  const [boxId, setBoxId] = useState("");
  const [updateOpen, setUpdateOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenUpdateModal = () => setUpdateOpen(true);
  const onCloseUpdateModal = () => setUpdateOpen(false);

  const getBoxHeadings = async () => {
    setBoxHeadins(await BoxHeadingService.getAll());
  };

  const deleteBoxHeading = async (id) => {
    await BoxHeadingService.remove(id);
    getBoxHeadings();
  };

  useEffect(() => {
    getBoxHeadings();
  }, []);
  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-3 mb-1">
                  Box Headings
                </span>
              </h3>
              <PermissionAbility permission="warehouses_create">
                <div className="card-toolbar">
                  <button
                    className="btn btn-light-primary btn-md"
                    onClick={() => {
                      onOpenModal();
                    }}
                  >
                    Add Box Heading
                  </button>
                </div>
              </PermissionAbility>
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
                    {boxHeadins?.map((item, index) => (
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
                          <PermissionAbility permission="warehouses_show">
                            <Link
                              to={"/panel/warehouses/" + item.id}
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </PermissionAbility>
                          <PermissionAbility permission="warehouses_edit">
                            <Link
                              to="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              onClick={() => {
                                onOpenUpdateModal();
                                setBoxId(item.id);
                              }}
                            >
                              <i className="fa fa-pen"></i>
                            </Link>
                          </PermissionAbility>
                          <PermissionAbility permission="warehouses_delete">
                            <Link
                              to="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                              onClick={() => { deleteBoxHeading(item.id) }}
                            >
                              <i className="fa fa-trash"></i>
                            </Link>
                          </PermissionAbility>
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

      <CreateBoxHeading
        open={open}
        onCloseModal={onCloseModal}
        onChange={() => { getBoxHeadings() }}
      />

      <EditBoxHeading
        open={updateOpen}
        onCloseModal={onCloseUpdateModal}
        onChange={() => { getBoxHeadings() }}
        boxId={boxId}
      />
    </>
  );
};

export default BoxHeadings;

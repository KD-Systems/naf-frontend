import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Confirmation from "../../components/utils/Confirmation";
import RoleService from "services/RoleService";
import CreateRole from "./Create";
import { useSelector } from "react-redux";
const Roles = () => {
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState([]);

  const [roleId, setRoleId] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const { user } = useSelector((state) => state?.auth);
  const getRoles = async () => {
    setRoles(await RoleService.getAll());
  };

  const deletRoles = async (roleId) => {
    await RoleService.remove(roleId);
    getRoles();
  };

  console.log("🟪", user?.role);

  useEffect(() => {
    getRoles();
  }, []);
  return (
    <>
      {" "}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder fs-3 mb-1">Roles</span>
              </h3>
              <div className="card-toolbar">
                <button
                  className="btn btn-light-primary btn-md"
                  onClick={() => setOpen(true)}
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
                  Add Roles
                </button>
              </div>
            </div>

            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="w-25px"></th>
                      <th className="min-w-140px">Name</th>
                      <th className="min-w-120px">Users</th>
                      {user?.role === "Admin" ? (
                        ""
                      ) : (
                        <th className="min-w-100px text-end">Actions</th>
                      )}
                      {/* <th className="min-w-100px text-end">Actions</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {roles?.map((item, index) => (
                      <tr key={index}>
                        <td></td>
                        <td>
                          <Link
                            to={
                              item.name !== "Admin"
                                ? `/panel/roles/` + item.id
                                : "#"
                            }
                            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                          >
                            {item?.name}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to="#"
                            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                          >
                            {item?.users_count}
                          </Link>
                        </td>

                        <td className="text-end">
                          {item?.name !== "Admin" ? (
                            <Link
                              to={
                                item.name !== "Admin"
                                  ? `/panel/roles/` + item.id
                                  : "#"
                              }
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
                          ) : (
                            ""
                          )}
                          {item?.name !== "Admin" ? (
                            <Link
                              to="#"
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                              onClick={() => {
                                setRoleId(item.id);
                                setConfirmDelete(true);
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
                          ) : (
                            ""
                          )}
                          {/* <Link
                            to="#"
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            onClick={() => {
                              setRoleId(item.id);
                              setConfirmDelete(true);
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
                          </Link> */}

                          {/* <Link
                            to="#"
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            onClick={() => {
                              setRoleId(item.id);
                              setConfirmDelete(true);
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
                          </Link> */}
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
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deletRoles(roleId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
      <CreateRole
        open={open}
        onCloseModal={onCloseModal}
        onCreated={getRoles}
      />
    </>
  );
};

export default Roles;

import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoleService from "services/RoleService";
const ShowPermission = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [role, setRole] = useState({});
  const [permissions, setPermissions] = useState([]);
  const [defaultPerms, setDefaultPerms] = useState(null);
  const [permValues, setPermValues] = useState({});

  const getRole = async () => {
    setRole(await RoleService.get(id));
    setLoading(false)
  };

  const getPermission = async () => {
    setPermissions(await RoleService.getPermission());
  };

  const updatePermission = async (e, permId) => {
    setLoading(true)
    let attach = e.target.checked;
    await RoleService.updatePermission(id, permId, attach);
    getRole();
  };

  useEffect(() => {
    if (role.permissions)
      setDefaultPerms(role.permissions?.map((perm) => perm.id));
  }, [role]);

  useEffect(() => {
    if (id) {
      getRole(id);
      getPermission();
    }

  }, [id]);

  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card card-flush">
            <div className="card-header pt-8">
              <div className="card-title">
                <h2>{role?.name}</h2>
                {loading ? (
                <span className="me-5">
                    <i className="fas fa-cog fa-spin" style={{marginLeft: '1rem'}}></i> Loading...
                  </span>
                ) : ''}
              </div>
            </div>

            <div className="card-body">
              {/* {loading ? (
                <>
                  <div className="engage-toolbar position-fixed fw-bolder">
                      <i className="fas fa-cog fa-spin"></i> Loading...
                  </div>
                  <div className="modal-backdrop fade show bg-dark"></div>
                </>
              ) : (
                ""
              )} */}
              <form className="form" id="kt_file_manager_settings">
                {permissions?.map((item, index) => (
                  <Fragment key={index}>
                    <div className="fv-row row mb-15">
                      <div className="col-md-2">
                        <label className="fs-6 fw-bold">{item?.name}</label>
                      </div>

                      <div className="col-md-10">
                        <div className="d-flex">
                          {item?.permissions?.map((permission, index) => (
                            <div
                              key={index}
                              className="form-check form-switch form-check-custom form-check-solid me-10"
                            >
                              <input
                                checked={defaultPerms?.includes(permission.id)}
                                className="form-check-input h-30px w-50px"
                                name="permission_id"
                                type="checkbox"
                                id="permission_id"
                                onChange={(e) =>
                                  updatePermission(e, permission.id)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="permission_id"
                              >
                                {permission.name.replace("_", " ").capitalize()}
                              </label>
                            </div>
                          ))}
                        </div>

                        <div className="separator mt-6 mb-5"></div>
                      </div>
                    </div>
                  </Fragment>
                ))}
                {/* <div className="row mt-12 ">
                  <div className="col-md-9 offset-md-3">
                    <button
                      type="button"
                      className="btn btn-light me-3"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="kt_file_manager_settings_submit"
                    >
                      <span className="indicator-label">Save</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPermission;

import React,{useEffect,useState} from "react";
import {useNavigate,useParams} from "react-router-dom"
import RoleService from "services/RoleService";
const ShowPermission = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [role, setRole] = useState({});
  const getRole = async () => {
    setRole(await RoleService.get(id));
  };

  useEffect(() => {
    if (id) {
      getRole();
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
              </div>
            </div>

            <div className="card-body">
              <form className="form" id="kt_file_manager_settings">
                <div className="fv-row row mb-15">
                  <div className="col-md-3">
                    <label className="fs-6 fw-bold">Sharing Permissions</label>
                  </div>

                  <div className="col-md-9">

                    <div className="d-flex">
                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                      <input
                          className="form-check-input h-30px w-50px"
                          name="public_write"
                          type="checkbox"
                          value=""
                          id="public_write"
                        />
                        <label className="form-check-label" htmlFor="org_read">
                          Read
                        </label>
                      </div>

                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                      <input
                          className="form-check-input h-30px w-50px"
                          name="public_write"
                          type="checkbox"
                          value=""
                          id="public_write"
                        />
                        <label className="form-check-label" htmlFor="org_write">
                          Write
                        </label>
                      </div>
                    </div>

                    <div className="separator mt-6 mb-5"></div>



                
                  </div>
                </div>

                <div className="row mt-12">
                  <div className="col-md-9 offset-md-3">
                    <button type="button" className="btn btn-light me-3" onClick={()=>{navigate(-1)}}>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPermission;

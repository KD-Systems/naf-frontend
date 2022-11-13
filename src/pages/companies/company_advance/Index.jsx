import Confirmation from "components/utils/Confirmation";
import PermissionAbility from "helpers/PermissionAbility";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdvanceService from "services/AdvanceService";
import AdvanceAmount from "./AdvanceAmount";
import EditUser from "./Edit";

const CompanyAdvance = ({ active }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { id } = useParams();

  const [dueModal, setDueModal] = useState(false);

  const onCloseModal = () => {
    setOpenEditModal(false);
  };

  const getUsers = async () => {
    setUsers(await AdvanceService.getAll({id:id}));
  };

  const deleteUser = async (userId) => {
    // if (window.confirm("Are you sure want to delete?"))
    // await CompanyService.deleteUser(id, userId);
  };

  useEffect(() => {
    if (id) getUsers();
  }, [id]);

  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <div
          className="tab-pane fade active show"
          id="advancePayment"
          role="tab-panel"
        >
          <div className="d-flex flex-column gacompanyIdgap-lg-10">
            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Advance Payment History</h2>
                </div>
                <div className="card-toolbar">
                  <PermissionAbility permission="companies_users_add_user">
                    <button
                      type="button"
                      className="btn btn-light-primary"
                      onClick={() => {
                        setDueModal(true);
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
                      Add Advance
                    </button>
                  </PermissionAbility>
                </div>
              </div>
              <div className="card-body pt-0">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="min-w-50px">Date</th>
                      <th className="min-w-50px">Amount</th>
                      <th className="min-w-50px">Type</th>
                      <th className="min-w-50px">Invoice ID</th>
                      <th className="min-w-50px">Remarks</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {moment(item.created_at).format("MMM Do YY")}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item.amount}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item.transaction_type ? "Addition" : "Deduction"}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item.invoice_number ?? "Manually Added"}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            {item?.remarks ?? "N/A"}
                          </div>
                        </td>

                        <td className="text-end">
                          {/* <PermissionAbility permission="companies_users_show">
                            <Link
                              to={
                                "/panel/companies/" + id + "/users/" + item.id
                              }
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </PermissionAbility>
                          <PermissionAbility permission="companies_users_edit">
                            <button
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              onClick={() => {
                                setUserId(item.id);
                                setOpenEditModal(true);
                              }}
                            >
                              <i className="fa fa-pen"></i>
                            </button>
                          </PermissionAbility> */}
                          <PermissionAbility permission="companies_users_delete">
                            <button
                              onClick={() => {
                                setConfirmDelete(true);
                                setUserId(item.id);
                              }}
                              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </PermissionAbility>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Confirmation
            open={confirmDelete}
            onConfirm={() => {
              setConfirmDelete(false);
              deleteUser(userId);
            }}
            onCancel={() => setConfirmDelete(false)}
          />

          <EditUser
            open={openEditModal}
            onCloseModal={() => {
              onCloseModal();
            }}
            onUpdate={() => {
              getUsers();
            }}
            companyId={id}
            userId={userId}
          />

          <AdvanceAmount
            open={dueModal}
            companyId={id}
            onCloseModal={() => setDueModal(false)}
            onUpdated={getUsers}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyAdvance;

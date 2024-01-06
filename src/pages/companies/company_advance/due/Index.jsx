import Confirmation from "components/utils/Confirmation";
import PermissionAbility from "helpers/PermissionAbility";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DuePaymentService from "services/DuePaymentService";
import DueForm from "./Form";

const DueCompoent = () => {
  let { id } = useParams();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [advanceId, setAdvanceId] = useState(null);
  const [advance, setAdvance] = useState([]);
  const [dueModal, setDueModal] = useState(false);

  const getAdvance = async () => {
    setAdvance(await DuePaymentService.getAll({ id: id }));
  };

  const deleteRecord = async (duePaymentHistoryId) => {
    try {
      await DuePaymentService.remove(duePaymentHistoryId, id);

      setAdvance(
        advance.filter((duePayment) => duePayment.id != duePaymentHistoryId)
      );
    } catch (error) {
      toast("Recored not deleted", { type: "error" });
    }
  };

  useEffect(() => {
    if (id) getAdvance();
  }, [id]);

  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <div
          className="tab-pane fade active show"
          id="advancePayment"
          role="tab-panel"
        >
          <div className="d-flex flex-column gaidgap-lg-10">
            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Due Payment History</h2>
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
                      Add Due
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
                    {advance?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {moment(item?.created_at).format("MMM Do YY")}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item?.amount}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item?.transaction_type
                                ? "Addition"
                                : "Deduction"}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-start flex-column">
                              {item?.invoice_number ?? "Manually Added"}
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            {item?.remarks ?? "N/A"}
                          </div>
                        </td>

                        <td className="text-end">
                          <PermissionAbility permission="companies_users_delete">
                            <button
                              onClick={() => {
                                setConfirmDelete(true);
                                setAdvanceId(item.id);
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
              deleteRecord(advanceId);
            }}
            onCancel={() => setConfirmDelete(false)}
          />

          <DueForm
            open={dueModal}
            id={id}
            onCloseModal={() => setDueModal(false)}
            onUpdated={getAdvance}
          />
        </div>
      </div>
    </div>
  );
};

export default DueCompoent;

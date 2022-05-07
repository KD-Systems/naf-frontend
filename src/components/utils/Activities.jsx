import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import ActivityService from "services/ActivityService";

export const Activities = ({ logName, modelId, self, tab }) => {
  const [data, setData] = useState([]);
  const icons = {
    created: "plus",
    updated: "pen",
    deleted: "trash",
    restored: "restore",
  };

  const expandProperties = (e) => {
    let prop = e.target;
    let propId = prop.getAttribute("data-id");

    document.getElementById(propId).classList.toggle("d-none");
  };

  const getActivities = async () => {
    setData(
      await ActivityService.getAll({
        log_name: logName,
        model_id: modelId,
        self: self,
      })
    );
  };

  useEffect(() => {
    if (tab === "activities") getActivities();
  }, [tab]);

  return (
    <div
      className={`tab-pane fade ${tab === "activities" ? "active show" : ""}`}
      id="models"
      role="tabpanel"
    >
      <div className="card card-xl-stretch mb-xl-10">
        <div className="card-header align-items-center border-0 mt-4">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder mb-2 text-dark">Activities</span>
          </h3>
        </div>
        <div className="card-body pt-5">
          <div className="timeline">
            {data.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <i className={"fa fa-" + icons[item.event]}></i>
                  </div>
                </div>
                <div className="timeline-content mb-12 mt-n2">
                  <div className="overflow-auto pe-3">
                    <div
                      className="fs-5 fw-bold mb-2"
                      role="button"
                      data-id={"properties-" + i}
                      onClick={(e) => expandProperties(e)}
                    >
                      {item.message}
                    </div>

                    <div
                      className="overflow-auto pb-5 d-none"
                      id={"properties-" + i}
                    >
                      <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="symbol symbol-circle symbol-30px">
                        <img
                          src={item.causer.avatar_url}
                          alt={item.causer.name}
                        />
                      </div>

                      <div className="text-muted me-2 fs-7 m-2">
                        <span className="text-black">
                          <Link
                            to={
                              "/panel/" +
                              (item.causer.employee
                                ? `employees/${item.causer.id}`
                                : `${item.details.company_id}/company-users/${item.causer.id}`)
                            }
                          >
                            {item.causer.name.capitalize()}
                          </Link>
                        </span>{" "}
                        {item.event} at{" "}
                        <span className="text-black">
                          <Moment format="D MMM  YYYY hh:mm a">
                            {item.created_at}
                          </Moment>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {
              data.length === 0 && (
                <div className="timeline-item">
                  <div className="timeline-line w-40px"></div>
                  <div className="timeline-icon symbol symbol-circle symbol-40px">
                    <div className="symbol-label bg-light">
                      <i className="fa fa-genderless"></i>
                    </div>
                  </div>
                  <div className="timeline-content mb-12 mt-n2">
                    <div className="overflow-auto pe-3">
                      <div className="fs-5 fw-bold mb-2">No activities!</div>
                      <div className="d-flex align-items-center mt-1 fs-6">
                        <div className="symbol symbol-circle symbol-30px">
                          <i className="fa fa-log"></i>
                        </div>

                        <div className="text-muted me-2 fs-7 m-2">
                          Action at <span className="text-black">--:--</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )

              // <div className="timeline-item">
              //     <div className="timeline-label text-gray-800 fs-6">
              //         --:--
              //     </div>
              //     <div className="timeline-badge">
              //         <i className="fa fa-genderless text-success fs-1"></i>
              //     </div>
              //     <div className="timeline-content d-flex">
              //         <span className="text-gray-800 ps-3">
              //             No activities!
              //         </span>
              //     </div>
              // </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

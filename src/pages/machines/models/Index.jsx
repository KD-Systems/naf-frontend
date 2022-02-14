import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Confirmation from 'components/utils/Confirmation';
import MachineModelService from "services/MachineModelService";
import CreateMachineModel from "./Create";
import EditMachineModel from "./Edit";

const MachineModels = ({ tab, models, onChange }) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [modelId, setModelId] = useState(null);
  const [machineModels, setMachineModels] = useState([]);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
    setUpdateOpen(false);
  };

  const deleteModel = async () => {
    await MachineModelService.remove(id, modelId);
    onChange();
  };

  useEffect(() => {
    if (models)
      setLoading(false)

    setMachineModels(models)
  }, [models]);


  return (
    <div
      className={`tab-pane fade ${tab == "models" ? "active show" : ""
        }`}
      id="models"
      role="tabpanel"
    >
      <div className="card card-xl-stretch mb-xl-10">
        <div className="card-header align-items-center border-0 mt-4">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder mb-2 text-dark">Models</span>
            <span className="text-muted fw-bold fs-7">
              {/* 890 Models */}
            </span>
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
              Add Model
            </button>
          </div>

        </div>
        <div className="card-body pt-5">
          <div className="table-responsive">
            <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
              <thead>
                <tr className="fw-bolder text-muted">
                  <th className="min-w-120px">Name</th>
                  <th className="min-w-50px">Space</th>
                  <th className="min-w-100px text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td>
                      <i className="fas fa-cog fa-spin"></i>{" "}
                      Loading...
                    </td>
                  </tr>
                ) : null}

                {machineModels?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Link
                        to={"/panel/machines/" + id + '/models/' + item.id}
                        className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td>{item.space}</td>

                    <td className="text-end">
                      <Link
                        to={"/panel/machines/" + id + '/models/' + item.id}
                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>

                      <button onClick={() => { setModelId(item.id); setUpdateOpen(true); }} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                        <i className="fa fa-pen"></i>
                      </button>

                      <button
                        onClick={() => { setModelId(item.id); setConfirmDelete(true) }}
                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
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
          deleteModel(modelId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />

      <CreateMachineModel
        open={open}
        machineId={id}
        onCloseModal={() => onCloseModal()}
        onCreated={() => onChange()}
      />

      <EditMachineModel
        open={updateOpen}
        onCloseModal={() => onCloseModal()}
        onUpdated={() => onChange()}
        machineId={id}
        modelId={modelId}
      />
    </div>
  );
};

export default MachineModels;

import Confirmation from "components/utils/Confirmation";
import Table from "components/utils/Table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PartService from "services/PartService";
import CreateContract from "./Create";
import EditContract from "./Edit";

const Parts = () => {
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [parts, setParts] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [partId, setPartId] = useState(null);

  //Set the columns
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      field: 'name',
    },
    {
      name: 'Designation',
      selector: row => row.designation,
      sortable: true,
      field: 'designation',
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
      field: 'role',
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      field: 'status',
      format: row => (<span
        className={
          row.status === 1
            ? "badge badge-light-success"
            : "badge badge-light-danger"
        }
      >
        {row.status === 1 ? "active" : "inactive"}
      </span>)
    },
    {
      name: 'Action',
      selector: row => row.status,
      format: row => (
        <span className="text-end">
          <Link
            to={"/panel/employees/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
          <button
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            onClick={() => {
              setPartId(row.id);
              setOpenEditModal(true);
            }}
          >
            <i className="fa fa-pen"></i>
          </button>
          <Link
            to="#"
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
            onClick={() => setConfirmDelete(true)}
          >
            <i className="fa fa-trash"></i>
          </Link>
        </span>
      )
    },
  ];

  const getParts = async () => {
    setLoading(true);
    setParts(await PartService.getAll());
    setLoading(false);
  };

  const deletePart = (partId) => {
    PartService.remove(partId);
    getParts();
  };

  const onCloseModal = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
  };

  // useEffect(() => {
  //   getParts();
  // }, []);

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div className="container-xxl">
        <div className="post d-flex flex-column-fluid">
          <div className="container-xxl">
            <Table
              name="Parts"
              buttonName="Add Part"
              onClickButton={setOpenAddModal(true)}
              isLoading={loading} data={parts}
              columns={columns}
              onFilter={() => getParts}
            />
          </div>
        </div>

        <Confirmation
          open={confirmDelete}
          onConfirm={() => {
            setConfirmDelete(false);
            deletePart(partId);
          }}
          onCancel={() => setConfirmDelete(false)}
        />
        <CreateContract
          open={openAddModal}
          onCloseModal={onCloseModal}
          onCreated={getParts}
        />
        <EditContract
          open={openEditModal}
          partId={partId}
          onCloseModal={onCloseModal}
          onUpdated={getParts}
        />
      </div>
    </div>
  );
};

export default Parts;

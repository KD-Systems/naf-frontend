import Confirmation from "components/utils/Confirmation";
import Table from "components/utils/Table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContractService from "services/ContractService";
import CreateContract from "./Create";
import EditContract from "./Edit";

const Contracts = () => {
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [contracts, setContracts] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [contractId, setContractId] = useState(null);

  //Set the columns
  const columns = [
    {
      name: 'Company',
      selector: row => row.company?.name,
      sortable: true,
      field: 'company',
      format: row => (
        <div className="d-flex align-items-center">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light">
              <img
                src={row.company?.logo_url}
                className="h-75 overflow-hidden"
                alt={row.company?.name}
              />
            </span>
          </div>
          <div className="d-flex justify-content-start flex-column">
            <Link
              to={'/panel/companies/' + row.company?.id}
              className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >
              {row.company?.name}
            </Link>
          </div>
        </div>
      )
    },
    {
      name: 'Machines',
      selector: row => row.machines,
      sortable: true,
      field: 'machines',
      format: row => (
        row.machines.map((dt) => (<Link
            to={`/panel/machines/${dt.id}`}
            className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
          >
            {dt.name}
          </Link>))
      )
    },
    {
      name: 'Contract Type',
      selector: row => row.is_foc,
      sortable: true,
      field: 'machines',
      format: (row) => (
        <span
          className={
            row.is_foc
              ? "badge badge-light-warning"
              : "badge badge-light-info"
          }
        >
          {row.is_foc ? "FOC" : "PAID"}
        </span>
      ),
    },
    {
      name: "Contract Status",
      selector: (row) => row.status,
      sortable: true,
      field: "status",
      format: (row) => (
        <span
          className={
            row.status
              ? "badge badge-light-success"
              : "badge badge-light-danger"
          }
        >
          {row.status ? "active" : "inactive"}
        </span>
      ),
    },
    {
      name: 'Action',
      selector: row => row.status,
      format: row => (
        <span className="text-end">
          <Link
            to={"/panel/contracts/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
          <button
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            onClick={() => {
              setContractId(row.id);
              setOpenEditModal(true);
            }}
          >
            <i className="fa fa-pen"></i>
          </button>
          <button
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
            onClick={() => { setContractId(row.id); setConfirmDelete(true) }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </span>
      )
    },
  ];

  const getContracts = async (filters) => {
    setLoading(true);
    setContracts(await ContractService.getAll(filters));
    setLoading(false);
  };

  const deleteContract = async (contractId) => {
    await ContractService.remove(contractId);
    getContracts();
  };

  const onCloseModal = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
  };

  // useEffect(() => {
  //   getContracts();
  // }, []);

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Contracts"
            buttonName="Add Contract"
            onClickButton={() => setOpenAddModal(true)}
            isLoading={loading} data={contracts}
            columns={columns}
            onFilter={getContracts}
          />
        </div>
      </div>

      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteContract(contractId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
      <CreateContract
        open={openAddModal}
        onCloseModal={onCloseModal}
        onCreated={getContracts}
      />
      <EditContract
        open={openEditModal}
        contractId={contractId}
        onCloseModal={onCloseModal}
        onUpdated={getContracts}
      />
    </>
  );
};

export default Contracts;

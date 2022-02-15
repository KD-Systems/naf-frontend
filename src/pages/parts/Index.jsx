import Confirmation from "components/utils/Confirmation";
import Table from "components/utils/Table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PartService from "services/PartService";
import CreateContract from "./Create";
import EditContract from "./Edit";
import ImportFile from "./ImportFile";

const Parts = () => {
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [parts, setParts] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openImportModal, setOpenImportModal] = useState(false);
  const [partId, setPartId] = useState(null);

  //Set the columns
  const columns = [
    {
      name: 'Common Name',
      selector: row => row.name,
      sortable: true,
      field: 'name',
      format: row => (
        <div className="d-flex align-items-center">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light">
              <img
                src={row.image}
                className="h-75 overflow-hidden"
                alt={row.name}
              />
            </span>
          </div>
          <div className="d-flex justify-content-start flex-column">
            <Link
              to={'/panel/parts/' + row.id}
              className="text-dark fw-bolder text-hover-primary"
            >
              {row.name}
            </Link>
          </div>
        </div>
      )
    },
    {
      name: 'Machine',
      selector: row => row.machines?.map((itm) => itm.name)?.join(', '),
      sortable: true,
      field: 'machine',
    },
    {
      name: 'Heading',
      selector: row => row.heading,
      sortable: true,
      field: 'heading',
    },
    {
      name: 'Part Number',
      selector: row => row.part_number,
      sortable: true,
      field: 'part_number',
    },
    {
      name: 'Action',
      selector: row => row.status,
      format: row => (
        <span className="text-end">
          <Link
            to={"/panel/parts/" + row.id}
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

  const getParts = async (filters) => {
    setLoading(true);
    setParts(await PartService.getAll(filters));
    setLoading(false);
  };

  const deletePart = (partId) => {
    PartService.remove(partId);
    getParts();
  };

  const onCloseModal = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
    setOpenImportModal(false);
  };

  // useEffect(() => {
  //   getParts();
  // }, []);

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Parts"
            buttonName="Add Part"
            onClickButton={() => setOpenAddModal(true)}
            callbackButtons={[
              {
                name: 'Import',
                callback: () => {setOpenImportModal(true);console.log("hello");}
              }
            ]}
            isLoading={loading} data={parts}
            columns={columns}
            onFilter={getParts}
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
      <ImportFile
        open={openImportModal}
        onCloseModal={onCloseModal}
        onImported={getParts}
      />
    </>
  );
};

export default Parts;

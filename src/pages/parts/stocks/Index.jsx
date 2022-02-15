import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Confirmation from 'components/utils/Confirmation';
import AddPartStock from './Create';
import EditPartAlias from './Edit';
import PartStockService from 'services/PartStockService';

const PartStocks = ({ tab }) => {
  const [loading, setLoading] = useState(true);
  const [stockId, setStockId] = useState(null);
  const [stocks, setStocks] = useState([]);
  const { id } = useParams()

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
    setUpdateOpen(false);
  };

  const getAliases = async () => {
    setLoading(true)
    setStocks(await PartStockService.getAll(id));
    setLoading(false)
  };

  const deleteStock = async () => {
    await PartStockService.remove(id, stockId);
    getAliases()
  };

  useEffect(() => {
    if (tab == 'stocks')
      getAliases();
    setLoading(false)
  }, [tab]);


  return (
    <div
      className={`tab-pane fade ${tab == "stocks" ? "active show" : ""
        }`}
      id="models"
      role="tabpanel"
    >
      <div className="card card-xl-stretch mb-xl-10">
        <div className="card-header align-items-center border-0 mt-4">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder mb-2 text-dark">Stocks</span>
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
              Add New Stock
            </button>
          </div>

        </div>
        <div className="card-body pt-5">
          <div className="table-responsive">
            <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
              <thead>
                <tr className="fw-bolder text-muted">
                  <th className="min-w-140px">Warehouse</th>
                  <th className="min-w-120px">Part Heading</th>
                  <th className="min-w-100px">Unit</th>
                  <th className="min-w-120px">Unit Value</th>
                  <th className="min-w-120px">Yen Price</th>
                  <th className="min-w-120px">Selling Price</th>
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

                {!loading && stocks?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Link
                        to={"/panel/warehouses/" + item?.warehouse?.id}
                        className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                      >
                        {item.warehouse.name}
                      </Link>
                    </td>

                    <td>
                      <Link
                        to={"/panel/machines/" + item.part_heading?.machine_id + "/part-headings/" + item.part_heading?.id}
                        className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                      >
                        {item.part_heading?.name}
                      </Link>
                    </td>

                    <td>
                      {item.unit}
                    </td>

                    <td>
                      {item.unit_value}
                    </td>

                    <td>
                      {item.yen_price}
                    </td>

                    <td>
                      {item.selling_price}
                    </td>

                    <td className="text-end">
                      <button onClick={() => { setStockId(item.id); setUpdateOpen(true); }} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                        <i className="fa fa-pen"></i>
                      </button>

                      <button
                        onClick={() => { setStockId(item.id); setConfirmDelete(true) }}
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
          deleteStock();
        }}
        onCancel={() => setConfirmDelete(false)}
      />

      <AddPartStock
        open={open}
        onCloseModal={() => onCloseModal()}
        onCreated={() => getAliases()}
      />

      <EditPartAlias
        open={updateOpen}
        onCloseModal={() => onCloseModal()}
        onUpdated={() => getAliases()}
        id={id}
        stockId={stockId}
      />
    </div>
  );
};

export default PartStocks;

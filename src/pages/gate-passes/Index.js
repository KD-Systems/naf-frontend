import React,{useState} from 'react'
import {Link} from "react-router-dom"
const GatePass = () => {
    const [filter, setFilter] = useState({});
    const filterData = (e) => {
        let query = e.target.value;
        setFilter({
          ...filter,
          q: query,
        });
      };
    const [searchData, setSearchData] = useState({});
  return (
     <div className="post d-flex flex-column-fluid" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-19">
                <div className="row">

                </div>
                <div className="col-sm-12 mt-5">
                  <div className="text-sm-center">
                    <h1 className="text-uppercase">Gate Pass</h1>
                  </div>
                </div>
              </div>

              <div className="">
              

                <div className="mt-5">
                  <h6>
                    <strong>DeliveryNotes: </strong>
                    <span className="text-muted">
         
                    </span>
                  </h6>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mt-2">
                    <label htmlFor=""></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      name="search"
                      value={filter.q || ""}
                      onChange={filterData}
                    //   onKeyUp={search}
                    />
                    <div>
                      {/* {searchData.length > 0 ? (
                        <div className="card border border-secondary ">
                          <div className="card-body ">
                            {searchData?.map((item, index) => (
                              <>
                                <div key={index}>
                                  <Link
                                    to={item?.id}
                                    style={{ color: "black" }}
                                    onClick={() => addPart(item)}
                                  >
                                    <p>
                                      {item?.name}
                                      <span>({item.part_number})</span>
                                    </p>
                                  </Link>
                                </div>
                                <hr />
                              </>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )} */}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <div className="table-responsive ">
                      <table className="table">
                        <thead>
                          <tr className="fs-6 fw-bolder text-dark text-uppercase">
                            <th className="min-w-25px pb-9">SL.No</th>
                            <th className="min-w-70px pb-9 text-end">
                              Parts Name
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Parts Number
                            </th>

                            <th className="min-w-100px pe-lg-6 pb-9 text-end">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {list?.map((item, index) => (
                            <tr
                              className="fw-bolder text-gray-700 fs-5 text-end"
                              key={index}
                            >
                              <td className="d-flex align-items-center pb-10">
                                {index + 1}
                              </td>
                              <td>{item?.name}</td>
                              <td>{item?.part_number}</td>
                              <td className="product-quantity">
                                <div className="input-group input-group-sm">
                                  <div className="input-group-prepend">
                                    <span
                                      className="input-group-text"
                                      id="inputGroup-sizing-sm"
                                    //   onClick={() => {
                                    //     if (item?.quantity > 0) {
                                    //       decrement(item);
                                    //     }
                                    //   }}
                                    >
                                      <i className="fas fa-minus"></i>
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    min="1"
                                    value={item?.quantity ?? ""}
                                    defaultValue={item?.quantity ?? ""}
                                    name="quantity"
                                  />

                                  <div className="input-group-prepend">
                                    <span
                                      className="input-group-text"
                                    //   onClick={() => increment(item)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </div>
                                </div>
                                {item?.invoice_exists ? (
                                  <span className="badge badge-success"></span>
                                ) : (
                                  <span className="badge badge-danger">
                                    not In Invoice
                                  </span>
                                )}
                               {
                                 item?.invoice_exists?item?.quantity_match?"":<span className='badge badge-info'>Quantity is not matched</span>:""
                               }
                               
                              </td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-icon btn-danger"
                                  data-kt-element="remove-item"
                                //   onClick={() => removeItem(item?.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))} */}
                        </tbody>
                      </table>
                      <div className="separator separator-dashed"></div>

                      <button
                        className="btn btn-dark mt-5"
                        // onClick={() => {
                        //   navigate(-1);
                        // }}
                      >
                        Cancel
                      </button>

                      <button
                        className="btn btn-primary mt-5"
                        // onClick={() => {
                        //   storeDeliveryNote();
                        // }}
                        style={{ marginLeft: "0.9rem" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GatePass
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import RequisitionService from "../../services/RequisitionService";
const CreateQuotation = () => {
  let { requisitionId } = useParams();
  const navigate = useNavigate();
  const [requisition, setRequisition] = useState({});
  const [list, setList] = useState([]); /* for adding part in quotation */

  const [data,setData]=useState({
      selling_price:0,
      formula_price:0,
      yen_price:0,
  });

  

  const getRequisition = async () => {
    let res = await RequisitionService.get(requisitionId);
    setRequisition(res);
  };

  const handleChange = (e) => {
    const { name } = e.target
    setData({ ...data, [name]: e.target.value });
    list[0].part['selling_price'] = data?.selling_price
    // console.log(list[0].part['selling_price'])
    
  }
console.log(list);

  const increment = (item) => {
    const tempList = requisition.part_items;
    const tempItem = tempList?.filter((val) => val?.id === item?.id);
    ++tempItem[0].quantity;
    setList(tempItem);
  };

  const decrement = (item) => {
    const tempList = requisition.part_items;
    const tempItem = tempList.filter((val) => val.id === item.id);
    --tempItem[0].quantity;
    setList(tempItem);
  };


  useEffect(() => {
    if (requisitionId) getRequisition();
  }, [requisitionId]);

  useEffect(() => {
    setList(requisition?.part_items);
  }, [requisitionId, requisition]);

  return (
    <div className="post d-flex flex-column-fluid" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-19">
                <div className="row">
                  <div className="col-sm-3">
                    <Link to="#">
                      <img
                        alt="Logo"
                        src="/assets/media/logos/naf3.jpeg"
                        style={{ width: "5rem" }}
                      />
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="text-sm-center fw-bold fs-4 text-muted "
                      style={{ textAlign: "center", marginLeft: "2rem" }}
                    >
                      <h1>Naf Overseas(PVT.) Ltd.</h1>
                      <p className="text-sm">
                        <small>Head Office:Naya paltan,Dhaka,Bangladesh</small>
                        <br />
                        <small>
                          Tel:44564,Fax:sddsf,Email:asd@gmail.com,Web:example.com
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-3 text-sm-end">
                    <Link to="#">
                      <img
                        alt="Logo"
                        src="/assets/media/logos/tajima.png"
                        style={{ width: "5rem", marginLeft: "2rem" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-12 mt-5">
                  <div className="text-sm-center">
                    <h1 className="text-uppercase">Quotation</h1>
                  </div>
                </div>
              </div>

              <div className="">
                <table width="100%">
                  <tr>
                    <td>
                      <h6>
                        <strong>Company Name:</strong>
                        <span className="text-muted">
                          {requisition?.company?.name}
                        </span>
                      </h6>

                      <h6>
                        <strong>Group of Company: </strong>
                        <span className="text-muted">
                          {requisition?.company?.company_group}
                        </span>
                      </h6>
                    </td>
                    <td style={{ marginLeft: "120px" }} width="30%"></td>

                    <td style={{ marginLeft: "120px" }}>
                      <h6>
                        <strong>Date: </strong>
                        <span className="text-muted">
                          <Moment format="D MMMM YYYY">
                            {requisition?.created_at}
                          </Moment>
                        </span>
                      </h6>
                      <h6>
                        <strong>Engineer Name: </strong>
                        <span className="text-muted">
                          {requisition?.engineer?.name}
                        </span>
                      </h6>
                      <h6>
                        <strong>Email: </strong>
                        <span className="text-muted">
                          {requisition?.engineer?.email}
                        </span>
                      </h6>
                    </td>
                  </tr>
                </table>

                <div className="mt-5">
                  <h6>
                    <strong>Machine Model: </strong>
                    <span className="text-muted">
                      {requisition?.machines?.map((item, index) => (
                        <span key={index}>{item?.machine_model?.name}</span>
                      ))}
                    </span>
                  </h6>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <div className="table-responsive ">
                      <table className="table">
                        <thead>
                          <tr className="fs-6 fw-bolder text-dark text-uppercase">
                            <th className="min-w-75px pb-9">SL.No</th>
                            <th className="min-w-70px pb-9 text-end">
                              Parts Name
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Parts Number
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Yen Price
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Formula Price
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Selling Price
                            </th>
                            <th className="min-w-100px pe-lg-6 pb-9 text-end">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list?.map((item, index) => (
                            <tr
                              className="fw-bolder text-gray-700 fs-5 text-end"
                              key={index}
                            >
                              <td className="d-flex align-items-center pb-10">
                                {index + 1}
                              </td>
                              <td>{item?.part?.aliases[0].name}</td>
                              <td>{item?.part?.aliases[0].part_number}</td>
                              {/* <td>{item?.part?.yen_price} Tk.</td> */}
                              {/* <td>{item?.part?.formula_price}TK.</td> */}
                              {/* <td>{item?.part?.selling_price}TK.</td> */}
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  aria-label="Small"
                                  aria-describedby="inputGroup-sizing-sm"
                                  name="yen_price"
                                  placeholder="0TK"
                                  value={data?.yen_price}
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  aria-label="Small"
                                  aria-describedby="inputGroup-sizing-sm"
                                  name="formula_price"
                                  placeholder="0TK"
                                  value={data?.formula_price}
                                  onChange={handleChange}
                                />
                              </td>

                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  aria-label="Small"
                                  aria-describedby="inputGroup-sizing-sm"
                                  name="selling_price"
                                  placeholder="0TK"
                                  value={data?.selling_price}
                                  onChange={handleChange}
                                />
                              </td>

                              <td className="product-quantity">
                                <div className="input-group input-group-sm">
                                  <div className="input-group-prepend">
                                    <span
                                      className="input-group-text"
                                      id="inputGroup-sizing-sm"
                                      onClick={() => {
                                        if (item?.quantity > 0) {
                                          decrement(item);
                                        }
                                      }}
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
                                    defaultValue={item?.quantity}
                                    name="quantity"
                                  />

                                  <div className="input-group-prepend">
                                    <span
                                      className="input-group-text"
                                      onClick={() => increment(item)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="separator separator-dashed"></div>
                      <button className="btn btn-primary mt-5">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuotation;

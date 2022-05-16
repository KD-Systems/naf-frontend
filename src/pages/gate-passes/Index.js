import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PartService from "services/PartService";
import GatePassService from "services/GatePassService";
const GatePass = () => {
  const [bgcolor, setBgcolor] = useState("bg-danger");
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({});
  const [searchData, setSearchData] = useState({});

  const [partFilter, setPartFilter] = useState({});
  const [partSearchData, setPartSearchData] = useState({});
  const [selectedPart, setSelectedPart] = useState({});
  const classNamevalue = "fw-bolder text-gray-700 fs-5 text-end";
  const [color, setColor] = useState([]);

  const filterData = (e) => {
    let query = e.target.value;
    setFilter({
      ...filter,
      q: query,
    });
  };

  const getDeliveryParts = async () => {
    let res = await GatePassService.getAll(filter);
    setSearchData(res.data);
    setLoading(true);
    // let items = res.data?.map((dt) => {
    //   return { label: dt.dn_number };
    // });
    // setParts(items);
  };

  const DeliveryNoteSearch = async (e) => {
    e.keyCode === 13 && (await getDeliveryParts());
    if (filter?.q === "") setSearchData([]);
  };

  const PartfilterData = (e) => {
    let query = e.target.value;
    setPartFilter({
      ...partFilter,
      q: query,
    });
  };

  const getParts = async () => {
    let res = await PartService.getAll(partFilter);
    // console.log(res.data);
    let part = res.data.length ? res.data[0] : {};  //taking part in variable
    // setPartSearchData(res.data);
    let item = searchData?.part_items?.find(
      (dt) => dt?.part?.unique_id == part?.unique_id
    ); // finding specific part in delivery note part
    let index = searchData?.part_items?.findIndex(
      (dt) => dt?.part?.unique_id == part?.unique_id
    ); // taking index of part

    //console.log(selectedPart);
    setColor({ ...color, [index]: "bg-success" });

    // if (item) setSelectedPart(item.part);
    if (item) setSelectedPart(res.data);

    if (!item) alert("Not found in the delivery note");
  };
  // console.log(parts);

  const partSearch = async (e) => {
    e.keyCode === 13 && (await getParts());
    if (filter?.q === "") setSelectedPart([]);
  };

  // const addPart = (item) => {
  //   var carry = [...color];
  //   console.log(carry);
  //   var test = true;
  //   searchData.part_items.forEach((element, index) => {
  //     if (element.part_id == item.id) {
  //       carry[index] = "bg-success";
  //       test = false; //Check whether the item is present or not
  //     }
  //   });
  //   if (test) {
  //     alert("Not Found");
  //   }
  //   setColor(carry);
  // };

  useEffect(() => {}, []);

  return (
    <div className="post d-flex flex-column-fluid" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-19">
                {loading && (
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
                          <small>
                            Head Office:Naya paltan,Dhaka,Bangladesh
                          </small>
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
                )}

                <div className="col-sm-12 mt-5">
                  <div className="text-sm-center">
                    <h1 className="text-uppercase">Gate Pass</h1>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="mt-5">
                  <h6>
                    <strong>
                      Delivery Note: <h2>{searchData?.dn_number}</h2>{" "}
                    </strong>
                    <span className="text-muted"></span>
                  </h6>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mt-2">
                    <label htmlFor=""></label>
                    {loading === false && (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        name="search"
                        value={filter.q || ""}
                        onChange={filterData}
                        onKeyUp={DeliveryNoteSearch}
                      />
                    )}

                    {/* <div>
                      {searchData.length > 0 ? (
                        <div className="card border border-secondary ">
                          <div className="card-body ">
                            {searchData?.map((item, index) => (
                              <>
                                <div key={index}>
                                  <Link
                                    to={item?.id}
                                    style={{ color: "black" }}
                                    // onClick={() => addPart(item)}
                                  >
                                    <p>
                                      {item?.dn_number}
                                      <span>({item.dn_number})</span>
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
                      )}
                    </div> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <div className="table-responsive ">
                      {loading && (
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <label htmlFor=""></label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                name="PartSearch"
                                value={partFilter.q || ""}
                                onChange={PartfilterData}
                                onKeyUp={partSearch}
                              />
                              <div>
                                {selectedPart.length > 0 ? (
                                  <div className="card border border-secondary ">
                                    <div className="card-body ">
                                      {selectedPart?.map((item, index) => (
                                        <>
                                          <div key={index}>
                                            <Link
                                              to={item?.id}
                                              style={{ color: "black" }}
                                              // onClick={() => addPart(item)}
                                            >
                                              <p>
                                                
                                                <span>
                                                  <img
                                                    src={item.image}
                                                    style={{
                                                      height: "150px",
                                                      width: "150px",
                                                    }}
                                                  />
                                                </span>
                                                <span>
                                                  ({item.part_number})
                                                </span>
                                                <span>({item.name})</span>
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
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <table className="table">
                              <thead>
                                <tr className="fs-6 fw-bolder text-dark text-uppercase">
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
                                {searchData?.part_items?.map((item, index) => (
                                  <tr
                                    className={
                                      classNamevalue + " " + color[index]
                                    }
                                    key={index}
                                  >
                                    <td>{item?.part?.aliases[0].name}</td>
                                    <td>
                                      {item?.part?.aliases[0].part_number}
                                    </td>
                                    <td>{item?.quantity}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      <div className="separator separator-dashed"></div>
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

export default GatePass;

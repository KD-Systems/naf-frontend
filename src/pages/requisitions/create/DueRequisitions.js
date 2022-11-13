import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "services/CompanyService";
import RequisitionService from "services/RequisitionService";

const DueRequisition = () => {
    const navigate = useNavigate();
  const [data, setData] = useState({
    is_due: true,
  });

  console.log("Afnan data", data);

  const updateCompany = async () => {

      await RequisitionService.create({...data, amount: parseInt(data?.amount)});
      navigate("/panel/invoices");

  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    let dt = await CompanyService.getAll({
      rows: "all",
    });

    dt = dt.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setCompanies(dt);
  };

  const handleSelect = (option, conf) => {
    let value = option.value;
    if (Array.isArray(option))
      value = option.map((dt) => {
        return dt.value;
      });

    const name = conf.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
              <div className="card mb-5">
                <div className="card-body p-12">
                  <form action="" id="kt_invoice_form">
                    <div className="d-flex flex-column align-items-start flex-xxl-row">
                      <div className="d-flex align-items-center flex-equal fw-row me-4 order-2"></div>

                      <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                        <span className="fs-2x fw-bolder text-gray-800">
                          Company Due
                        </span>
                      </div>

                      <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row">
                        <span className="fs-5">
                          Date: {moment().format("DD-MM-YYYY")}
                        </span>
                      </div>
                    </div>

                    <div className="separator separator-dashed my-10"></div>

                    <div className="row gx-10 mb-5">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="required form-label">Company</label>
                          <Select
                            options={companies}
                            onChange={handleSelect}
                            name="company_id"
                          />

                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="company_id"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label htmlFor="type" className="required form-label">
                          Amount
                        </label>
                        <div className="mb-5">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="amount"
                              placeholder="Amount"
                              onChange={handleChange}
                            />
                          </div>
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="type"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label htmlFor="type" className="form-label">
                          Remarks
                        </label>
                        <div className="mb-5">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="remarks"
                              placeholder="Remarks"
                              onChange={handleChange}
                            />
                          </div>
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="type"
                          ></div>
                        </div>
                      </div>
                    </div>                    
                  </form>
                  <div className="d-flex flex-column align-items-start flex-xxl-row">
                      <div className="d-flex align-items-center flex-equal fw-row me-4 order-2"></div>

                      <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                        <div className="mt-5">
                          <button
                            onClick={() => {
                              updateCompany();
                            }}
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DueRequisition;

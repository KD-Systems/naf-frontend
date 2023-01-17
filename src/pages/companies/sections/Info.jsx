import PermissionAbility from "helpers/PermissionAbility";
import ReactImageMagnify from 'react-image-magnify';
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import AdvanceService from "services/AdvanceService";
import CompanyService from "services/CompanyService";
import UpdateTradeLimit from "./UpdateTradeLimit";

const CompanyInfo = ({setZoomImage}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [companyId, setcompanyId] = useState(null);
  const [advance, setAdvance] = useState(0);
  const [updateDueAMountModal, setUpdateDueAMountModal] = useState(false);
  const [company, setCompanies] = useState([]);
  const onCloseModal = () => {
    setUpdateDueAMountModal(false);
  };

  const getCompanies = async () => {
    setCompanies(await CompanyService.get(id));
    const res = await AdvanceService.getAll({id:id});
    var total = 0;
    res.forEach((element) => {
      total = element.transaction_type
        ? parseInt(total) + parseInt(element.amount)
        : parseInt(total) - parseInt(element.amount);
    });
    setAdvance(total);
  };

  useEffect(() => {
    if (!updateDueAMountModal) getCompanies();
  }, [updateDueAMountModal]);

  return (
    <>
      <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px">
        <div className="card card-custom">
          <div className="card-header h-auto py-4 mb-2">
            <div className="card-title">
              <h3 className="card-label">
                <button
                  className="btn btn-sm btn-dark "
                  style={{ marginRight: "0.75rem" }}
                  onClick={() => navigate(-1)}
                >
                  <i className="fa fa-arrow-left"></i>Back
                </button>
                Company Details
              </h3>
            </div>
          </div>

          <div className="card-body pt-0">
            <div className="text-center">
              <div
                className="image-input image-input-empty image-input-outline mb-3"
                data-kt-image-input="true"
              >
                {/* <div className="image-input-wrapper w-150px h-150px" style={{ backgroundImage: "url(" + company.logo + ")", }} ></div> */}
               <div onMouseEnter={()=>setZoomImage(true)} onMouseLeave={()=>setZoomImage(false)}>
               <ReactImageMagnify {...{
                         smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `${company?.logo}`, 
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: `${company?.logo}`,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '100%'
                        }
                    }} />
               {/* <ReactImageMagnify {...{ smallImage: { alt: 'Company Logo', isFluidWidth: true, src: `${company?.logo}`}, largeImage: { src: `${company?.logo}`, width: 1200, height: 1800 } }} /> */}
               </div>
              </div>
              <div className="fs-7">
                <h2>{company.name}</h2>
                <p>{company.company_group ?? "--"}</p>
              </div>
            </div>

            <div className="collapse show text-left">
              <div className="py-5 fs-6">
                <div className="fw-bolder mt-5">Factory Types</div>
                <div className="text-gray-600">{company.machine_types}</div>

                <div className="fw-bolder mt-5">Updated At</div>
                <div className="text-gray-600">
                  <Moment format="DD MMMM YYYY">{company.updated_at}</Moment>
                </div>

                <div className="fw-bolder mt-5">Description</div>
                <div className="text-gray-600">
                  {company.description ?? "--"}
                </div>
                <div className="fw-bolder mt-5">Advance Amount</div>
                <div
                  className={
                    parseInt(advance) < 0 ? "text-danger" : "text-gray"
                  }
                >
                  {Math.floor(advance)}
                </div>
                <div className="fw-bolder mt-5">Due Amount</div>
                <div
                  className={
                    parseInt(company.due_amount) < 0
                      ? "text-danger"
                      : "text-gray"
                  }
                >
                  {Math.floor(company.due_amount)}
                </div>
                <div className="fw-bolder mt-5">Trade Limit</div>
                <div
                  className={
                    parseInt(company.trade_limit) < 0
                      ? "text-danger"
                      : "text-gray"
                  }
                >
                  {company.trade_limit}
                </div>

                <div className="card-title mt-10 justify-content-center">
                  <h3 className="card-label mr-10">
                    <PermissionAbility permission="companies_edit">
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() => {
                          setcompanyId(id);
                          setUpdateDueAMountModal(true);
                        }}
                      >
                        <i className="fa fa-pen"></i> Update Trade Limit
                      </button>
                    </PermissionAbility>
                  </h3>
                </div>

                {/* <div className="fw-bolder mt-5">Trade Limit</div>
              <input
                className="col-form-label col-sm-7 rounded"
                type="text"
                value={form.trade_limit ?? company.trade_limit}
                onChange={handleSettingState}
                name="trade_limit"
              />
              <input
                className="btn btn-primary mx-2"
                type="button"
                value="Update"
                onClick={handleUpdate}
              />
              <div className="fw-bolder mt-5">Pay Amount</div>
              <input
                className="col-form-label col-sm-7 rounded"
                type="number"
                value={form.due_amount}
                onChange={handleSettingState} 
                name="due_amount"
              />

              <input
                className="btn btn-primary mx-2"
                type="button"
                value="Submit"
                onClick={handleUpdate}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateTradeLimit
        open={updateDueAMountModal}
        companyId={companyId}
        onCloseModal={onCloseModal}
        onUpdated={getCompanies}
      />
    </>
  );
};

export default CompanyInfo;

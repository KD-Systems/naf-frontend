import React from 'react'
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

const CompanyInfo = ({company}) => {
	const navigate = useNavigate();

    return (
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
                            <div
                                className="image-input-wrapper w-150px h-150px"
                                style={{
                                    backgroundImage:
                                        "url(" + company.logo + ")",
                                }}
                            ></div>
                        </div>
                        <div className="fs-7">
                            <h2>{company.name}</h2>
                            <p>{company.company_group ?? '--'}</p>
                        </div>
                    </div>

                    <div className="collapse show text-left">
                        <div className="py-5 fs-6">
                            <div className="fw-bolder mt-5">Factory Types</div>
                            <div className="text-gray-600">{company.machine_types}</div>

                            <div className="fw-bolder mt-5">Updated At</div>
                            <div className="text-gray-600">
                                <Moment format="DD MMMM YYYY">
                                    {company.updated_at}
                                </Moment>
                            </div>

                            <div className="fw-bolder mt-5">Description</div>
                            <div className="text-gray-600">
                                {company.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo

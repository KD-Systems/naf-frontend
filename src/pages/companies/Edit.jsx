import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import CompanyService from "../../services/CompanyService";

const EditCompany = (props) => {
    const [company, setCompany] = useState("");
    const [data, setData] = useState({ name: "", description: "" });
    const [open, setOpen] = useState(false);
    const onCloseModal = () => { setOpen(false); props.onClose() }

    const getCompany = async () => {
        setCompany(await CompanyService.get(props.companyId));
    };

    const updateCompany = async () => {
        await CompanyService.update(props.companyId, data);
    };

    // change data
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        let tempdata = { ...data };
        tempdata[name] = value;

        setData(tempdata);
    };
    //update designation
    const onSubmit = () => {
        updateCompany();
    };

    useEffect(() => {
        if (props.companyId) {
            getCompany();
        }
    }, [props.companyId]);

    useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    useEffect(() => {
        let tempdata = { ...data };
        tempdata.name = company.name;
        tempdata.description = company.description;
        setData(tempdata);
    }, [company]);

    return (
        <div>
            <Modal
                open={open}
                onCloseModal={onCloseModal}
                title={<>Edit Designation</>}
                body={
                    <>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Designation Name"
                                    name="name"
                                    id="name"
                                    value={data.name ?? ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group mt-5">
                                <textarea
                                    rows="3"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Designation Description"
                                    name="description"
                                    id="description"
                                    value={data.description ?? ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="reset"
                                className="btn btn-primary mr-2 mt-5"
                                style={{ marginRight: "1rem" }}
                                onClick={onSubmit}
                            >
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="btn btn-secondary  mt-5 "
                                onClick={onCloseModal}
                            >
                                Cancel
                            </button>
                        </form>
                    </>
                }
            />
        </div>
    )
}

export default EditCompany

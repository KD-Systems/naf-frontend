import React,{useState,useEffect} from "react";
import Modal from "../../components/utils/Modal";
import DesignationService from "../../services/DesignationService";
const CreateDesignation = ({ open, onCloseModal,getDesignations }) => {

    

    const createDesignation =async(data)=>{
        await DesignationService.create(data);
        getDesignations();
      }

    const [data,setData]=useState({
        name:"", designation:""
    })


    const handleChange=(e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setData({
            ...data,[name]:value
        })
    }



    const onSumbit = (e)=>{
        e.preventDefault();
        createDesignation(data);
       
        onCloseModal();
       
    }




  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Create Designation</>}
        body={
          <>
            <form>
              <div className="form-group">
              <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
              <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Description"
                  name="description"
                  id="description"
                  onChange={handleChange}
                />
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSumbit}
              >
                Create
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
  );
};

export default CreateDesignation;

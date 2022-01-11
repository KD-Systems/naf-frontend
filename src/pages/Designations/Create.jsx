import React from 'react'
import Modal from "../../components/utils/Modal";
const Create = ({open,onCloseModal,onOpenModal}) => {
   
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
                  
                />

               
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                
              >
                Update
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

export default Create

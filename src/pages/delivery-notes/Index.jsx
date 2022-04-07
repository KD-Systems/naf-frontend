import React,{useState} from 'react'
import Table from "components/utils/Table";
import { Link,useNavigate } from "react-router-dom";
import DeliverNoteService from 'services/DeliverNoteService';
const DeliveryNotes = () => {
    const [loading, setLoading] = useState(false);
    const [block, setBlock] = useState(false);
    const [deliveryNotes, setDeliveryNotes] = useState([]);
    const getDeliverNotes = async (filters) => {
        setLoading(true);
        setDeliveryNotes(await DeliverNoteService.getAll(filters));
        setLoading(false);
      };

      const columns = [
        {
          name: "Id",
          selector: (row) => row?.dn_number,
          sortable: true,
          field: "id",
        },
          {
            name: "Company",
            selector: (row) => row?.invoice?.company?.name,
            sortable: true,
            field: "name",
            format: (row) => (
              <div className="d-flex align-items-center">
               
                <div className="d-flex justify-content-start flex-column">
                  <div
                 
                    className="text-dark fw-bolder text-hover-primary"
                  >
                    {row?.invoice?.company?.name}
                  </div>
                </div>
              </div>
            ),
          },
          {
            name: "Invoice Number",
            selector: (row) => row?.invoice?.invoice_number,
            format: (row) => (
              <div className='mt-2'>
              {row?.invoice?.invoice_number}
              </div>
            ),
            sortable: true,
            field: "expected_delivery",
          },
 
         
          {
            name: "Action",
            selector: (row) => row.status,
            format: (row) => (
              <>
              <span className="text-end">
                <Link
                  to={"/panel/invoices/" + row.id+"/print"}
                  className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <i className="fa fa-eye"></i>
                </Link>
           
              </span>
        
              </>
              
            ),
          },
        ];


  return (
      <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Quotations"
          isLoading={loading}
          data={deliveryNotes}
          columns={columns}
          onFilter={getDeliverNotes}
        />
      </div>
    </div>
  )
}

export default DeliveryNotes
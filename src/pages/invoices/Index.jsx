import React,{useState} from 'react'
import Table from "components/utils/Table";
import { Link,useNavigate } from "react-router-dom";
import InvoiceService from 'services/InvoiceService';

const Invoices = () => {
    const [loading, setLoading] = useState(false);
    const [invoices, setInvoices] = useState([]);

    const columns = [
      {
        name: "Id",
        selector: (row) => row?.id,
        sortable: true,
        field: "id",
      },
        {
          name: "Company",
          selector: (row) => row?.company?.name,
          sortable: true,
          field: "name",
          format: (row) => (
            <div className="d-flex align-items-center">
             
              <div className="d-flex justify-content-start flex-column">
                <Link
                  to={"/panel/companies/" + row?.company?.id}
                  className="text-dark fw-bolder text-hover-primary"
                >
                  {row?.company?.name}
                </Link>
              </div>
            </div>
          ),
        },
        {
          name: "Part Quantity",
          selector: (row) => row?.part_items?.map((item)=>item?.quantity),
          format: (row) => (
            <div className='mt-2'>
              {row?.part_items?.map((item)=> (<p>{item?.quantity}</p>))}
            </div>
          ),
          sortable: true,
          field: "expected_delivery",
        },
        {
          name: "Total",
          selector: (row) => row?.part_items?.map((item)=>item?.total_value),
          format: (row) => (
            <div className='mt-2'>
              {row?.part_items?.map((item)=> (<p>{item?.total_value} Tk.</p>))}
            </div>
          ),
          sortable: true,
          field: "role",
        },
       
        {
          name: "Action",
          selector: (row) => row.status,
          format: (row) => (
            <span className="text-end">
              <Link
                to={"/panel/invoices/" + row.id+"/print"}
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              >
                <i className="fa fa-eye"></i>
              </Link>
         
            </span>
          ),
        },
      ];
    

    const getInvoices = async (filters) => {
        setLoading(true);
        setInvoices(await InvoiceService.getAll(filters));
        setLoading(false);
      };

    let navigate = useNavigate()
  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Quotations"
          isLoading={loading}
          data={invoices}
          columns={columns}
          onFilter={getInvoices}
        />
      </div>
    </div>
  )
}

export default Invoices
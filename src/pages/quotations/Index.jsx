import React,{useState} from 'react'
import Table from "components/utils/Table";
import { Link,useNavigate } from "react-router-dom";
import QuotationService from 'services/QuotationService';
const Quotations = () => {
  const [loading, setLoading] = useState(false);
  const [quotations, setQuotations] = useState([]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.id,
      sortable: true,
      field: "id",
    },
    {
      name: "PQ Number",
      selector: (row) => row?.pq_number,
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
            to={"/panel/quotations/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
     
        </span>
      ),
    },
  ];

  const getQuotations = async (filters) => {
    setLoading(true);
    setQuotations(await QuotationService.getAll(filters));
    setLoading(false);
  };
  let navigate = useNavigate()

  const routeChange = ()=>{
      let path = `create`;
      navigate(path)
  }
  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Quotations"
          isLoading={loading}
          data={quotations}
          columns={columns}
          onFilter={getQuotations}
        />
      </div>
    </div>
  )
}

export default Quotations
import React,{useState} from 'react'
import Table from "components/utils/Table";
import { Link,useNavigate } from "react-router-dom";
import QuotationService from 'services/QuotationService';
import CreateModal from "./CreateModal";
import PermissionAbility from "helpers/PermissionAbility";

const Quotations = () => {
  const [loading, setLoading] = useState(false);
  const [quotations, setQuotations] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const columns = [
    {
      name: "Id",
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
      name: "Requisition Type",
      selector: (row) => row?.requisition?.type?.replaceAll("_", " ")?.capitalize(),
      sortable: true,
      field: "id",
    },
    
    {
      name: "Part Quantity",
      selector: (row) => row?.part_items?.reduce((partialSum,a)=>partialSum + a.quantity ,0),
      format: (row) => (
        <div className='mt-2'>
          {row?.part_items?.reduce((partialSum,a)=>partialSum + a.quantity ,0)}
        </div>
      ),
      sortable: true,
      field: "expected_delivery",
    },
    {
      name: "Total",
      selector: (row) => row?.part_items?.reduce((partialSum,a)=>partialSum + a.total_value ,0),
      format: (row) => (
        <div className='mt-2'>
          {row?.requisition?.type != 'claim_report' ? (
            row?.part_items?.reduce((partialSum,a)=>partialSum + parseInt(a.total_value) ,0) 
          ):0} Tk.
         
        </div>
      ),
      sortable: true,
      field: "role",
    },

    {
      name: "Status",
      selector: (row) => row?.locked_at,
      format: (row) => (
        <div className='mt-2'>
          {row?.locked_at ? (
            "Locked"
          ): "on-going"}
         
        </div>
      ),
      sortable: true,
      field: "id",
    },

    {
      name: "IN Number",
      selector: (row) => row?.invoice?.invoice_number,
      sortable: true,
      field: "id",
    },
   
    {
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <span className="text-end">
          <PermissionAbility permission="quotations_show">
          <Link
            to={"/panel/quotations/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
          </PermissionAbility>     
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
    <>
    
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Quotations"
          buttonName="Add Quotation"
          onClickButton={onOpenModal}
          isLoading={loading}
          data={quotations}
          columns={columns}
          onFilter={getQuotations}
          buttonPermission="quotations_create"
        />
      </div>
    </div>
    
    

    <CreateModal
        open={open}
        onCloseModal={onCloseModal}
        getQuotations = {getQuotations}
      />
</>
    
  )
}

export default Quotations
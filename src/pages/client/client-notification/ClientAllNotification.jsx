import Table from "components/utils/Table";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClientInvoiceService from "services/clientServices/ClientInvoiceService";
import NotificationService from "services/NotificationService";
// import CreateInvoice from "./Create";
const ClientAllNotification = () => {
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState([]);
  const [block, setBlock] = useState(false);
  const [totalQuantity,setTotalQuantity] = useState(0)
  console.log("shanto",notification)

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getNotification = async () => {
    const res = await NotificationService.allNotifications();
    setNotification(res);
  };

  useEffect(() => {
    getNotification();
  }, []);



  const columns = [
    {
      name: "Notification",
      selector: (row) => row?.id,
      sortable: true,
      field: "id",
    },

    {
      name: "Notification Type",
      selector: (row) => row?.id,
      sortable: true,
      field: "id",
    },
    
    

    // {
    //   name: "DN number",
    //   selector: (row) => row?.deliveryNote?.dn_number,
    //   sortable: true,
    //   field: "role",
    //   format: (row) => (
    //     <div className='mt-2'>
    //       {row?.deliveryNote?.dn_number ? (
    //         row?.deliveryNote?.dn_number
    //       ): "No delivery note yet"}
         
    //     </div>
    //   ),
    // },

    // {
    //   name: "Action",
    //   selector: (row) => row.status, 
    //   format: (row) => (
    //     <>
    //     <span className="text-end">
    //     <Link
    //         to={"/panel/client/invoices/" + row.id}
    //         className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    //       >
    //         <i className="fa fa-eye"></i>
    //       </Link>
     
    //     </span>
    //       <span className="text-end">
    //       <Link
    //           to={"/panel/client/invoices/" + row.id + "/print"}
    //           className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    //           target="_blank"
    //         >
    //           <i className="fa fa-print"></i>
    //         </Link>
            
    //       </span>
    //       {/* <span className="text-end">
    //       <div
    //           // onClick={() => {
    //           //   storeDeliveryNotes(row);
    //           // }}

    //           onClick={() => navigate(`/panel/client/delivery-notes/${row?.id}/create`)}
    //           className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    //           data-toggle="tooltip"
    //           title="Add Delivery Note"
    //         >
    //           <i className="fa fa-plus"></i>
    //         </div>
           
    //       </span> */}
    //     </>
    //   ),
    // },
  ];


  let navigate = useNavigate();
  return (
    <>
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Notification"
          // buttonName="Add Invoice"
        //   onClickButton={onOpenModal}
          // isLoading={loading}
          data={notification}
          columns={columns}
          // onFilter={getInvoices}
          // buttonPermission="invoices_create"
        />
      </div>
    </div>
    </>
  );
};

export default ClientAllNotification;

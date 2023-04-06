import Table from "components/utils/Table";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotificationService from "services/NotificationService";
// import CreateInvoice from "./Create";
const ClientAllNotification = () => {
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState([]);
  const [block, setBlock] = useState(false);
  console.log("shanto", notification);

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
  ];

  let navigate = useNavigate();
  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Notification"
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

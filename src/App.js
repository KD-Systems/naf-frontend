import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import AppLayout from "pages/layouts/AppLayout";
import Login from "pages/auth/Login";
import Profile from "pages/auth/Profile";
import AccountSettings from "pages/auth/AccountSettings";
import Employee from "pages/employee/Index";
import Designations from "pages/designations/Index";
import Companies from "pages/companies/Index";
import ShowCompany from "pages/companies/Show";
import ShowDesignation from "pages/designations/Show";
import ShowEmployee from "pages/employee/Show";
import ShowUser from "pages/companies/users/Show";
import Contracts from "pages/contracts/Index";
import Machines from "pages/machines/Index";
import ShowContract from "pages/contracts/Show";
import WareHouse from "pages/warehouses/Index";
import ShowMachine from "pages/machines/Show";
import ShowMachineModel from "pages/machines/models/Show";
import Parts from "pages/parts/Index";
import ShowPart from "pages/parts/Show";
import ShowPartHeadings from "pages/machines/headings/Show";
import Roles from "pages/roles/Index";
import ShowPartAlias from "pages/parts/aliases/Show";
import WareHouseShow from "pages/warehouses/Show";
import ShowPermission from "pages/roles/Show";
import PermissionAbility from "helpers/PermissionAbility";
import { PrivateRoute } from "helpers/PrivateRoute";
import Settings from "pages/Settings/Index";
import ShowStock from "pages/parts/stocks/Show";
import CompanyUserMachines from "pages/companyUser/Machines";
import CompanyUserContracts from "pages/companyUser/Contracts";
import Machine from "pages/companyUser/Machine";
import RequisitionCreate from "pages/requisitions/Create";
import BoxHeadings from "pages/box-headings/Index";
import BoxHeadingShow from "pages/box-headings/Show";
import Requisitions from "pages/requisitions/Index";
import ShowRequisition from "pages/requisitions/Show";
import PrintRequisition from "pages/requisitions/Print";
import Quotations from "pages/quotations/Index";
import CreateQuotation from "pages/quotations/Create";
import ShowQuotation from "pages/quotations/Show";
import Invoices from "pages/invoices/Index";
import PrintInvoice from "pages/invoices/Print";
import DeliveryNotes from "pages/delivery-notes/Index";
import ShowDeliveryNotes from "pages/delivery-notes/Show";
import PrintDeliveryNotes from "pages/delivery-notes/Print";
import ShowInvoice from "pages/invoices/Show";
import ShowPaymentHistories from "pages/invoices/paymentHistories/Show";
import CreateDeliveryNote from "pages/delivery-notes/Create";
import CreateDelivery from "pages/delivery-notes/CreateDelivery";
import Reports from "pages/reports/Index";
import GatePass from "pages/gate-passes/Index";
import PartStockReport from "pages/reports/PartStockReport";
import ClientRequisitions from "pages/client/requisitions";
import ClientQuotation from "pages/client/quotations/index.jsx";
import ClientInvoices from "pages/client/invoices";
import ClientDeliveryNotes from "pages/client/delivery-notes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/panel/*" element={<AppLayout />}> 
            
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            {/* <Route path="employees" element={<Employee />} /> */}
            {/* Designation start */}
          
            <Route
              path="designations"
              element={
                <PrivateRoute>
                    <PermissionAbility permission="designations_access">
                  <Designations />
                  </PermissionAbility>
                </PrivateRoute>
              }
            />
            <Route
              path="designations/:id"
              element={
                <PrivateRoute>
                  <ShowDesignation />
                </PrivateRoute>
              }
            />
    
            {/* Designation end */}

            {/* Employee Start */}
            <Route
              path="employees"
              element={
                <PrivateRoute>
                  <Employee />
                </PrivateRoute>
              }
            />
            <Route
              path="employees/:id"
              element={
                <PrivateRoute>
                  <ShowEmployee />
                </PrivateRoute>
              }
            />
            {/* Employee End */}
            {/* Role Start */}
            <Route
              path="roles"
              element={
                <PrivateRoute>
                  <Roles />
                </PrivateRoute>
              }
            />

            <Route
              path="roles/:id"
              element={
                <PrivateRoute>
                  <ShowPermission />
                </PrivateRoute>
              }
            />

            {/* Role End */}

            <Route
              path="companies"
              element={
                <PrivateRoute>
                  <Companies />
                </PrivateRoute>
              }
            />
            <Route
              path="companies/:id"
              element={
                <PrivateRoute>
                  <ShowCompany />
                </PrivateRoute>
              }
            />
            <Route
              path="companies/:companyId/users/:id"
              element={
                <PrivateRoute>
                  <ShowUser />
                </PrivateRoute>
              }
            />

            <Route
              path="contracts"
              element={
                <PrivateRoute>
                  <Contracts />
                </PrivateRoute>
              }
            />
            <Route
              path="contracts/:id"
              element={
                <PrivateRoute>
                  <ShowContract />
                </PrivateRoute>
              }
            />


            {/* Company User */}
            <Route
              path="companies/:id/user/machines"
              element={
                <PrivateRoute>
                  <CompanyUserMachines />
                </PrivateRoute>
              }
            />
              <Route
              path="companies/:id/user/contracts"
              element={
                <PrivateRoute>
                  <CompanyUserContracts />
                </PrivateRoute>
              }
            />

            <Route
              path="companies/machines/:id"
              element={
                <PrivateRoute>
                  <Machine />
                </PrivateRoute>
              }
            />

            {/* Company User End */}

            {/* WareHouse Start */}
            <Route
              path="warehouses"
              element={
                <PrivateRoute>
                  <WareHouse />
                </PrivateRoute>
              }
            />
            <Route
              path="warehouses/:id"
              element={
                <PrivateRoute>
                  <WareHouseShow />
                </PrivateRoute>
              }
            />
            {/* WareHouse End */}

            {/* Box Heading Start */}
            <Route
              path="box-headings"
              element={
                <PrivateRoute>
                  <BoxHeadings />
                </PrivateRoute>
              }
            />
            <Route
              path="box-headings/:boxId"
              element={
                <PrivateRoute>
                  <BoxHeadingShow />
                </PrivateRoute>
              }
            />
            {/* Box Heading End */}

            {/* Machine Start */}
            <Route
              path="machines"
              element={
                <PrivateRoute>
                  <Machines />
                </PrivateRoute>
              }
            />
            <Route
              path="machines/:id"
              element={
                <PrivateRoute>
                  <ShowMachine />
                </PrivateRoute>
              }
            />
            <Route
              path="machines/:machineId/models/:modelId"
              element={
                <PrivateRoute>
                  <ShowMachineModel />
                </PrivateRoute>
              }
            />

            <Route
              path="machines/:machineId/part-headings/:headingId"
              element={
                <PrivateRoute>
                  <ShowPartHeadings />
                </PrivateRoute>
              }
            />
            {/* Machine End */}

            {/* Parts start */}
            <Route
              path="parts"
              element={
                <PrivateRoute>
                  <Parts />
                </PrivateRoute>
              }
            />
            <Route
              path="parts/:id"
              element={
                <PrivateRoute>
                  <ShowPart />
                </PrivateRoute>
              }
            />

            <Route
              path="parts/:partId/aliases/:aliasId"
              element={
                <PrivateRoute>
                  <ShowPartAlias />
                </PrivateRoute>
              }
            />

            <Route
              path="parts/:partId/stocks/:stockId"
              element={
                <PrivateRoute>
                  <ShowStock />
                </PrivateRoute>
              }
            />
            {/* Parts end */}

            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="profile/settings"
              element={
                <PrivateRoute>
                  <AccountSettings />
                </PrivateRoute>
              }
            />

            {/* Settings Start */}

            <Route
              path="settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />

            {/* Settings End */}

            {/* Requisitions Start */}
            <Route
              path="requisitions/create"
              element={
                <PrivateRoute>
                  <RequisitionCreate />
                </PrivateRoute>
              }
            />

            <Route
              path="requisitions"
              element={
                <PrivateRoute>
                  <Requisitions />
                </PrivateRoute>
              }
            />

            <Route
              path="requisitions/:id"
              element={
                <PrivateRoute>
                  <ShowRequisition />
                </PrivateRoute>
              }
            />
            {/* Print Requisition */}
            <Route
              path="requisitions/:id/print"
              element={
                <PrivateRoute>
                  <PrintRequisition />
                </PrivateRoute>
              }
            />


            {/* Requisitions End */}

            {/* Quotation Start */}

            <Route
              path="quotations"
              element={
                <PrivateRoute>
                  <Quotations />
                </PrivateRoute>
              }
            />

            <Route
            path="quotations/:id"
            element = {
              <PrivateRoute>
                <ShowQuotation/>
              </PrivateRoute>
            }
            />

            <Route
              path="quotations/:requisitionId/create"
              element={
                <PrivateRoute>
                  <CreateQuotation />
                </PrivateRoute>
              }
            />

            {/* Quotation End */}


            {/* Invoice Start */}

            <Route 
            path="invoices"
            element={
              <PrivateRoute>
                <Invoices/>
              </PrivateRoute>
            }
            />
            <Route 
            path="invoices/:id"
            element={
              <PrivateRoute>
                <ShowInvoice/>
              </PrivateRoute>
            }
            />
            

          <Route
              path="invoices/:id/print"
              element={
                <PrivateRoute>
                  <PrintInvoice />
                </PrivateRoute>
              }
            />

            <Route
              path="invoices/:id/payment-histories/:paymentId"
              element={
                <PrivateRoute>
                  <ShowPaymentHistories />
                </PrivateRoute>
              }
            />


            {/* Invoice End */}

            {/* Delivery Notes Start */}
            <Route 
            path="delivery-notes"
            element={
              <PrivateRoute>
                <DeliveryNotes/>
              </PrivateRoute>
            }
            />

            <Route 
            path="delivery-notes/:id/print"
            element={
              <PrivateRoute>
                <PrintDeliveryNotes/>
              </PrivateRoute>
            }
            />

            <Route 
            path="delivery-notes/:id/show"
            element={
              <PrivateRoute>
                <ShowDeliveryNotes/>
              </PrivateRoute>
            }
            />

            <Route
              path="delivery-notes/:invoiceId/create"
              element={
                <PrivateRoute>
                  <CreateDelivery />
                </PrivateRoute>
              }
            />
        
            {/* Delivery Notes End; */}

            {/* Report Start */}
            <Route 
            path="reports"
            element={
              <PrivateRoute>
                <Reports/>
              </PrivateRoute>
            }
            />

            <Route 
            path="part-stock-report"
            element={
              <PrivateRoute>
                <PartStockReport/>
              </PrivateRoute>
            }
            />
            {/* Report End */}

            {/* Gate pass Start */}
            <Route 
            path="gate-passes"
            element={
              <PrivateRoute>
                <GatePass/>
              </PrivateRoute>
            }
            />
            {/* Gate pass End */}

            {/* Routes for company users */} 
            <Route
              path="client-requisitions"
              element={
                <PrivateRoute>
                  <ClientRequisitions />
                </PrivateRoute>
              }
            />

            <Route
              path="client-quotations"
              element={
                <PrivateRoute>
                  <ClientQuotation />
                </PrivateRoute>
              }
            />

            <Route
              path="client-invoice"
              element={
                <PrivateRoute>
                  <ClientInvoices />
                </PrivateRoute>
              }
            />

            <Route
              path="client-delivery-notes"
              element={
                <PrivateRoute>
                  <ClientDeliveryNotes />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

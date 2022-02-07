import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import PermissionAbility from "helpers/PermissionAbility";
function Table({ name, buttonName, title, data, columns, isLoading, onFilter, onClickButton }) {
    const [filters, setFilters] = useState({
        order: {},
        page: 1,
        rows: 10,
    });

    //Handle ordering
    const handleOrder = (col, direction) => {
        setFilters({
            ...filters, ['order']: { column: col.field, direction: direction }
        })
    }

    //Hadle pagination
    const handlePageChange = (num) => {
        setFilters({
            ...filters, ['page']: num
        })
    }

    //Handle rows per page
    const handlePerRowsChange = (num) => {
        setFilters({
            ...filters, ['rows']: num
        })
    }

    //Handle search
    const onSearch = (e) => {
        if(e.key ==='Enter')
        setFilters({
            ...filters, ['q']: e.target.value
        })
    }

    //Create event while order or filter updates
    useEffect(() => {
        if (typeof onFilter === 'function') //Check if the handle had set for the filtering
            onFilter(filters);
    }, [filters]);


    return (
      <div className="card card-flush">
        <div className="card-header align-rows-center py-5 gap-2 gap-md-5">
          <div className="card-title">
            <div className="d-flex align-rows-center position-relative">
              <i className="fa fa-search position-absolute ms-4 my-5"></i>
              <input
                type="text"
                data-filter="search"
                className="form-control form-control-solid w-250px ps-14"
                placeholder={"Search " + name}
                onKeyDown={onSearch}
              />
            </div>
          </div>
          <PermissionAbility permission="employees_create">
            {typeof onClickButton === "function" && (
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <Link
                  to="#"
                  className="btn btn-light-primary btn-md"
                  onClick={() => {
                    if (typeof onClickButton === "function") onClickButton();
                  }}
                >
                  {buttonName}
                </Link>
              </div>
            )}
          </PermissionAbility>
        </div>

        <div className="card-body pt-0">
          <DataTable
            title={title}
            columns={columns}
            data={data?.data}
            progressPending={isLoading}
            pagination
            paginationServer
            paginationTotalRows={data.meta?.total}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            onSort={handleOrder}
          />
        </div>
      </div>
    );
};

export default Table;

import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  console.log("Columns being passed:", userColumns);
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          {" "}
          Add New
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={[...userColumns, ...actionColumn]}
        //pageSizeOptions={[5,7]}
        pageSizeOptions={[9]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 9, page: 0 },
          },
        }}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

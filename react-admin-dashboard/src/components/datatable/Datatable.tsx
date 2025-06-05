import React from 'react'
import "./datatable.scss"
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { useMemo } from 'react';




const Datatable = () => {
     console.log("Columns being passed:", userColumns);

    const actionColumn:GridColDef[] = [
        {
            field:"action",
            headerName:"Action",
            width: 200,
            renderCell: () => {
                return (
                <div className="cellAction" >
                <div className='viewButton'>View</div>
                <div className='deleteButton'>Delete</div>
                </div>
            );
            },
        },
    ];
    // const columns = useMemo(() => [...userColumns, ...actionColumn], []);
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={[...userColumns, ...actionColumn]}
        
        pageSizeOptions={[5,10]}
       
        checkboxSelection
        
      />
    </div>
  )
}

export default Datatable

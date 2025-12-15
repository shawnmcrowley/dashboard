'use client'

import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { useMemo, useState, useEffect } from "react"
import Landing from '@/components/landing'

export default function MongoDB() {
  const defaultColDef = useMemo(() => ({
    flex: 1,
    filter: true,
    floatingFilter: false,
    filterParams: { buttons: ['apply', 'clear'] }
  }), [])

  const [rowData, setRowData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mongodb")
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();
        setRowData(data[0].entities);
      } catch (error) {
        console.error('Error Fetching Data:', error);
      }
    };

    fetchData();
  }, []);

  const [colDefs] = useState([
    { field: "SYSID", headerName: "Milestone ID" },
    { field: 'Name', headerName: "Name" },
    { field: "CreatedOn", headerName: "Created On", filter: 'agDateColumnFilter' },
    { field: "DueDate", headerName: "Due Date", filter: 'agDateColumnFilter' },
    { field: "PercentCompleted", headerName: "% Complete" }
  ])

  return (
    <Landing title="NoSQL DataStore" description="MongoDB data with advanced filtering and search">
      <div className="ag-theme-quartz rounded-lg border" style={{height: '650px'}}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={25} paginationPageSizeSelector={[25, 50]} />
      </div>
    </Landing>
  )
}

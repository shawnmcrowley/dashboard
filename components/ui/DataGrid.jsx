import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { useMemo, useState } from "react"


export default function Page() {

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            filter: true,
            floatingFilter: true,
            filterParams: { buttons: ['apply', 'clear'] }
        }

    })



    // Row Data to Display
    const [rowData, setRowData] = useState([
        {
            make: "Tesla", model: {
                large: "Model Y",
                small: "Model X"
            },
            price: 69500,
            electric: false,
            date: "12/24/2024"
        },
        {
            make: "Tesla", model:
            {
                large: "Model S",
                small: "Model X"
            },
            price: 64500, electric: true, date: "11/15/2013"
        },
        {
            make: "Tesla", model: {
                large: "Model G",
                small: "Model G"
            },
            price: 68500, electric: true, date: "09/12/2006"
        },
        {
            make: "Chevy",
            model: {
                large: "Suburban",
                small: "Blazer"
            },
            price: 57000,
            electric: true,
            date: "12/10/2023"

        }


    ])

    // Column Definitions for Headers
    const [colDefs, setColDefs] = useState([
        {
            field: "make",
            headerName: "Company"
        },
        {  headerName: "Model",
            field: 'model.small'
         },
        { field: "price" },
        { field: "electric" },
        { field: "date", filter: 'agDateColumnFilter' }
    ])





    return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>Data Grid with Nested Objects
            <p></p>
            <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
        </div>
    )

}
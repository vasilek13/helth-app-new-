import React from "react";
import './mainTable.scss';
import ClientTable from "../clientLine/client";
import client from '../../../img/client.svg';

import { useTable, usePagination } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2, pageSize: 5 },
        },
        usePagination
    )

    // Render the UI for your table
    return (
        <div className="mainTable">
            {/*<pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                        },
                        null,
                        2
                    )}
                </code>
                </pre>*/}
            <h1 className="table__title">Appointments</h1>
            <table className="table" {...getTableProps()}>
                <thead className="table__thead">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="table__tbody">
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div >
    )
}

function PaginationTableComponent() {
    const columns = React.useMemo(
        () => [
            {   Header: ' ',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'client-img',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Date',
                        accessor: 'date',
                    },
                    {
                        Header: 'Visit Time',
                        accessor: 'visit',
                    },
                    {
                        Header: 'Doctor',
                        accessor: 'doctor',
                    },
                    {
                        Header: 'Conditions',
                        accessor: 'conditions',
                    },
                ],
            },
        ],
        []
    )

    const data = [
            { "client-img": <img src={client}/>, "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
            { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
            { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
            { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
            { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
            { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
            { "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
            { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
            { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
            { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
            { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
            { "name": "Leslie Alexander", "email": "lesie.alexander@example.com", "date": "10/10/2020", "visit": "09:15-09:45am", "doctor": "Dr. Jacob Jones", "conditions": "Mumps Stage II" },
            { "name": "Ronald Richards", "email": "ronald.richards@example.com", "date": "10/12/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Theresa Webb", "conditions": "Depression" },
            { "name": "Jane Cooper", "email": "jane.cooper@example.com", "date": "10/13/2020", "visit": "01:15-01:45pm", "doctor": "Dr. Jacob Jones", "conditions": "Arthritis" },
            { "name": "Robert Fox", "email": "robert.fox@gmail.com", "date": "10/14/2020", "visit": "02:00-02:45pm", "doctor": "Dr. Arlene McCoy", "conditions": "Fracture" },
            { "name": "Jenny Wilson", "email": "jenny.wilson@example.com", "date": "10/15/2020", "visit": "12:00-12:45pm", "doctor": "Dr. Esther Howard", "conditions": "Depression" },
        ]
    ///console.log(JSON.stringify(data));


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent;
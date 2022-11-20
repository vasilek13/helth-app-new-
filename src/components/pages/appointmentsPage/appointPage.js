import React from "react";
import './appointPage.scss';
import ClientTable from "../../UI/clientLine/client";
import client from '../../../img/client.svg';

const AppointPage = () => {
    function sliceTable(largeTable, chunk) {
        let lesserTables = [];
        largeTable = lesserTables.slice.call(largeTable.children[0].children);
        for (let t = 0, len = largeTable.length, table; t < len; t += chunk) {
          table = document.createElement('table');
          largeTable
            .slice(t, t+chunk)
            .map(tr => table.appendChild(tr));
          lesserTables.push(table);
        }
        return lesserTables;
    }
    const TableClients = [
        { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visit: "09:15-09:45am", doctor: "Dr. Jacob Jones", conditions: "Mumps Stage II" },
        { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visit: "12:00-12:45pm", doctor: "Dr. Theresa Webb", conditions: "Depression" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visit: "01:15-01:45pm", doctor: "Dr. Jacob Jones", conditions: "Arthritis" },
        { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visit: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", conditions: "Fracture" },
        { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visit: "12:00-12:45pm", doctor: "Dr. Esther Howard", conditions: "Depression" },
        { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visit: "09:15-09:45am", doctor: "Dr. Jacob Jones", conditions: "Mumps Stage II" },
        { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visit: "12:00-12:45pm", doctor: "Dr. Theresa Webb", conditions: "Depression" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visit: "01:15-01:45pm", doctor: "Dr. Jacob Jones", conditions: "Arthritis" },
        { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visit: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", conditions: "Fracture" },
        { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visit: "12:00-12:45pm", doctor: "Dr. Esther Howard", conditions: "Depression" },
        { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visit: "09:15-09:45am", doctor: "Dr. Jacob Jones", conditions: "Mumps Stage II" },
        { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visit: "12:00-12:45pm", doctor: "Dr. Theresa Webb", conditions: "Depression" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visit: "01:15-01:45pm", doctor: "Dr. Jacob Jones", conditions: "Arthritis" },
        { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visit: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", conditions: "Fracture" },
        { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visit: "12:00-12:45pm", doctor: "Dr. Esther Howard", conditions: "Depression" },
    ]
    var tablesArray = sliceTable(document.getElementById(TableClients), 10 );
    return(
        <>
            <table className="activity__table">
                <tr className="table_header">
                    <th className="first">Name</th>
                    <th>Email</th>
                    <th className="first">Date</th>
                    <th>Visit Time</th>
                    <th className="first">Doctor</th>
                    <th>Conditions</th>
                </tr>
                {tablesArray.map((val, key) => {
                return (
                    <ClientTable key={key} foto={client} name={val.name} email={val.email} date={val.date} visit={val.visit} doctor={val.doctor} conditions={val.conditions}/>
                )
                })}
            </table>
        </>
    )
}

export default AppointPage;
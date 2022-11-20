import React from "react";
import './tableActivity.scss';
import client from '../../../img/client.svg';
import ClientTable from "../clientLine/client";

const data = [
    { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visit: "09:15-09:45am", doctor: "Dr. Jacob Jones", conditions: "Mumps Stage II" },
    { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visit: "12:00-12:45pm", doctor: "Dr. Theresa Webb", conditions: "Depression" },
    { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visit: "01:15-01:45pm", doctor: "Dr. Jacob Jones", conditions: "Arthritis" },
    { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visit: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", conditions: "Fracture" },
    { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visit: "12:00-12:45pm", doctor: "Dr. Esther Howard", conditions: "Depression" },
  ]

const TableActivity = () =>{
    return(
        <div className="activity">
            <h5>Appointment Activity</h5>
            <table className="activity__table">
                <tr className="table_header">
                    <th className="first">Name</th>
                    <th>Email</th>
                    <th className="first">Date</th>
                    <th>Visit Time</th>
                    <th className="first">Doctor</th>
                    <th>Conditions</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <ClientTable key={key} foto={client} name={val.name} email={val.email} date={val.date} visit={val.visit} doctor={val.doctor} conditions={val.conditions}/>
                    /*<tr key={key} className="clientTable">
                        <td><img src={client/*val.foto} alt='' /><p>{val.name}</p></td>
                        <td><p>{val.email}</p></td>
                        <td><p>{val.date}</p></td>
                        <td>{val.visit}</td>
                        <td>{val.doctor}</td>
                        <td>{val.conditions}</td>
                        <td><img src={pencil} alt='' /><img src={trash} alt='' /></td>
                    </tr>*/
                )
                })}
            </table>
        </div>
    )
}

export default TableActivity;

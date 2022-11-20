import React from "react";
import './menu.scss';
import logo from '../../../img/logo-small.svg';
import '../../../slyle/icomoon/iconFonts.scss';
import DashboardPage from "../../pages/dashboardPage/dashboardPage";
import PaginationTableComponent from "../bigTable/MainTable";

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftOpen: true,
        }
    }
    toggleSlidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    }
    
    render(){
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        return(
            <div id='layout'>
                <div id='left' className={leftOpen}>
                    <div className="icon" onClick={this.toggleSlidebar}><img src={logo}/></div>
                    <div className={`sidebar ${leftOpen}`}>
                        <div className="header">
                            <h3 className="title">Healthcare</h3>
                        </div>
                        <div className="content">
                            <p>MEDICINE</p>
                            <nav>
                                <ul>
                                    <li style={{'margin-bottom':'28px'}} className="icon-dashboard"><a>Dashboard</a></li>
                                    <li style={{'margin-bottom':'28px'}} className="icon-appointments"><a>Appointments</a></li>
                                    <li style={{'margin-bottom':'28px'}} className="icon-doctors_cyrcle"><a>Doctors</a></li>
                                    <li style={{'margin-bottom':'28px'}} className="icon-departmens"><a>Departments</a></li>
                                    <li style={{'margin-bottom':'28px'}} className="icon-patients"><a>Patients</a></li>
                                    <li style={{'margin-bottom':'22px'}} className="icon-payments"><a>Payments</a></li>
                                    <li style={{'padding-top':'22px'}} className="icon-help"><a>Help</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div id='main'>
                    {/*<DashboardPage/>*/}
                    <PaginationTableComponent/>
                </div>
            </div>
        )
    }
}

export default Layout;


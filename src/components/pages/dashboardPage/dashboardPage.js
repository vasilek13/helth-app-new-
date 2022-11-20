import React from "react";
import './dashboardPage.scss';
import Search from "../blokSearch/blokSearch";
import Card from "../../UI/card/card";
import bag from '../../../img/bag.svg';
import human1 from '../../../img/human1.svg';
import human2 from '../../../img/human2.svg';
import bank from '../../../img/bank.svg';
import TableActivity from "../../UI/tableActivity/tableActivity";
import SurveyChart from "../../UI/surveyChart/surveyChart";
import MoneyChart from "../../UI/moneyChart/moneyChart"; 

const DashboardPage = () =>{
    const dataMonth = [45, 77, 35, 62, 43];
    const xMonth = ['1 July', '8 July', '16 July', '24 July', '31 July'];
    const dataWeek = [64, 38, 58, 40, 77, 18, 53];
    const xWeek = ['25 July', '26 July', '27 July', '28 July', '29 July', '31 July', '30 July'];
    return(
        <div className="page">
            <div className="page__serch_blok"><Search/></div>
            <div className="page__bloks">
                <Card icon={bag} title="Appointments" volum="213"/>
                <Card icon={human1} title="New Patients" volum="104"/>
                <Card icon={human2} title="Operations" volum="24"/>
                <Card icon={bank} title="Hospital Earnings" volum="$ 12,174"/>
            </div>
            <div className="page__graph">
                <SurveyChart/>
            </div>
            <div className="page__graph_money">
                <MoneyChart data={dataMonth} xCategories={xMonth} title='$ 100,000' subtitle='Income in current month' optColor='#336CFB' markColor='#A9C1FD' />
                <MoneyChart data={dataWeek} xCategories={xWeek} title='$ 25,000' subtitle='Income in current week' optColor='#FAC032' markColor='#FCDF98' />
            </div>
            <div className="page__clients_table">
                <TableActivity/>
            </div>
        </div>
    )
}

export default DashboardPage;
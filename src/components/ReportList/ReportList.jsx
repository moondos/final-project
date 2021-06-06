import React from 'react';
import { Form, Field } from 'react-final-form'; 
import Moment from 'moment';
import './ReportList.css';
import "../../index.css";



const ReportList = ({ reports }) => {
    // console.log(reports)
	return (
		<table className="reportTable">
			<tbody>
				<tr key="0">
					<th>Дата</th>
					<th>Тип</th>
					<th>Цвет</th>
					<th>Имя владельца</th>
					<th>Ответственный сотрудник</th>
					<th>Статус</th>
					<th>Изменен</th>
					<th>Решение</th>
				</tr>
				{reports.map((report, index) => {
					return (
						<tr key={index+1}>
							<td>{Moment(report.date).format('DD.MM.YYYY')}</td>
							<td>{report.type}</td>
							<td>{report.color}</td>
							<td>{report.ownerFullName}</td>
							<td>{report.officer || "-"}</td>
							<td>{report.status}</td>
							<td>{Moment(report.updateAt).format('DD.MM.YYYY')}</td>
							<td>{report.resolution}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
        
};

export default ReportList;
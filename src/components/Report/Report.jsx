import React from 'react';
import { Form, Field } from 'react-final-form'; 

import './Report.css';
import "../../index.css";


const Report = ({ isAuth, onSubmit}) => {
    return (
        <Form 
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine }) => (
				<form className = "form" onSubmit={handleSubmit}>
					<div className="string">
						<label>ФИО арендатора:</label>
						<Field
							component="input"
							className="input"
							placeholder="Фамилия Имя Отчество"
							type="text"
							name="ownerFullName"
						/>
					</div>
					<div className="string">
						<label>Номер лицензии: </label>
						<Field
							component="input"
							className="input"
							placeholder="№ лицензии"
							type="text"
							name="licenseNumber"
						/>
					</div>
					<div className="string">
						<div className="halfString">
							<label>Цвет: </label>
							<Field
								component="input"
								className="color"
								type="color"
								name="color"
								initialValue="#ffffff"
							/>
						</div>
						<div className="halfString">
							<label>Тип: </label>
							<label className="radio_btn">
								<Field
									component="input"
									className="radio"
									type="radio"
									name="type"
									value="sport"
								/>{' '}
								Спортивный
							</label>
						
							<label className="radio_btn">
								<Field
									component="input"
									className="radio"
									type="radio"
									name="type"
									value="general"
								/>{' '}
								Обычный
							</label>
						</div>
					</div>
					
					<label>Описание: </label>
					<Field
						component="textarea"
						name="description"
						className="textarea"
						placeholder="Описание"
					/>
					
					<div className={"buttons"}>
						<button
							className={`${"submit"} button`}
							disabled={submitting || pristine}
						>
							Отправить
						</button>
						<button
							className={`${"submit"} button`}
							type="button"
							onClick={form.reset}
							disabled={submitting || pristine}
						>
							Сбросить
						</button>
					</div>
				</form>
			)}
		
		/>
    );
};

export default Report;
import React from 'react';

export default class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	name: '',
    	surname: '',
    	day: '',
    	month: '',
    	year: '',
    	sex: '',
    	country: '',
    	city: '',
    	email: '',
    	phone: ''
    }

    this.submitForm = this.submitForm.bind(this);
    this.changeInfoPopup = this.changeInfoPopup.bind(this);
  }

  changeInfoPopup(e){
  	this.setState({[e.target.name]: e.target.value})
  }

  submitForm(e) {
  	
  	e.preventDefault()
  }

  render() {
    return (
      <div>

      	<div className={this.props.numPopup == 1 ? "anketa_popup popup" : "hidden"}>
					<h3>ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</h3>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<form onSubmit={(e) => this.submitForm(e)}>
						<div className="anketa_wrap">
							<div className="left_anketa">
								<label htmlFor="">Имя:</label>
								<div className="right_item_form">
									<input type="text" name="name" placeholder="Иван" value={this.state.name} onChange={this.changeInfoPopup}/>
								</div>
								<label htmlFor="">Дата рождения:</label>
								<div className="right_item_form">
									<div className="select_date_wrap clearfix">
										<input type="text" name="day" placeholder="5" value={this.state.day} onChange={this.changeInfoPopup} />
										<div className="select_month">
											<span>Апрель</span>
											<input className="hidden" value={this.state.month} name="month" onChange={this.changeInfoPopup} />
											<i className="fa fa-angle-down" aria-hidden="true"></i>
											<div className="content_select_date">
												<span className="active_select_month">Сеньтябрь</span>
												<span>Октябрь</span>
												<span>Ноябрь</span>
												<span>Декабрь</span>
												<span>Декабрь</span>
												<span>Декабрь</span>
											</div>
										</div>
										<input type="text" placeholder="1996" value={this.state.year} name="year" onChange={this.changeInfoPopup} />
									</div>
								</div>
								<label className="stranno" htmlFor="">Страна:</label>
								<div className="standart_select">
									<span>Не выбрано</span>
									<input className="hidden" value={this.state.country} name="country" onChange={this.changeInfoPopup} />
									<i className="fa fa-angle-down" aria-hidden="true"></i>
									<div className="content_standart_select">
										<span className="active_select_standart">Совободен</span>
										<span>Женат</span>
										<span>Не знаю</span>
										<span>Есть любовница</span>
									</div>
								</div>
								<label htmlFor="">E-mail:</label>
								<div className="right_item_form">
									<input type="text" palceholder="example@example.com" value={this.state.email} name="email" onChange={this.changeInfoPopup}/>
								</div>
								<button onClick={(e) => this.props.changePopup(0)}>Отмена</button>
							</div>
							<div className="right_anketa">
								<label htmlFor="">Фамилия:</label>
								<div className="right_item_form">
									<input type="text" placeholder="Иванов" value={this.state.surname} name="surname" onChange={this.changeInfoPopup}/>
								</div>
								<label htmlFor="">Пол:</label>
								<div className="radio_sex_wrap" onChange={this.changeInfoPopup}>
									<input type="radio" name="sex" id="sex_1" defaultChecked />
									<label htmlFor="sex_1">Мужской</label>
									<input type="radio" name="sex" id="sex_2" />
									<label htmlFor="sex_2">Женский</label>
								</div>
								<label htmlFor="">Город:</label>
								<div className="right_item_form">
									<input type="text" placeholder="Москва" value={this.state.city} name="city" onChange={this.changeInfoPopup}/>
								</div>
								<label htmlFor="">Телефон:</label>
								<div className="right_item_form">
									<input type="text" placeholder="+7 777 777 777" value={this.state.phone} name="phone" onChange={this.changeInfoPopup}/>
								</div>
								<button type="submit">Отправить</button>
							</div>
						</div>
					</form>
				</div>

				<div className={this.props.numPopup == 2 ? "popup anketa_done_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="check_wrap">
						<svg xmlns="http://www.w3.org/2000/svg" width="75" height="57" viewBox="0 0 335.765 335.765"><path fill="#fff" d="M311.757 41.803L107.573 245.96l-83.587-83.596L0 186.394 107.573 293.96 335.765 65.795"/></svg>
					</div>
					<h3>Ваша заявка принята!</h3>
					<p>Мы отправили Вам письмо с паролем на указанный почтовый ящик.</p>
					<button>Продолжить</button>
				</div>

				<div className={this.props.numPopup == 3 ? "popup napisat_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="napisat_wrap">
						<div className="napis_line_wrap">
							<label htmlFor="">Ваше имя*</label>
							<input type="text" placeholder="Дмитрий" />
						</div>
						<div className="napis_line_wrap">
							<label htmlFor="">Ваш телефон (не обязательно)</label>
							<input type="text" placeholder="Дмитрий" />
						</div>
						<textarea placeholder="Здравствуйте, я хотел бы..."></textarea>
						<button>Отправить</button>
					</div>
				</div>

				<div className={this.props.numPopup == 4 ? "popup zakaz_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="zakaz_wrap">
						<label htmlFor="">Ваше имя*</label>
						<div className="right_item_form">
							<input type="text" />
						</div>
						<label htmlFor="">Ваш телефон*</label>
						<div className="right_item_form">
							<input type="text" />
						</div>
						<button>Заказать звонок</button>
					</div>
				</div>

				
      </div>
    );
  }
}

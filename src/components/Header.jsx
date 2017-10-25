import React, { Component } from 'react';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className="header_top">
					<div className="logo"><img src="img/logo.png" alt="" /></div>
					<nav className="big_mnu">
						<ul>
							<li><a href="">Главная</a></li>
							<li className="mnu_list" id="mnu_0"><a href="">Образование</a></li>
							<li><a href="">Проживание</a></li>
							<li className="mnu_list" id="mnu_1"><a href="">Медиатека</a></li>
							<li className="mnu_list" id="mnu_2"><a href="">О нас</a></li>
							<li className="nav_ask"><a href=""><span></span><b className="targ_1">Ответы на частые вопросы</b></a></li>
						</ul>
					</nav>
					<button className="yellow_button">Заполнить анкету</button>
					<div className="small_mnu_wrap">
						<button>
							<span></span>
						</button>
						<div className="small_mnu_hover">
							<div className="wrap_button_small_mnu">
								<button>
									<span></span>
								</button>
							</div>
							<ul>
								<li><i>Меню</i></li>
								<li><a href="">Главная</a></li>
								<li><i>Образование</i>
									
								</li>
								<li><a href="">Проживание</a></li>
								<li><a href="">Медиатека</a></li>
								<li><a href="">О нас</a></li>
								<li><a href="">Ответы на частые вопросы</a></li>
								<li className="butt_mnu_small"><a href="">Заполнить анкету</a></li>
								<li><a href="">Войти в личный кабинет</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="header_bottom">
					<div className="contacts_header">
						<p><span></span>+7 (965) 77-253-77</p>
						<p><span></span>info@studyinczech.net</p>
					</div>
					<div className="login_wrap">
						<div className="login">
							<p><span></span>Войти</p>
							<div className="authorization">
								<div className="autho_content">
									<form action="">
										<input type="text" placeholder="Логин" />
										<div className="wrap_password clearfix"><input type="text" placeholder="Пароль" /><a href="">?</a></div>
										<p>*для получения доступа нужно <a href="">заполнить анкету</a></p>
									</form>
								</div>
								<button>Авторизоваться</button>
							</div>
						</div>
						
					</div>
				</div>
				<div className="wrap_hover_mnu">
					<div className="hover_mnu" id="hover_mnu_0">
						<ul>
							<li><a href="">Высшее образование</a></li>
							<li><a href="">Среднее образование</a></li>
							<li><a href="">Дополнительные услуги</a></li>
							<li><a href="">ВУЗы</a></li>
						</ul>
					</div>
					<div className="hover_mnu" id="hover_mnu_1">
						<ul>
							<li><a href="">Фотографии</a></li>
							<li><a href="">Видео</a></li>
							<li><a href="">Наша книга</a></li>
							<li><a href="">Блог о Чехии</a></li>
						</ul>
					</div>
					<div className="hover_mnu" id="hover_mnu_2">
						<ul>
							<li><a href="">О компании</a></li>
							<li><a href="">Контакты</a></li>
							<li><a href="">Представители</a></li>
							<li><a href="">Партнеры</a></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}


// <!-- <ul>
									// 	<li><a href="">Высшее образование</a></li>
									// 	<li><a href="">Среднее образование</a></li>
									// 	<li><a href="">Дополнительные услуги</a></li>
									// 	<li><a href="">Университеты</a></li>
									// </ul> -->

// <div className="name_wrap">
						// 	<p>Дмитрий Печунка<i className="fa fa-angle-down" aria-hidden="true"></i></p>
						// 	<div className="name_mnu">
						// 		<ul>
						// 			<li><a href=""><i></i>Личный кабинет</a></li>
						// 			<li><a href=""><i></i>Моя анкета</a></li>
						// 			<li><a href=""><i></i>Оплата услуг</a></li>
						// 			<li><a href=""><i></i>Изменить пароль</a></li>
						// 			<li><a href=""><i></i>Выйти</a></li>
						// 		</ul>
						// 	</div>
						// </div>
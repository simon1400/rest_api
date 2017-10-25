import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
				<div className="footer_content">
					<div className="foot_cont_item_first">
						<div className="logo"><h1>Study in the <span>Czech Republic</span></h1></div>
						<span>Мы в соцсетях:</span>
						<ul>
							<li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href=""><i className="fa fa-vk" aria-hidden="true"></i></a></li>
							<li><a href=""><i className="fa fa-odnoklassniki" aria-hidden="true"></i></a></li>
							<li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
						</ul>
					</div>
					<div className="foot_cont_item">
						<span>Услуги</span>
						<ul>
							<li><a href="">Высшее образование в Чехии</a></li>
							<li><a href="">Курсы чешского языка</a></li>
							<li><a href="">Онлайн-курс чешского языка</a></li>
						</ul>
					</div>
					<div className="foot_cont_item">
						<span>О компании</span>
						<ul>
							<li><a href="">Наша команда</a></li>
							<li><a href="">Контакты</a></li>
							<li><a href="">Представительства</a></li>
						</ul>
					</div>
					<div className="foot_cont_item">
						<span>Медиатека</span>
						<ul>
							<li><a href="">Фотографии</a></li>
							<li><a href="">Видео</a></li>
							<li><a href="">Наш блог о Чехии</a></li>
						</ul>
					</div>
				</div>
				<div className="footer_bottom">
					<div className="foot_cop">
						© 2017 Все права защищены. Сайт сделан в студии
						<img src="img/autor_logo.png" alt="" />
					</div>
					<div className="carts_foot">
						<ul>
							<li><a href=""><img src="img/Visa.png" alt="" /></a></li>
							<li><a href=""><img src="img/Maestro.png" alt="" /></a></li>
							<li><a href=""><img src="img/Mastercard.png" alt="" /></a></li>
						</ul>
					</div>
				</div>
			</footer>
    );
  }
}

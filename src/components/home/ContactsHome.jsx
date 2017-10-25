import React from 'react';

export default class ContactsHome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section_5">
				<h2>ХОТИТЕ ЗАДАТЬ ВОПРОС?</h2>
				<div className="sec_5_content_wrap">
					<div className="sec_5_form_wrap">
						<form action="">
							<label htmlFor="">Ваше имя</label>
							<input type="text" placeholder="Дмитрий" />
							<label htmlFor="">Телефон</label>
							<input type="text" />
							<button className="yellow_button">Заказать звонок</button>
						</form>
					</div>
					<div className="sec_5_content">
						<p>Заполните форму заявки и мы перезвоним вам ближайшие 10 минут.</p>
						<p>Если вы стесняетесь или же по любой другой причине не можете разговаривать — <a href="">напишите нам на почту</a> или <a href="">в Skype.</a></p>
						<h3>Примечание</h3>
						<p>Ваши данные в полной безопасности. Мы не передаем их третьим лицам.</p>
					</div>
				</div>
			</section>
    );
  }
}

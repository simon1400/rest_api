import React from 'react';

export default class Section2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section_2">
				<div className="sec_2_item sec_2_first_top_item sec_2_first">
					<h2 className="sec_top">ЧТО МЫ<span>ПРЕДЛАГАЕМ?</span></h2>
					<p className="sec_descr">Наши услуги</p>
				</div>
				<div className="sec_2_item sec_2_first">
					<img src="img/sec_2_icon_1.png" alt="" />
					<h3>ПОЛУЧЕНИЕ <br /><b>ВЫСШЕГО <br />ОБРАЗОВАНИЯ <br />В ЧЕХИИ</b></h3>
					<p>Комплесные программы обучения по <br />Вашим потребностям и ожиданиям.</p>
					<button>Узнать больше <i className="fa fa-angle-right" aria-hidden="true"></i></button>
				</div>
				<div className="sec_2_item sec_2_first">
					<img src="img/sec_2_icon_2.png" alt="" />
					<h3>ПОДГОТОВИТЕЛЬНЫЕ <br />КУРСЫ <b>ЧЕШСКОГО <br />ЯЗЫКА</b></h3>
					<p>Годовые курсы <br />чешского языка <br />в Праге или Брно.</p>
					<button>Узнать больше <i className="fa fa-angle-right" aria-hidden="true"></i></button>
				</div>
				<div className="sec_2_item">
					<img src="img/sec_2_icon_3.png" alt="" />
					<h3>ПОЛУЧЕНИЕ <br /><b>СРЕДНЕГО <br />ОБРАЗОВАНИЯ <br />В ЧЕХИИ</b></h3>
					<p>Годовая программа для поступления <br />в любую гимназию Чехии!</p>
					<button>Узнать больше <i className="fa fa-angle-right" aria-hidden="true"></i></button>
				</div>
				<div className="sec_2_item">
					<img src="img/sec_2_icon_4.png" alt="" />
					<h3>ОНЛАЙН-КУРС <br /><b>ЧЕШСКОГО ЯЗЫКА</b></h3>
					<p>20 часов интенсивных<br />онлайн-курсов чешского языка.</p>
					<button>Узнать больше <i className="fa fa-angle-right" aria-hidden="true"></i></button>
				</div>
				<div className="sec_2_item">
					<img src="img/sec_2_icon_5.png" alt="" />
					<h3>МЫ ТАК ЖЕ <br />ПРЕДОСТАВЛЯЕМ<br /><b>ДОПОЛНИТЕЛЬНЫЕ <br />УСЛУГИ</b></h3>
					<p>От медецинской страховки<br />до заверенных переводов.</p>
					<button>Узнать больше <i className="fa fa-angle-right" aria-hidden="true"></i></button>
				</div>
			</section>
    );
  }
}

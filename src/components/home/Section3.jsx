import React from 'react';

export default class Section3 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section_3">
				<h2 className="sec_top">КАК ВСЕ БУДЕТ<span>ПРОИСХОДИТЬ?</span></h2>
				<div className="sec_3_num_wrap clearfix">
					<div className="sec_3_item_wrap_left clearfix">
						<div className="sec_3_item_left clearfix">
							<div className="sec_3_num">1</div>
							<h3>ВЫБОР ПРОГРАММЫ</h3>
							<p>Вам необходимо выбрать программу, которая будет отвечать Вашим требованиям и финансовым возможностям. Затем, Вы подаете заявку и заполняете анкету, выбрав одну из наших программ.</p>
						</div>
					</div>
				</div>
				<div className="sec_3_num_wrap clearfix">
					<div className="sec_3_item_wrap_right clearfix">
						<div className="sec_3_item_right clearfix">
							<div className="sec_3_num">2</div>
							<h3>ПОДПИСАНИЕ ДОГОВОРА</h3>
							<p>После того, как Вы отправили нам заявку с выбранной образовательной программой с Вами связывается наш сотрудник, который расскажет о дальнейших совместных действиях и отправит Вам договор для подписания. </p>
						</div>
					</div>
				</div>
				<div className="sec_3_num_wrap clearfix">
					<div className="sec_3_item_wrap_left clearfix">
						<div className="sec_3_item_left clearfix">
							<div className="sec_3_num">3</div>
							<h3>ОФОРМЛЕНИЕ ВИЗЫ</h3>
							<p>Далее мы собираем Вам все необходимые документы для получения визы, записываем Вас на языковые курсы и бронируем место в общежитии. Так же мы высылаем Вам пакет документов и начинаем подготовку к собеседованию в чешском посольстве. </p>
						</div>
					</div>
				</div>
				<div className="sec_3_num_wrap clearfix">
					<div className="sec_3_item_wrap_right clearfix">
						<div className="sec_3_item_right clearfix">
							<div className="sec_3_num">4</div>
							<h3>ПРИЕЗД В ЧЕХИЮ</h3>
							<p>По приезду в Чехию Вас встречает наш сотрудник, который организует Вам трансфер в место пребывания. По приезду мы расселяем участниковнаших программ по выбранным общежитиям и квартирам. </p>
						</div>
					</div>
				</div>
				<div className="sec_3_num_wrap clearfix">
					<div className="sec_3_item_wrap_left clearfix">
						<div className="sec_3_item_left clearfix">
							<div className="sec_3_num">5</div>
							<h3>ОБУЧЕНИЕ НА КУРСАХ</h3>
							<p>Далее мы собираем Вам все необходимые документы для получения визы, записываем Вас на языковые курсы и бронируем место в общежитии. Так же мы высылаем Вам пакет документов и начинаем подготовку к собеседованию в чешском посольстве.</p>
						</div>
					</div>
				</div>
				<div className="sec_3_num_wrap last_num clearfix">
					<div className="sec_3_item_wrap_right clearfix">
						<div className="sec_3_item_right clearfix">
							<div className="sec_3_num">6</div>
							<h3>ПОСТУПЛЕНИЕ В ВУЗ</h3>
							<p>После прохождения процедуры нострификации, наши специалисты по образованию предоставят Вам всю необходимую информацию о процедуре поступления на выбранную Вами специальность, посоветуют ВУЗы, помогут заполнить заявления и отправить все необходимые для поступления документы.</p>
						</div>
					</div>
				</div>
				<div className="sec_3_but_wrap">
					<button className="yellow_button">Заполнить анкету</button>
				</div>
			</section>
    );
  }
}

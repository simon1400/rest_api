import React from 'react';

export default class Section4 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section_4">
				<h2 className="sec_top">НАША<span>МЕДИАТЕКА</span></h2>
				<div className="tabs_wrap">
					<button className="active_media">Фото</button>
					<button>Видео</button>
				</div>
				<div className="sec_4_content_wrap">
					<div className="sec_4_item">
						<img src="img/325H.jpg" alt="" />
						<div className="sec_4_item_shadow">
							<span>03:12</span>
							<p>Наши студенты рассказывают об обучении в Чехии</p>
						</div>
					</div>
					<div className="sec_4_item">
						<img src="img/322H.jpg" alt="" />
						<div className="sec_4_item_shadow">
							<span>02:10</span>
							<p>Какая система образования в Чехии?</p>
						</div>
					</div>
					<div className="sec_4_item">
						<img src="img/338H.jpg" alt="" />
						<div className="sec_4_item_shadow">
							<span>15:40</span>
							<p>Отзывы наших учеников о нашей работе</p>
						</div>
					</div>
					<div className="last_item_4">
						<img src="img/youtube.png" alt="" />
						<p>Подписывайтесь на наш YouTube и будьте вкурсе наших событий!</p>
						<div className="insta_sec_4 clearfix">
							<a href=""><img src="img/insta.png" alt="" /></a>
							<p><span>studyintheczech</span>photo from czech</p>
						</div>
						<p><span>243</span>видео</p>
						<p><span>5032</span>подписчика</p>
					</div>
				</div>
			</section>
    );
  }
}

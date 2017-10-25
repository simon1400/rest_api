import React from 'react';

export default class Slide extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section_1">
				<img src="img/parallax5.png" alt="" />
				<div className="slider_wrap">
					<h1>ВЫСШЕЕ ОБРАЗОВАНИЕ В ЧЕХИИ!</h1>
					<p>Постройте личную историю или <br />историю успеха Вашего ребенка.</p>
				</div>
			</section>
    );
  }
}

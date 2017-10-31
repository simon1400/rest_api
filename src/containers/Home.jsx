import React, { Component } from 'react';


import Slide from '../components/home/Slide.jsx'
import Section2 from '../components/home/Section2.jsx'
import Section3 from '../components/home/Section3.jsx'
import Section4 from '../components/home/Section4.jsx'
import ContactsHome from '../components/home/ContactsHome.jsx'
import MapHome from '../components/home/MapHome.jsx'


export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<Slide />
				<Section2 />
				<Section3 />
				<Section4 />
				<ContactsHome />
				<MapHome />
			</div>
		)
	}
}
import React, { Component } from 'react';

import Home from './Home.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Popup from '../components/Popup.jsx'


export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			numPopup: 0,
			authHover: 0 
		}

		this.handlePopup = this.handlePopup.bind(this);
		this.disableAuth = this.disableAuth.bind(this);
		this.enableAuth = this.enableAuth.bind(this);
	}

	handlePopup(popup) {
		this.setState({ 
			numPopup: popup,
			authHover: 0
		})
	}

	enableAuth(){
		this.setState({
			authHover: 1
		})
	}

	disableAuth() {
		this.setState({
			authHover: 0
		})
	}

	render() {
		return (
			<div className="App">
				<Header 
					popup={this.handlePopup} 
					authHover={this.state.authHover}
					enableAuth={this.enableAuth}
					disableAuth={this.disableAuth}/>
				<Home />
				<Footer />
				<Popup 
					numPopup={this.state.numPopup} 
					changePopup={this.handlePopup}
					enableAuth={this.enableAuth}
					disableAuth={this.disableAuth}/>
			</div>
		)
	}
}
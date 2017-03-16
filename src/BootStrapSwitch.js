import React from 'react';
import {render} from 'react-dom';
import SwitchButton from 'react-switch-button';

export default class BootStrapSwitch extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			baconIsReady : true
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(event) {
	  console.log("inside handleChange");
	}

	render(){
		return(
			<div>
				<h2> BootStrapSwitch </h2>
				<SwitchButton name="switch-1" />
			</div>
		)
	};
}
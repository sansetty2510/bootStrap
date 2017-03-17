import React from 'react';
import {render} from 'react-dom';
import Toggle from './react-bootstrap-toggle';

import SwitchButton from './SwitchButton';

export default class BootStrapSwitch extends React.Component {

	constructor() {
	    super();
	    this.onClick = this.onClick.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.state = { active: true, yes: 'yes', baconIsReady :false };
	}

	onClick() {
		this.setState({ active: !this.state.active, yes: 'yes' });
	}

	handleChange(event) {
	  // do something with event.target.checked
	}

	render() {
	    const style = {
	      margin: '20px 20px',
	    };

	    return (
	      <div style={style}>
	        <Toggle
	          active={this.state.active}
	          on={this.state.yes}
	          off="NO"
	          handlestyle="warning"
	          onClick={this.onClick}
	          size="lg"
	        />

	        <br/>
	        <br/>	
	        <SwitchButton name="switch-1" />
	        <br/>
	        <br/>	
	        <SwitchButton name="switch-3" label="Click me" defaultChecked={true} />	
	        <br/>
	        <br/>
	        <SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Turn right" label="Turn left"/>
			<br/>
			<br/>
	      </div>
	    );
	}
}
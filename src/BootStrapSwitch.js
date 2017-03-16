import React from 'react';
import {render} from 'react-dom';
import Toggle from './react-bootstrap-toggle';

export default class BootStrapSwitch extends React.Component {

	constructor() {
	    super();
	    this.onClick = this.onClick.bind(this);
	    this.state = { active: true, yes: <span>Yes</span> };
	}

	onClick() {
		this.setState({ active: !this.state.active, yes: <span>Yss</span> });
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
	          off="OFF"
	          handlestyle="warning"
	          onClick={this.onClick}
	          size="lg"
	        />
	      </div>
	    );
	}
}

import React from 'react';
export default class SwitchButton extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
  	}

	static propTypes : {
	    id             : React.PropTypes.string,
	    name           : React.PropTypes.string,
	    title          : React.PropTypes.string,
	    label          : React.PropTypes.string,
	    labelRight     : React.PropTypes.string,
	    defaultChecked : React.PropTypes.bool,
	    disabled       : React.PropTypes.bool,
	    theme          : React.PropTypes.string,
	    checked        : React.PropTypes.string,
	    mode           : React.PropTypes.string,
	    onChange       : React.PropTypes.func
  	};

  	static defaultProps = {
  		id             : '',
		name           : 'switch-button',
		title          : '',
		label          : '',
		labelRight     : '',
		disabled       : false,
		defaultChecked : false,
		theme          : 'rsbc-switch-button-flat-round',
		checked        : null,
		mode           : "switch"
  	};

  	handleChange() {
  		console.log("SDFASDAS");
  	}	

	render(){
		let id, label, labelRight,
        mode = this.props.mode || "switch";

	    if( this.props.id === '' && this.props.name !== '' ) {
	      id = this.props.name;
	    }

	    if( this.props.label !== '' ) {
	      label = (
	        <label htmlFor={id}>{this.props.label}</label>
	      );
	    }

	    if( this.props.labelRight !== '' ) {
	      labelRight = (
	        <label htmlFor={id}>{this.props.labelRight}</label>
	      );
	    }

	    if( [ 'switch', 'select' ].indexOf( mode ) < -1 ) {
	      mode = "switch";
	    }

	    return (
	      <div className={'rsbc-switch-button rsbc-mode-' + mode + ' ' + this.props.theme + ( this.props.disabled ? " disabled" : "") }>
	        {label}

	        <input 
	        	onChange={this.handleChange}
	            defaultChecked={this.props.defaultChecked}
	            disabled={this.props.disabled}
	            id={id} 
	            name={this.props.name}
	            type="checkbox"
	            value="1"/>

	        <label htmlFor={id}>	        
	        </label>

	        {labelRight}
	      </div>
	    );
	}
}
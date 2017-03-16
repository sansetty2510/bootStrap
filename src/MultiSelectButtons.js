import React from 'react';
import {Button} from 'react-bootstrap';

export default class MultiSelectButtons extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h3> Buttons </h3>
				<div className="btn-toolbar">
					<Button bsStyle="success" onClick = {this.props.saveBtnClick} >Save</Button> 
					<Button bsStyle="primary" onClick = {this.props.selectAllBtnClick} >Select All</Button> 
					<Button bsStyle="danger" onClick = {this.props.deSelectAllBtnClick} >Select None</Button> 
				</div>				
			</div>
		);
	}
} 
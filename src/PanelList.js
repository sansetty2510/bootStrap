import React from 'react';
import {Grid,Row,Col,Panel} from 'react-bootstrap';

export default class PanelList extends React.Component {
	constructor(props){
		super(props);
	}

	panelClick(indexVal){
		console.log('asdasdasdasdasdasdasdasdasdasdasd');
		this.props.selectItemPanel(indexVal);
	}

	render(){
		return(
			<Col xs={3} md={3} key = {this.props.panelData.id}>
	    		<Panel bsStyle = {this.props.panelData.selected} onClick={() => this.props.selectItemPanel(this.props.panelData.id)} >
			      {this.props.panelData.content}
			    </Panel>
	      	</Col>				      	
		);
	}
}
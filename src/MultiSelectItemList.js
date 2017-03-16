import React from 'react';
import {Grid,Row,Col,Panel} from 'react-bootstrap';

export default class MultiSelectItemList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			classVal : 'default'
		};

		this.panelClick = this.panelClick.bind(this);
	}

	panelClick(){
		this.setState({classVal : this.state.classVal === 'default' ? 'primary' : 'default'});
		
	}

	render(){
		return(
			<div>
				<h2>Panels</h2>
				<Grid>
					<Row>
				    	<Col xs={3} md={3}>
				    		<Panel header="Panel heading 1" bsStyle = {this.state.classVal} onClick = {this.panelClick} >
						      Panel content 1
						    </Panel>
				      	</Col>
				      	<Col xs={3} md={3}>
				      		<Panel header="Panel heading 2">
						      Panel content 2
						    </Panel>
				      	</Col>
				      	<Col xs={3} md={3}>
				      		<Panel header="Panel heading 3">
						      Panel content 3
						    </Panel>
				      	</Col>
				    
				    	<Col xs={3} md={3}>
				    		<Panel header="Panel heading 4">
						      Panel content 4
						    </Panel>
				      	</Col>
				      	<Col xs={3} md={3}>
				      		<Panel header="Panel heading 5">
						      Panel content 5
						    </Panel>
				      	</Col>
				      	<Col xs={3} md={3}>
				      		<Panel header="Panel heading 6">
						      Panel content 6
						    </Panel>
				      	</Col>
				    </Row>
				</Grid>
			</div>
		);
	}
}
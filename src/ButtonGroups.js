import React from 'react';
import { Tabs, Tab, Nav, NavItem, ButtonGroup, Button} from 'react-bootstrap';

import NPort from './NPort';
import NCen from './NCen';

const cssCls = {
	color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4'
}
export default class ButtonGroups extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="tabMenu">
				<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="navChk">
				    <Tab eventKey={1} title="N-PORT"> <NPort/> </Tab>
				    <Tab eventKey={2} title="N-CEN"> <NCen/> </Tab>

				    <Tab eventKey={3} title="CPO/PQR">CPO/PQR Tab content</Tab>
				    <Tab eventKey={4} title="NMFP">NMFP Tab content</Tab>
				    <Tab eventKey={5} title="NQ">NQ Tab content</Tab>
				    <Tab eventKey={6} title="Financial Statements">Financial Statements Tab content</Tab>
			  	</Tabs>

			</div>
		)
	};
}
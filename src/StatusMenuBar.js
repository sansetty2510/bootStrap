import React from 'react';
import { Tabs, Tab, Nav, NavItem, ButtonGroup, Button} from 'react-bootstrap';

export default class StatusMenuBar extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let self = this;
		return(
			<div>
				<h2> Status Menu Items </h2>					

				<div className="statusMenu">
					<Tabs id="uncontrolled-tab-example" className="navChk" onSelect={(index, title) => this.props.menuClickItems(index)}>
						{
							this.props.dataMenu.map(function(item, i){
							  	return <Tab key={i} eventKey={i} title= {item.displayName} onClick={()=>alert('It works')} > </Tab> ;
							})	
						}		    
				  	</Tabs>
				</div>
			</div>	
		);
	}
}
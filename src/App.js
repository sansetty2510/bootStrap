import React from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import Child from './ChildPopUp';
import ButtonGroups from './ButtonGroups';

import MultiSelect from './MultiSelect';

import StatusMenuBar from './StatusMenuBar';
import BootStrapSwitch from './BootStrapSwitch';

import style from '../css/test.css';

const divStyle = {
	color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4'
};

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal : false,
			statusMenuBarData : [
				{
					'id': 1,
					'displayName' : 'Menu 1',
					'type': 1
				},
				{
					'id': 2,
					'displayName' : 'Menu 2',
					'type': 2
				},
				{
					'id': 3,
					'displayName' : 'Menu 3',
					'type': 1
				},
				{
					'id': 4,
					'displayName' : 'Menu 4',
					'type': 2
				},
				{
					'id': 5,
					'displayName' : 'Menu 5',
					'type': 2
				},
				{
					'id': 6,
					'displayName' : 'Menu 6',
					'type': 1
				},
				{
					'id': 7,
					'displayName' : 'Menu 7',
					'type': 3
				},
				{
					'id': 8,
					'displayName' : 'Menu 8',
					'type': 1
				},
				{
					'id': 9,
					'displayName' : 'Menu 9',
					'type': 2
				},
				{
					'id': 10,
					'displayName' : 'Menu 10',
					'type': 1
				},
				{
					'id': 11,
					'displayName' : 'Menu 11',
					'type': 2
				},
				{
					'id': 12,
					'displayName' : 'Menu 12',
					'type': 2
				},
				{
					'id': 13,
					'displayName' : 'Menu 13',
					'type': 1
				},
				{
					'id': 14,
					'displayName' : 'Menu 14',
					'type': 3
				}
			] 
		};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.menuClickItems = this.menuClickItems.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	menuClickItems(indexVal){
		console.log(indexVal);
	}

  	render() {
	    return (
	    	<div>
		        <p className={style.chk}>Click to get the full Modal experience!</p>

		        <Button
		          bsStyle="primary"
		          bsSize="small"
		          onClick={this.open}>
		          Launch demo modal
		        </Button>

		        <Modal show={this.state.showModal} onHide={this.close}>

		          	<Modal.Header closeButton>
		          		<Modal.Title>Modal heading</Modal.Title>
		          	</Modal.Header>

		          	<Modal.Body>
			            <h4 className="chk">Text in a modal</h4>
			            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
			            <h4>Popover in a modal</h4>			           
			            <h4>Tooltips in a modal</h4>			            
			            <hr />

			            <h4>Overflowing text to show scroll behavior</h4>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
			            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

			            <Child/>			            
		          	</Modal.Body>

		          	<Modal.Footer>
		            	<Button onClick={this.close}>Close</Button>
		          	</Modal.Footer>
		        </Modal>

		        <br/>
		        <br/>

		       	<BootStrapSwitch/> 	

		         <ButtonGroups/>

		        <MultiSelect/>

		        <StatusMenuBar dataMenu = {this.state.statusMenuBarData} menuClickItems = {this.menuClickItems} />
		    </div>
	    );    
  	}
}
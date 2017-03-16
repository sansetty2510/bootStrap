import React from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

export default class ChildPopUp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal : false
		};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
	} 

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	render() {
	    return (
	    	<div>
		        <p>Click to get the Child Modal experience!</p>

		        <Button
		          bsStyle="primary"
		          bsSize="small"
		          onClick={this.open}>
		          Launch Child Modal
		        </Button>

				
		        <Modal show={this.state.showModal} onHide={this.close}>

		          	<Modal.Header closeButton>
		          		<Modal.Title>Modal heading</Modal.Title>
		          	</Modal.Header>

		          	<Modal.Body>
			           <h4>Text in a modal</h4>
			            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
			            <h4>Popover in a modal</h4>			           
			            <h4>Tooltips in a modal</h4>			            
			            <hr />

			            <h4>Overflowing text to show scroll behavior</h4>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
			            
			            <ChildPopUp/>
		          	</Modal.Body>

		          	<Modal.Footer>
		            	<Button onClick={this.close}>Close</Button>
		          	</Modal.Footer>

		        </Modal>
		    </div>
	    ); 
	}
}

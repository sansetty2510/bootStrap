import React from 'react';
import MultiSelectButtons from './MultiSelectButtons';
import MultiSelectItemList from './MultiSelectItemList';
import PanelList from './PanelList';

import {Grid,Row,Col,Panel} from 'react-bootstrap';

export default class MultiSelect extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data : [
						{
							'id' : 1,
							'heading' : 'Panel heading 1',
							'content' : 'Panel content 1',
							'selected' : 'default'
						},
						{
							'id' : 2,
							'heading' : 'Panel heading 2',
							'content' : 'Panel content 2',
							'selected' : 'default'
						},
						{
							'id' : 3,
							'heading' : 'Panel heading 3',
							'content' : 'Panel content 3',
							'selected' : 'default'
						},
						{
							'id' : 4,
							'heading' : 'Panel heading 4',
							'content' : 'Panel content 4',
							'selected' : 'default'
						},
						{
							'id' : 5,
							'heading' : 'Panel heading 5',
							'content' : 'Panel content 5',
							'selected' : 'default'
						},
						{
							'id' : 6,
							'heading' : 'Panel heading 6',
							'content' : 'Panel content 6',
							'selected' : 'default'
						},
						{
							'id' : 7,
							'heading' : 'Panel heading 7',
							'content' : 'Panel content 7',
							'selected' : 'default'
						},
						{
							'id' : 8,
							'heading' : 'Panel heading 8',
							'content' : 'Panel content 8',
							'selected' : 'default'
						},
						{
							'id' : 9,
							'heading' : 'Panel heading 9',
							'content' : 'Panel content 9',
							'selected' : 'default'
						},
						{
							'id' : 10,
							'heading' : 'Panel heading 10',
							'content' : 'Panel content 10',
							'selected' : 'default'
						}
					]
		}
		this.selectAllBtnClick = this.selectAllBtnClick.bind(this);
		this.deSelectAllBtnClick = this.deSelectAllBtnClick.bind(this);
		this.saveBtnClick = this.saveBtnClick.bind(this);
		this.selectItemPanel = this.selectItemPanel.bind(this);
	}

	selectAllBtnClick(){
		let dataVal = this.state.data;

		dataVal.map(function(item,i){
			return item.selected = 'primary';
		});

		this.setState({dataVal});
	}

	deSelectAllBtnClick(){
		let dataVal = this.state.data;

		dataVal.map(function(item,i){
			return item.selected = 'default';
		});

		this.setState({dataVal});
	}

	saveBtnClick(){
		let selectedItems = [];
		this.state.data.map(function(item,i){
			if(item.selected === 'primary'){
				selectedItems.push(item);
			}
		});
		console.log(selectedItems);
	}

	selectItemPanel(indexVal){
		let dataVal = this.state.data;

		dataVal.map(function(item,i){
			if(item.id == indexVal){
				if(item.selected === 'default'){
					return item.selected = 'primary';
				}else{
					return item.selected = 'default';
				}
			}			
		});

		this.setState({dataVal});
	}

	render(){
		let self = this;
		return( 
			<div>
				<h3> Example for MultiSelect options </h3>
				<MultiSelectButtons selectAllBtnClick = {this.selectAllBtnClick}  deSelectAllBtnClick = {this.deSelectAllBtnClick} saveBtnClick = {this.saveBtnClick} />
				<h2>Panels</h2>
				<Grid>
					<Row>
						{
							this.state.data.map(function(item, i){
							  return <PanelList key = {i} panelData = {item} selectItemPanel = {self.selectItemPanel} />
							})
						}
					</Row>
				</Grid>
			</div>
		);
	}
} 
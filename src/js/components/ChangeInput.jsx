import React from 'react';

export default class ChangeInput extends React.Component{
	render(){
		return (
			<div>
				<input type='text' onChange={this.props.onChange} />
				<h1>{this.props.inputTxt}</h1>
			</div>	
			);
	}
}
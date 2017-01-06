import React from 'react';

export default class ChangeInput extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.inputText}</h1>
				<input type='text' onChange={this.props.update} />
			</div>	
			);
	}
}
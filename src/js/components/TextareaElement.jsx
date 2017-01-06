import React from 'react';

export default class TextareaElement extends React.Component{
	render(){
		return(
			<div>
				<textarea cols="20" rows="10" onKeyPress={this.props.onKeyPress}></textarea>
				<h1>{this.props.areaText}</h1>
			</div>	
			);
	}
}
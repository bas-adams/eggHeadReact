import React from 'react';

export default class TextareaElement extends React.Component{
	render(){
		return(
				<textarea value={this.props.areaText}  onChange={this.props.onChange} ></textarea>
			);
	}
}
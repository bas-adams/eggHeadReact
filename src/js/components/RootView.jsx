import React from "react";
import ChangeInput from './ChangeInput.jsx';
import TextareaElement from './TextareaElement.jsx';
import Button from './Button.jsx';
import Heart from './Heart.jsx';

export default class RootView extends React.Component {

	constructor(){
		super();
		this.state = {
			inputText: 'Default text from input',
			areaText: 'This is text from textarea'
		};

		this.updateInput = this.updateInput.bind(this);
	}

	updateInput( event ){
		this.setState({inputText: event.target.value.toUpperCase()});
	}

	updateArea( event ){
		this.setState({areaText: event.target.value});
	}

	render() {
		return (
			<div className="RootView">
				<ChangeInput inputText={this.state.inputText}  update={this.updateInput} />
				<TextareaElement areaText={this.state.areaTxt} onChange={this.updateArea.bind(this)} />
				<Button  buttonText='React'>
					<Heart />
				</Button>
			</div>
		);
	}
}

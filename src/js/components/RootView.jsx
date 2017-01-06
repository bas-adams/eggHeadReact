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
			areaText: '---'
		};

		this.updateInput = this.updateInput.bind(this);
		this.currentEvent = this.currentEvent.bind(this);
	}

	updateInput( event ){
		this.setState({inputText: event.target.value.toUpperCase()});
	}

	currentEvent( event ){
		this.setState({areaText: event.type});
	}

	render() {
		return (
			<div className="RootView">
				<ChangeInput inputText={this.state.inputText}  update={this.updateInput} />
				<TextareaElement onKeyPress={this.currentEvent} areaText={this.state.areaText} />
				<Button> I <Heart /> React </Button>
			</div>
		);
	}
}

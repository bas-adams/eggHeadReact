import React from "react";
import ChangeInput from './ChangeInput.jsx';


export default class RootView extends React.Component {

	constructor(){
		super();
		this.state = {txt: ''};

		this.updateInput = this.updateInput.bind(this);
	}

	updateInput( event ){
		this.setState({txt: event.target.value});
	}

	render() {
		return (
			<div className="RootView">
				<ChangeInput inputTxt={this.state.txt} onChange={this.updateInput} />
			</div>
		);
	}
}

import React from "react"

class StatefulGreeting extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit",
			count: 0,
		};
  }

	// Rule 1: Never update the state directly, use the setState method instead
	// Rule 2: Put any code in setState callback that needs to run after the state update
	// Rule 3: Use a callback function in setState with prevState if you need to update state based on previous state values

	handleClick() {
		this.setState((prevState, prevProps) => {
			console.log('Previous State:', prevState);
			console.log('Previous Props:', prevProps);
			return {
				introduction: prevState.introduction === "Hello!" ? "Gooodbye!" : "Hello!",
				buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
			};
		});
	}

	increment() {
		this.setState((prevState, prevProps) => {
			console.log('Previous State:', prevState);
			console.log('Previous Props:', prevProps);
			return {
				count: prevState.count + 1,
			};
		});
	}

  render() {
    return (
			<div>
				<h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
				<button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
				<button onClick={() => this.increment()}>Increment</button>
				<p>You've clicked {this.state.count} times</p>
			</div>
		);
  }
}

export default StatefulGreeting;
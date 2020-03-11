import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class LogInForm extends Component {

	submitLogin(e) {
		e.preventDefault();
		const { updateLogin } = this.props;
		const { un, pw } = this.refs;
		updateLogin({ email: un.value, passWord: pw.value });
	}
	createUser(e) {
		e.preventDefault();
		const { regEmail, regPw } = this.refs;
		console.log(regEmail, regPw);
	}

	toggleForm(){
		const {isRegistering, switchForms } = this.props;
		switchForms(isRegistering);
	}

	renderForm(){
			const { isRegistering } = this.props;
		if (isRegistering) {
			return (
				<div>
				<form onSubmit={this.createUser.bind(this)}>
					<input ref='regEmail' />
					<input ref='regPw' />
					<input type='submit' value='Register' />
				</form>
					<button onClick={toggleForm()}>Login instead?</button>
			</div>
			);
		} 

		return (
			<div>
				<form onSubmit={this.submitLogin.bind(this)}>
					<input ref='un' />
					<input ref='pw' />
					<input type='submit' value ='Login' />
				</form>
					<button onClick={toggleForm()}>Sign up!</button>
			</div>
		);
	}

	render() {
	<div>
		{this.renderForm}
	</div>
	}
}



export default connect(
	({ isRegistering }) => ({
		isRegistering
	}),
	actions
)(LogInForm);

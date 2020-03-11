import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './login-form';
import firebase from 'firebase';
import config from './firebaseConfig';

class MainComponent extends React.Component {
	componentDidMount() {
		firebase.initializeApp(config);
		}

	render() {
		const { email, passWord, errorMessage } = this.props;
		return (
			<div>
				<h1>React/Redux demo</h1>
				<p>un is {email}</p>
				<p>pw is {passWord}</p>
				<LogInForm />
				{errorMessage && <p>{errorMessage}</p>}
			</div>
		);
	}
}

export default connect(
	//Select your state -> props mappings here
	({ email, passWord, errorMessage }) => ({ email, passWord, errorMessage })
)(MainComponent);

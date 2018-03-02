import React, { Component } from 'react';
import './app.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            SessionId: '',
            errorMsg: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });

    }

    validateLogin(userData) {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/voting-app/login.php', {
                method: 'POST',
                body: JSON.stringify({
                        "username": this.state.username,
                        "password": this.state.password
                    })
            })
                .then((response) => {
                    return response.json();
                })
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }


    handleSubmit() {
        if (this.state.username && this.state.password) {
            this.validateLogin(this.state)
                .then((result) => {
                    let loginStatus = result;
                    this.setState({
                        SessionId: loginStatus.SessionId
                    })
                    if (loginStatus.status === true) {
                        this.props.history.push('/dashboard', { SessionId: this.state.SessionId, user: loginStatus.user });
                    } else {

                        this.setState({
                            errorMsg: true
                        })
                        this.props.history.push('/login');
                    }
                })
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="jumbotron border">
                    <div className="jumbotron-fluid">
                        <h2 className="login-title">Login Details</h2>
                    </div>
                    <label className="login-label">Username</label>
                    <input
                        type="text"
                        className="form-control form-control-success"
                        name="username"
                        placeholder="Enter your username.."
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
                    <label className="login-label">Password</label>
                    <input
                        type="password"
                        className="form-control form-control-success"
                        name="password"
                        placeholder="Enter your password.."
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                    <div>
                        <p className="error">{this.state.errorMsg ? 'Oops! Please provide a valid credentials' : ''}</p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-success mt-4 text-center"
                        name="login"
                        onClick={this.handleSubmit}>
                        Login
                    </button>
                </div >
            </div>
        );
    }
}
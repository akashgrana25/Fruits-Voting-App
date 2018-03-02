import React, { Component } from 'react';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/voting-app/logout.php', {
                method: 'POST'
            })
                .then(res => {
                    return res.json();
                }).then(function (response) {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                })
        })
    }


    render() {
        this.handleLogout()
            .then(response => {
                if (response.Status === true) {
                    this.props.history.push("/");
                }
            })
        return (
            <div>
                <h1>Logging out...</h1>
            </div>
        );
    }
}
import React, { Component } from 'react';

export default class LastVoted extends Component {

    render() {
        return (
            <div><span className="login-label"> Last Voted </span>
                <span className="badge badge-success">{this.props.fruitName}</span>
            </div>
        );
    }

}


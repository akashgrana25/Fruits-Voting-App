import React, { Component } from 'react';

import './app.css';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fruitId: '',
            voted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('http://ec2-52-201-227-81.compute-1.amazonaws.com/voting-app/fva-submitvote.php', {
            method: 'POST',
            body: JSON.stringify({
                "FRUIT_ID": this.state.fruitId,
                "SessionId": this.props.SessionId
            })
        }).then(res => {
            let response = res.json();
            return response;
        }).then(response => {
            this.setState({
                voted: true
            })
            this.props.onVoteDone(this.state.voted);
            this.props.onFruitSelected(this.state.fruitId);
            this.props.onVoteSubmit();

        }).catch(error => {
            console.log(error);
        })

    }

    handleChange(event) {
        let fruitId = event.target.value;
        this.setState({
            fruitId
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h5 className="login-label">Select your favorite fruit!</h5>
                <div className="list-group-item list-group-item-class">
                    <label>
                        <input
                            type="radio"
                            name="apple"
                            value="1"
                            checked={this.state.fruitId === "1"}
                            onChange={this.handleChange}
                        />
                        Apple
                            </label>
                </div>

                <div className="list-group-item list-group-item-class">
                    <label>
                        <input
                            type="radio"
                            name="Orange"
                            value="2"
                            checked={this.state.fruitId === "2"}
                            onChange={this.handleChange}
                        />
                        Orange
                            </label>
                </div>

                <div className="list-group-item list-group-item-class">
                    <label>
                        <input
                            type="radio"
                            name="banana"
                            value="3"
                            checked={this.state.fruitId === "3"}
                            onChange={this.handleChange}
                        />
                        Banana
                            </label>
                </div>

                <div className="list-group-item list-group-item-class">
                    <label>
                        <input
                            type="radio"
                            name="pineapple"
                            value="4"
                            checked={this.state.fruitId === "4"}
                            onChange={this.handleChange}
                        />
                        Pineapple
                            </label>
                </div>
                <button className="btn btn-primary mt-4" type="submit">Make your choice</button>
            </form>

        );
    }
}
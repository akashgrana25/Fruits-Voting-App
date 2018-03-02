import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app.css';

import RatingList from './ratingList';
import List from './list';
import LastVoted from './lastVoted';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SessionId: '',
            voted: false,
            fruitId: '',
            fruitName: ''
        }
        this.handleLastVoted = this.handleLastVoted.bind(this);
    }

    componentDidMount() {
        this.setState({
            SessionId: this.props.location.state.SessionId
        })
        this.handleLastVoted();
    }

    handleLastVoted() {
        fetch('http://ec2-52-201-227-81.compute-1.amazonaws.com/voting-app/fva-getvote.php', {
            method: 'POST',
            body: JSON.stringify({
                "SessionId": this.props.location.state.SessionId
            })
        }).then(res => {
            return res.json();
        }).then(response => {
            let fruitName = response.FRUIT_NAME;
            this.setState({
                fruitName
            })
        })

    }

    handleVote = (voted) => {
        this.setState({
            voted
        })
    }

    handleFruitSelect = (fruitId) => {
        this.setState({
            fruitId
        })
    }


    render() {
        return (
            <div> <span className="welcome float-right-welcome">Hello {this.props.location.state.user}!</span>
                <div className="container">
                    <div className="jumbotron border padding-top">
                        <Link to="/logout">
                            <button className="btn btn-danger mt-4 float-right" type="button">Logout</button>
                        </Link>
                        <RatingList voted={this.state.voted} />
                        <LastVoted fruitName={this.state.fruitName} />
                        {
                            this.state.voted
                                ? <p
                                    className="login-label">
                                    Thank you for your suggestion!
                                </p>
                                : <List
                                    SessionId={this.state.SessionId}
                                    onVoteDone={this.handleVote}
                                    onFruitSelected={this.handleFruitSelect}
                                    onVoteSubmit={this.handleLastVoted}
                                />
                        }

                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

export default class RatingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            votesList: [],
            voted: this.props.voted
        }
        this.getList = this.getList.bind(this);
        this.renderList = this.renderList.bind(this);
    }
    componentDidMount() {
        this.setState({
            voted: this.props.voted
        })
        this.getList();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.voted !== this.props.voted) {
            this.getList();
        }
    }

    getList() {
        axios.get('http://ec2-52-201-227-81.compute-1.amazonaws.com/voting-app/fva-index.php')
            .then(res => {
                const list = res.data;
                this.setState({
                    votesList: list
                })
            })
    }

    renderList() {
        const listItems = (this.state.votesList).map((listItem, key) => {
            return (
                <tr key={listItem.FRUIT_ID}>
                    <td>{listItem.FRUIT_NAME}</td>
                    <td>{listItem.VOTES}</td>
                </tr>
            );


        })
        return listItems;
    }

    render() {
        return (
            <table className="table">
                <thead className="thead-inverse">
                    <tr>
                        <th className="text-center" scope="row">FRUIT NAME</th>
                        <th className="text-center" scope="row">VOTES</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}
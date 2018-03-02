import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RatingList from './ratingList';

export default class MainPage extends Component {

    render() {
        return (
            <div className="container">
                <h2 className="text-center welcome display-4 ">Welcome!</h2>
                <hr />
                <div className="jumbotron text-center border ">
                    <RatingList />
                    <Link to="/login">
                        <button 
                            type="button" 
                            className="btn btn-success btn-lg mt-4 text-center">
                            Click here to Login!
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
} 
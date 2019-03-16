import React, { Component } from 'react';
import UserOutput from '../UserOutput/UserOutput';
import './User.css';

class userInput extends Component {
    state = {
        users : [
            { name: 'Chirag'}
        ]
    }

    changedNameHandler = (event) => {
        this.setState({
            users : [
                { name: event.target.value}
            ]   
        })
    }

    render() {
        return (
                <div className="divStyle">
                    <p>Test</p>
                    <UserOutput name={this.state.users[0].name}/>
                    <input type="text" onChange={this.changedNameHandler.bind(this)} value={this.state.users[0].name}/>
                </div>
        );
    }
}


export default userInput;
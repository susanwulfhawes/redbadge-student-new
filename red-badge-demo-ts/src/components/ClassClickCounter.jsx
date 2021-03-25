// Create a class version of the Functional Component
import React, { Component } from 'react';

class ClassClickCounter extends Component {
    constructor(props){
        super(props);
        this.state = {countValue: 5}
    }


    render() {
        return (
            <div>
                Hi from classclickcounter
                <button onClick={this.handleClick}>Click Me From Class</button>
            </div>
        )
 }
}

export default ClassClickCounter;
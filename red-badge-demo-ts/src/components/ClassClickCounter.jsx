// Create a class version of the Functional Component
import React, { Component } from 'react';

class ClassClickCounter extends Component {
    constructor(props){
        super(props);
        this.state = {countValue: this.props.initialValue}
    }
    handleClick = () => {
        this.setState({ countValue: this.state.countValue - 1});
    }

    render() {
        return (
            <div>
                <p>The total clicks left are {this.state.countValue}</p>
                <button onClick={this.handleClick}>Click Me From Class</button>
            </div>
        )
 }
}

export default ClassClickCounter;
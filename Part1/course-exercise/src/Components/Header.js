import React, { Component } from 'react';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = { course : props.course.name };
    }

    render() {
        return <h1>{this.state.course}</h1>
    }
}

export default Header;
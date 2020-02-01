import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    //like try catch block in javascript
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }
    //if theres an error display message else display regular content
    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good!</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry;
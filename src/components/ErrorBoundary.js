import React, { Component } from 'react';

// Catching errors!
class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    
}

componentDidCatch(error, info) {
    this.setState({ hasError: true })

}

render() {
    if (this.state.hasError){
        return <h1>Ooops, error detected!</h1>
    }
    // Will return anything in between the boundary
    return this.props.children

}
};

export default ErrorBoundary;
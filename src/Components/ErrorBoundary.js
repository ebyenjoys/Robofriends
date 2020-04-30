import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super()
    }

    state ={
        hasError:false
    }

    componentDidCatch() {
        this.setState({hasError:true})
    }
    render() {

        if(this.state.hasError=== true) {
            return <h1>Oops Somthing gone wrong here</h1>
        }
        return this.props.children;
    }
}

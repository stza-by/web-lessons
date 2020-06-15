import React, { Component } from 'react'

import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundary extends Component {
  
  state = {
    hasError: false
  }

  componentDidCatch() {
    console.log('i am here');
    this.setState({
      hasError: true
    })
  }
  
  render() {

    if(this.state.hasError) {
      return <ErrorIndicator/>
    }

    // try {
      return this.props.children;
    // } catch (error) {
    //   this.setState({hasError: true})
    // }
    
  }
}

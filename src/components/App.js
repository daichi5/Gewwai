import React, { Component } from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}
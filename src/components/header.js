import React, { Component } from 'react'
import HeaderMenu from './headerMenu'

const styles = {
  header: {
    textAlign: "center",
    position: "relative"
  },
  logo: {
    fontSize: 24,
    display: "inline-block",
    margin: "auto",
    height: "100%",
    lineHeight: "250%"
  }
}

export default class Header extends Component {
  
  render() {
    return (
      <header style={styles.header}>
        <h1 style={styles.logo}>ゲッワイ！</h1>
        <HeaderMenu />
      </header>     
    )
  }
}
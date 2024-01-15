import React, { Component } from 'react'
import Main_page from './pages/js/Main_page.js'
import Body from "./Body1"
import Main_persons from './pages/js/Main_persons.js'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Main_page/> */}
        {/* <Body/> */}
        <Main_persons/>  

      </div>
    )
  }
}

import React, { Component } from 'react'
import Main_page from './pages/js/Main_page.js'
import Body from "./Body1"
import Main_persons from './pages/js/Main_persons.js'
import Main_person_single from './pages/js/Main_person_single.js'
import Main_rest from './pages/js/Main_rest.js'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Main_page/> */}
        {/* <Body/> */}
         {/* <Main_persons/>   */}
         {/* <Main_person_single/> */}
         <Main_rest/>
      </div>
    )
  }
}

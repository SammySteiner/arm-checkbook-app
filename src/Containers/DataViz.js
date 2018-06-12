import React, { Component } from 'react'
import { getData } from '../api'

export default class DataViz extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    getData()
    // .then( data => { return console.log(data) })
  }

  render(){
    return(
      <div>
        <h3>DataViz</h3>
      </div>
    )
  }
}

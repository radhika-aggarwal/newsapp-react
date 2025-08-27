import React, { Component } from 'react'
import Loading from '../Loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <img src={Loading} alt="loading"/>
      </div>
    )
  }
}

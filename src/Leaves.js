import React, { Component } from 'react';
import leaves from './leaves.jpg'

export default class Leaves extends Component {

  render() {
    return(
      <>
        <img alt="Protect your investment" src={leaves} />
        <p>Protect your investment</p>
      </>
    )
  }
}

import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const url = this.props.poster

    return (
      <div className="card-front" style={{backgroundImage: `url(${url})`}}>
      </div>
    )
  }
}

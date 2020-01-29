// import React from "react";

// const Developer = props => {
//   console.log(this.props.dev)
//   return (
//     <div>
//       <h2>{this.props.name}</h2>
//       <h3>{this.props.email}</h3>
//     </div>
//   );
// };

// export default Developer;
import React, { Component } from 'react'

export default class Developer extends Component {
  render() {
    console.log(this.props.dev)
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
      </div>
    )
  }
}

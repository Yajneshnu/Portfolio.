// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Home from './Home'

// export default class Navbar extends Component {

// constructor(props){
//     super(props)
// }

//   render() {

//     return (
//       <div>
//         <button onClick={this.props.methods}>click</button>
//       </div>
//     )
//   }
// }
import React from 'react'

function Navbar(props) {
  const list=[
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    
  }]
  return (
    <div>
        <div>
        <button onClick={props.methods}>click</button>
        {
          list.map(name=><h2>{name.name}</h2>)
        }
      </div>
    </div>
  )
}

export default Navbar

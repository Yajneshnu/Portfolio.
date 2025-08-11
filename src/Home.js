// import React from 'react';
// import './Home.css';


// const Home = () => {
//   return (
//     <section className="home" id="home">
//         <button onClick={increment()}>click</button>
//       <div className="social">
//         <a href="https://github.com/yajnesh009/prot.git">
//           <i className="bx bxi-github"></i>
//         </a>
//         <a href="https://instagram.com/mr.yajna80801gshid=YmMyMTA2M2Y=">
//           <i className="bx bxi-instagram"></i>
//         </a>
//         <a href="https://instagram.com/mr.yajna80801gshid=YmMyMTA2M2Y=">
//           <i className="bx bxl-facebook"></i>
//         </a>
//       </div>
//       <div className="home-img">
//         <img src="https://cdn.glitch.global/a2d5a354-21e4-46c3-b866-966647dcd298/main.png?v=1699894363207" alt="" />
//       </div>
//       <div className="home-text">
//         <span>hello, I'm</span>
//         <h1>Yajnesh N U</h1>
//         <h2 className="cir">Analyst</h2>
//         <p>
//           "Started as a Front-End Developer, now a Product Analyst with a strong interest in the creative and analytical aspects of technology. Committed to continuous learning, process improvement, and delivering data-driven insights. Enthusiastic about exploring new tools and staying current with emerging technologies."
//         </p>
//         <a href="https://drive.google.com/file/d/1B45C&18RE1Bav1J4doqstZgtCc7C2YYp/view?usp=drivesdk" className="btn">Download CV</a>
//       </div>
//     </section>
//   );
// }

// export default Home

import React, { Component } from 'react'
import Navbar from './Navbar'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            message:'not click',
            pname:'method is ',
            name:'',
            list:'',
            coment:''
        }
      this.method=this.method.bind(this)
    }

    method(){
      alert(`sucessful ${this.state.pname}`)
    }

     increment(){
     this.setState(prevState=>({count:prevState.count+1}))
    }
    inc(){
  this.increment()
  this.increment()
  this.increment()
    }
    eventhand(){
this.setState(
{
  message:'you cliked'
}

)
console.log(this)
    }

handlename=event=>{
this.setState({name:event.target.value})
}
onSubmitform=event=>{
  alert(`${this.satae.name}`)
}
 
    render(){
      
  return (
    <div style={{textAlign:'center',padding:19}}>
        {/* <text>{this.state.count}</text>
        
      <button onClick={()=>this.inc()}>button inc</button>
      <text>{this.state.message}</text>
      <button onClick={()=>this.eventhand()}>click</button>
      <Navbar methods={this.method} /> */}
      <form onSubmit={this.onSubmitform}>
        <input type='text' value={this.state.name} onChange={this.handlename} ></input>
        <button type='submit'>submit</button>
      </form >
    </div>
  )
  }
}

export default Home

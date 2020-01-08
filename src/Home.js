import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
        <Navbar />
        <h2 style={{display:'flex', justifyContent:'center',alignItems:'center',height:'100vh'}}>Welcome to our application</h2>
        </div>
        );
    }
}
 
export default Home;
import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar';
class Category extends Component {
    state = { 
        isLoading:true,
        Categories:[]
     }

     async componentDidMount(){
         const response = await fetch('/api/categories');
         const body = await response.json();
         this.setState({Categories:body,isLoading:false});


     }
    render() { 
        const {Categories,isLoading} = this.state;
        if(isLoading)
           return (
           <div>
           <Navbar/>Loading.....</div>)
        return ( 
        <div>
        <Navbar/>
            <h2>Categories</h2>
            {
                Categories.map(
                    category =>
                   <div id={category.id}>{category.name} </div>
                )
            }
        </div> 
        );
    }
}
export default Category;
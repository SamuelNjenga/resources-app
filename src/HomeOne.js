import React, { Component } from 'react';
import {InfoConsumer} from './Components/context';
import Info from './Info';
import Navbar from './Components/layouts/Navbar';
class HomeOne extends Component {
    
    render() { 
        return ( 
          <div>< Navbar/> 
<div className="container">

    <div className ="row mt-5">
   
          <InfoConsumer>
                {
                    value =>  {
                        return value.info.map(item => {
                        return <Info key={item.id} item={item} />;
                    });
                    }
                }
            </InfoConsumer>
    </div>
</div>

</div> 
            
         );
    }
}
 
export default HomeOne;
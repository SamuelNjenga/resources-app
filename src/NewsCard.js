import React, { Component } from 'react';
import {InfoConsumer} from './Components/context';
import {Link} from 'react-router-dom';

class NewsCard extends Component {

    render() {
        const {id,newsTitle,newsText} = this.props.item;
        return (
            <InfoConsumer>
            {
                value => (
                    <div className="card container mt-2 mb-3 p-5">
                     <div className="card-body">
                         <h5 key={id} className="card-title">{newsTitle}</h5>
                         <p className="card-title">{newsText}</p>
                         <Link>Read More >></Link>
                     </div>   
                    </div>
                    )
            }
            </InfoConsumer>
        );
    }
}

export default NewsCard;
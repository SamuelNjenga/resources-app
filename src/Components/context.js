import React, { Component } from 'react';
import {placeInfo,reviews,detailInfo,news} from '../data'
const InfoContext = React.createContext();
class InfoProvider extends Component {

    state = {
info:placeInfo,
reviews:reviews,
detailInfo:detailInfo,
news:news
    }

    getItem = id => {
        const item = this.state.info.find(item => item.id ===id);
        return item
    }
    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return{
                detailInfo:item
            };
        });
    }

    render() {
        return (
           <InfoContext.Provider value={{
               info:this.state.info,
               reviews:this.state.reviews,
               detailInfo:this.state.detailInfo,
               news:this.state.news,
               name:this.state.name,
               avatar:this.state.avatar,
               comment:this.state.comment,
               headerText:this.state.headerText,
               headerSubTitle:this.state.headerSubTitle,
               headerTitle:this.state.headerTitle,
               maps:this.state.maps,
               handleDetail:this.handleDetail
           }}>
           {this.props.children}
           </InfoContext.Provider>
        );
    }
}
const InfoConsumer = InfoContext.Consumer;
export  {InfoProvider,InfoConsumer};
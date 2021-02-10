import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Link} from 'react-router-dom';

//function Detail({year,title, summary,poster, genres}){
class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {location, history}=this.props;
        
        if(location.state===undefined){ // 영화 링크를 통해 들어오지 않았다면 홈화면으로 보냄
            history.push('/');
        }
    }
    render(){
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
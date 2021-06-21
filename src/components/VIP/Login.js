import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dummyStyle, container } from '../CSSStyles';


export default class Login extends Component {
    render() {
        return (
          <div style={container}>
            <h1 style={dummyStyle}>
                <Link to={'/'}>Main page<br /><br /></Link>
                <Link to={'/jp'}>Main page 日本語<br /><br /></Link>
                <Link to={'/vip'}>VIP page<br/><br/></Link>
                <Link to={'/catalog'}>Catalog<br/><br/></Link>
                <Link to={'/docu'}>Documentary<br/><br/></Link>
            </h1>
          </div>
        )
    }
}

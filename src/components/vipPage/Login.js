import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dummyStyle, container } from '../CSSStyles';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";




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
                {/* <input /> */}
            </h1>
            {/* <button type="submit" style={loginStyleItem}>Logout</button> */}
          </div>
        )
    }
}

// export default Login;

// this below is needed for Heroku!
// Login.propTypes = {
//     auth: PropTypes.object.isRequired
//   };

// const mapStateToProps = state => ({
//     auth: state.auth
//   });

// export default connect(mapStateToProps, { logoutUser })(Login);
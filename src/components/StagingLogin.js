import React, { Component } from "react";
import { dummyStyle } from "./CSSStyles";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            errors: {},
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/vipaccess"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        console.log("on submit");
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
        console.log(userData.email, userData.password)
    };

    render() {
        const { errors } = this.state;

        return (
            <div style={container}>
                <h3 style={dummyStyle}>Morita Shiryū Exhibition Preview</h3>
                <h1 style={dummyStyle}>Staging Login</h1>
                <div style={loginStyle}>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div>
                            <input 
                                style={loginStyleItem} 
                                placeholder="email" 
                                onChange={this.onChange}
                                error={errors.email}
                                id="email"
                                type="email"
                            />
                        </div>
                        <div>
                            <input
                                style={loginStyleItem}
                                placeholder="password"
                                onChange={this.onChange}
                                error={errors.password}
                                id="password"
                                type="password"
                            />
                        </div>
                        <div>
                            <button style={loginStyleItem} type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default Login;

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);

const loginStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
};

const loginStyleItem = {
    margin: "5px",
    padding: "5px",
    borderRadius: "3px",
    border: "lightgrey 1px solid",
    fontFamily: "sans-serif",
    width: "260px",
};

const container = {
    margin: "auto",
    display: "block",
    textAlign: "center",
};

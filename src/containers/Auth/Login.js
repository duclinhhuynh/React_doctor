import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'linh',
            password: '123',
            isShowPassword: false,
        }
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value,   
        })
        console.log(event.target.value);
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value,   
        })
    }
    handleLogin = () => {    
        alert('heloo')
    }
    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input '>
                            <label>Username</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Enter your username'
                            value={this.state.username}
                            onChange={(event) => this.handleOnchangeUsername(event)}
                            ></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control'
                                placeholder='Enter your password' 
                                onChange={(event) => this.handleOnchangePassword(event)}
                                ></input>

                                <span
                                onClick={()=> {this.handleShowPassword()}}
                                >

                                <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 btn-login'>
                            <button onClick={()=> this.handleLogin()}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot Password ?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-other-login'>Or login with ?</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i class="fab fa-google g"></i>
                            <i class="fab fa-facebook-f f"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

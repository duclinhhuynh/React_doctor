import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import  {handleLoginApi}from '../../services/userService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
    handleLogin = async(username) => {    
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if(data && data.errCode!==0){
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errCode===0){
                this.props.userLoginSuccess(data.user)
                console.log('login suceeds');
            }
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage: error.response.data.message,
                    })
                }
            }
            console.log(error.response);
        }
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
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
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
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

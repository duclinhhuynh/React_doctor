import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import processLogout from '../../store/actions';
import {LANGUAGES} from "../../utils";
import {changeLanguageApp} from '../../store/actions/appActions'
import { FormattedMessage } from 'react-intl';

import './Header.scss';

class Header extends Component {
    handleChangeLanguage = (language) =>{
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        const { processLogout,language, userInfo } = this.props;
        console.log('checkout user infor:', userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span className='welcome'><FormattedMessage id="homeheader.welcome"/>{userInfo && userInfo.firstName ? userInfo.firstName : ' '}</span>
                    <span className={language === LANGUAGES.VI ? 'languages-vi active' : 'languages-vi'} 
                    onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>VN</span>
                    <span className={language === LANGUAGES.EN ? 'languages-en active' : 'languages-en'}  
                    onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>EN</span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    console.log('Redux State:', state);
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

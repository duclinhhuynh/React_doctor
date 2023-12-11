import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import { escape, escapeRegExp } from 'lodash';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }
    state = {

    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender')   
            console.log("check res:",res);
            if(res && res.errCode === 0 ){
                this.setState({
                    genderArr: res.data
                })
            }
            console.log("check res:",res);
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        console.log("state:", this.state);
        let genders = this.state.genderArr;
        let language = this.props.language;
        return (
            <div>
                <div className='user-redux'>
                    <div className="title" >User Redux</div>
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'><FormattedMessage id="manage-user.add"/></div>
                            <div className='col-3'>
                                <label>Email</label>
                                <input className='form-control col-3' type='email'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className='form-control col-3' type='password'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.firstName"/></label>
                                <input className='form-control col-3' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.lastName"/></label>
                                <input className='form-control col-3' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number"/></label>
                                <input className='form-control col-3' type='text'/>
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className='form-control col-3' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 && 
                                        genders.map((item, index) => {
                                            return (
                                            <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEns}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>Image</label>
                                <input type='text' className='form-control'/>
                            </div>
                            <div className='col-12'>
                            <button className='btn btn-primary my-3'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

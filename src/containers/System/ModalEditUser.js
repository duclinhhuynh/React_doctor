import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import { emitter } from '../../utils/emitter';
import { useState } from 'react';
class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }
    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hashpassword',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
        console.log('didmount edit modal',  user);
    }
    handleOnChangeInput = (event, id) => {
        console.log(event.target.value.id);
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })        
        console.log('copyState', copyState);
    }

    checkValideInput = () => {
        let isValue = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValue = false;
                break;
            }
        }
        return isValue;
    }

    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            this.props.editUser(this.state);
            console.log('data modal', this.state);
        }
    }
    render() {
        
        return (   
            <Modal  show= {this.props.isOpen}  onHide= {this.props.isclose }
            className = {'modal-user-container'}>
                <Modal.Header>
                    <Modal.Title>Modal Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-user-body'>
                                <div className='input-container'>
                                    <label>Email</label>
                                    <input type='text' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'email')}}
                                    value={this.state.email}
                                    disabled
                                    ></input>
                                </div>
                                <div className='input-container'>
                                    <label>Password</label>
                                    <input type='password' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'password')}}
                                    value={this.state.password}
                                    disabled
                                    ></input>
                                </div>
                                <div className='input-container'>
                                    <label>First Name</label>
                                    <input type='text' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'firstName')}}
                                    value={this.state.firstName}
                                    ></input>
                                </div>
                                <div className='input-container'>
                                    <label>Last Name</label>
                                    <input type='text' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'lastName')}}
                                    value={this.state.lastName}
                                    ></input>
                                </div>
                                <div className='input-container'>
                                    <label>Address</label>
                                    <input type='text' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'address')}}
                                    value={this.state.address}
                                    ></input>
                                </div>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary"className='px-3'
                        onClick={() => {this.handleSaveUser()}}
                    >
                        Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


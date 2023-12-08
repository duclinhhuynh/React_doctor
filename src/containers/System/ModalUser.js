import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }
    componentDidMount() {
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

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            this.props.createNewUser(this.state);
            console.log('data modal', this.state);
        }
    }
    render() {
        
        return (   
            <Modal  show= {this.props.isOpen}  onHide= {this.props.isclose }
            className = {'modal-user-container'}>
                <Modal.Header>
                    <Modal.Title>Create a user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-user-body'>
                                <div className='input-container'>
                                    <label>Email</label>
                                    <input type='text' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'email')}}
                                    value={this.state.email}
                                    ></input>
                                </div>
                                <div className='input-container'>
                                    <label>Password</label>
                                    <input type='password' 
                                    onChange={(event)=> {this.handleOnChangeInput(event, 'password')}}
                                    value={this.state.password}
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
                        onClick={() => {this.handleAddNewUser()}}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


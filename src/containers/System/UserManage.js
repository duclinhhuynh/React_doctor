import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService , editUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import { reject } from 'lodash';
import {emitter} from '../../utils/emitter'
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenEditModalUser: false,
            userEdit: {}
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async() => {
        let response = await getAllUsers('ALL');
        // console.log('get user from node.js', response);
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser= () =>{
        this.setState({
            isOpenModalUser: true
        })
    }
    handleEditUser =(user) => {
        this.setState({
            isOpenEditModalUser:true,
            userEdit: user
        })
    }
    doEditUser = async(user) => {
        try {
            let res = await editUserService(user);
            if(res && res.errCode === 0){
                this.setState({
                    isOpenEditModalUser:false
                })
                await this.getAllUsersFromReact()
            }else{
                alert(res.errCode)
            }
        } catch (error) {
            
        }
    }
    handleClose = () => {
        this.setState({
            isOpenModalUser: false,
            isOpenEditModalUser:false,
        })
    }
    createNewUser = async(data) => {
        try {
            let response = await createNewUserService(data);
            if(response && response.errCode !==0){
                alert(response.errMessage)
            }else{
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAT_MODAL_DATA', {'id': 'your id'})
            }
            console.log('respone create  user', response);
        } catch (error) {
            
        }
    }

    handleDeleteUser = async(user) =>{
        try {
            let res = await deleteUserService(user.id);
            if(res && res.errCode === 0 ){
                await this.getAllUsersFromReact();
            }else{
                alert(res.errMessage)
            }
        } catch (error) {
            reject(error)           
        }
    }
    /**
     * life cycle
     * 1 Run contructor init state -> init state
     * 2 Did mount (setstate): born; amount
     * 3 Render
     */


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser 
                isOpen = {this.state.isOpenModalUser}
                isclose = {this.handleClose}
                createNewUser = {this.createNewUser}
                />                
                {
                
                this.state.isOpenEditModalUser &&
                <ModalEditUser
                isOpen = {this.state.isOpenEditModalUser}
                isclose = {this.handleClose}
                currentUser = {this.state.userEdit}
                editUser = {this.doEditUser}
                />
                }
                <div className='title text-center'> manage user with react</div>
                <div className='mx-1 btn btn-primary px-3' 
                onClick={() => this.handleAddNewUser()}><i className='fas fa-plus'></i>Add new users</div>
                <div className='users-tablse mt-3 mx-1 '>
                <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr >
                        {
                            arrUsers && arrUsers.map((item, index) => {
                                return(
                                    <tr >

                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <tb>
                                                <button className='btn-edit mt-2' onClick={()=> this.handleEditUser(item)}><i className="fa-solid fa-pencil"></i></button>
                                                <button className='btn-delete mt-2' onClick={() => this.handleDeleteUser(item)}><i className="fa-solid fa-trash"></i></button>
                                            </tb>
                                    </tr>
                                )
                            })
                        }
                                     
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

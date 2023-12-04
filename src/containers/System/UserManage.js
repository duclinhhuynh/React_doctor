import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers: []
        };
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        console.log('get user from node.js', response);
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
       
    }
    /**
     * life cycle
     * 1 Run contructor init state
     * 2 Did mount (setstate)
     * 3 Render
     */

    render() {
        console.log('check render', this.state);
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers);
        return (
            <div className="user-container">
                <div className='title text-center'> manage user with react</div>
                <div className='users-tablse mt-3 mx-1'>
                <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                        {
                            arrUsers && arrUsers.map((item, index) => {
                                console.log('eric', item, index);
                                return(
                                    <tr>

                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <tb>
                                                <button className='btn-edit mt-2'><i className="fa-solid fa-pencil"></i></button>
                                                <button className='btn-delete mt-2'><i className="fa-solid fa-trash"></i></button>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

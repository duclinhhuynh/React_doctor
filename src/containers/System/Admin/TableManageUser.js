import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from '../../../store/actions';
class TableManageUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            usersRedux: [],
        };
    }
    componentDidMount() {
        this.props.fetchUserRedux();
        console.log("fetch user redux", this.props.fetchUserRedux());
    }
    componentDidUpdate( prevProps,prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }
    handleDelete = (user) => {
        console.log("user need delete:",user);
        this.props.deleteUser(user.id)
    }
    render() {
        // console.log('check all users:', this.props.listUsers);
        // console.log('check state', this.state.usersRedux);
        let arrUsers = this.state.usersRedux;
        return (
                <table id="customers">
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr >
                            {arrUsers && arrUsers.length > 0 
                            && arrUsers.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                            
                                    <td>
                                        <button className='btn-edit mt-2'><i className="fa-solid fa-pencil"></i></button>
                                        <button className='btn-delete mt-2'
                                            onClick={() => this.handleDelete(item)}
                                        ><i className="fa-solid fa-trash"></i></button>
                                    </td>   
                                     </tr>      
                                )
                            })
                            }

                    </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUser: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);

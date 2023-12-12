import actionTypes from './actionTypes';
import {getAllCodeService, createNewUserService} from '../../services/userService';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch(
                {type: actionTypes.FETCH_GENDER_START}
            )
            let res = await getAllCodeService('gender');
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data))
            }else{
                dispatch(fetchGenderFailed())             
            }
        } catch (error) {
            fetchGenderFailed()
        }
    }
  
}
export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if(res && res.errCode === 0){
                dispatch(fetchPositionrSuccess(res.data))
            }else{
                dispatch(fetchPositionFailed())             
            }
        } catch (error) {
            fetchPositionFailed()
        }
    }
  
}
export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data))
            }else{
                dispatch(fetchRoleFailed())             
            }
        } catch (error) {
            fetchRoleFailed()
        }
    }
  
}
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if(res && res.errCode === 0){
                dispatch(saveUserSuccess(res.data));
            }else{
                dispatch(saveUserFailed());             
            }
        } catch (error) {
            dispatch(saveUserFailed()) ;
        }
    }
}

export const saveUserSuccess = () => ({
    type: 'SAVE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
    type: 'SAVE_USER_FAILED'
})
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

export const fetchPositionrSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

// start doing end


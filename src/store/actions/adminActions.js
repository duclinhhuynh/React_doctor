import actionTypes from './actionTypes';
import {getAllCodeService} from '../../services/userService';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('gender');
            if(res && res.errCode === 0){
                console.log("hoi  get start", getState);
                dispatch(fetchGenderSuccess(res.data))
            }else{
                dispatch(fetchGenderFailed())             
            }
        } catch (error) {
            fetchGenderFailed()
            console.log('fetchGenderStart error', error);
        }
    }
  
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

// start doing end


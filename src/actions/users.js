import { CREATE_USER, UPDATE_USER, DELETE_USER, RETRIEVE_USERS, CREATE_CARE_MEMBER} from "./types/user"
import { user_initialState } from '../initialStates/user';

export const createUser = (data) => {
    console.log(data)
    return {type: CREATE_USER, payload: data }
}

export const createCareMember = (data) => {
    return {type: CREATE_CARE_MEMBER, payload: data }
}

export const reterieveEmployees = () => {
    return {type: RETRIEVE_USERS, payload: user_initialState }
}

export const updateUser = (id, data) => {
    return {type: UPDATE_USER, payload: id, data }
}

export const deleteUser = (id) => {
    return {type: DELETE_USER, payload: { id }}
}

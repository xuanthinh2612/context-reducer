import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants"


export const addJob = ()=> {
    return {
        type: ADD_JOB,
        payload: ""
    }
}

export const setJob = (payload)=> {
    return {
        type: SET_JOB,
        payload
    }
}

export const deleteJob = (payload)=> {
    return {
        type: DELETE_JOB,
        payload
    }
}
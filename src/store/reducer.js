import { ADD_JOB, SET_JOB } from "./constants";


function reducer(state, action) {

    switch(action.type) {
        case SET_JOB: 
            return({
                ...state,
                job: action.payload
            })
        case ADD_JOB:
            let newJobList = state.jobs
            return({
                job:"",
                jobs: [...newJobList, state.job]
            }) 
        default: 
            throw new Error("action type invalid.")
    }
}


export default reducer
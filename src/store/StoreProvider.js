import { useReducer } from "react";
import StoreContext from "./StoreContext";
import reducer from './reducer';
import { initState } from './constants';
import logger from "./logger";


function StoreProvider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const value = {
        state, 
        dispatch
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider
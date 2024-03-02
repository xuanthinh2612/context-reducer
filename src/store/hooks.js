import { useContext} from 'react';
import StoreContext from './StoreContext';

export function useStore() {
    const {state, dispatch} =  useContext(StoreContext)
    return {state, dispatch}
}


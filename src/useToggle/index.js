import { useReducer } from 'react';
import toggleReducer from './reducer';

const useToggle = (init) => {
    return useReducer(toggleReducer, !!init);
};

export default useToggle;
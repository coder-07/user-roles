import React, { createContext, useReducer } from 'react';
import { RoleReducer } from '../reducers/RoleReducer';

export const RoleContext = createContext()

const RoleContextProvider = (props) => {
    const [rolesList, dispatch] = useReducer(RoleReducer, [{
        name: 'Employee',
        id: 1
    }]);
    
    return (
        <RoleContext.Provider value={{dispatch, rolesList}}>
            {props.children}
        </RoleContext.Provider>
    );
}
 
export default RoleContextProvider;
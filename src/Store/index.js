import {createContext} from 'react';
export {Reducer} from './Reducer';
export const InitState = {
    Videos: [],
    Selected:{},
    loading: true
 }// Interface for Context Api
 
export const Store = createContext(null);
export const AppContextProvider = Store.Provider;
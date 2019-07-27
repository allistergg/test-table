import {FETCH_PERSONS_ERROR, FETCH_PERSONS_REQUEST, FETCH_PERSONS_SUCCESS} from './actions';
import {Person} from './App';
import {Reducer} from 'redux';


export interface PersonAction {
  type: String
  data: Person[],
  error: String
}

export interface PersonState {
  persons: Person[],
  loading: boolean,
  error: String
}

const initialState: PersonState = {
  persons: [],
  loading: false,
  error: ''
}
export const reducer: Reducer<PersonState, PersonAction> = (state = initialState, action: PersonAction) => {
  
  switch (action.type) {
    case FETCH_PERSONS_REQUEST:
      return {
        ...state, 
        loading: true
      }
    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.data,
        loading: false
      }
    case FETCH_PERSONS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
  }
  
  
  return state;
}

export default reducer;
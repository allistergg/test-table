import { Person } from './App';
import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PersonState, PersonAction } from './reducer';
import axios from 'axios'


export const FETCH_PERSONS_REQUEST = 'FETCH_PERSONS_REQUEST';
export const FETCH_PERSONS_ERROR = 'FETCH_PERSONS_ERROR';
export const FETCH_PERSONS_SUCCESS = 'FETCH_PERSONS_SUCCESS';

export const fetchPersonsRequest = () => ({
  type: FETCH_PERSONS_REQUEST
});

export const fetchPersonsError = (error: String) => ({
  type: FETCH_PERSONS_ERROR,
  error
});

export const fetchPersonsSuccess = (data: Person[]) => ({
  type: FETCH_PERSONS_SUCCESS,
  data
});

export const fetchPersons: ActionCreator<
  ThunkAction<Promise<any>, PersonState, null, PersonAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchPersonsRequest());
      const response = await axios('https://jsonplaceholder.typicode.com/users');
      console.log('response', response);
      let newData = [];
      for (let person of response.data) {
        newData.push({
          name: person.name,
          email: person.email,
          city: person.address.city,
          company: person.company.name
        });
      }
      dispatch(fetchPersonsSuccess(newData));
    } catch (err) {
      console.error(err);
      dispatch(fetchPersonsError(err));
    }
  };
};


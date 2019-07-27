import { FETCH_PERSONS_REQUEST, FETCH_PERSONS_SUCCESS, FETCH_PERSONS_ERROR } from './actions';
import { fetchPersonsRequest, fetchPersonsSuccess, fetchPersonsError, fetchPersons} from './actions'
import { Person } from './App';



describe('Sync Actions', () => {

  it('fetchPersonsSuccess', () => {
    const data: Person[] = [
      {
        name: "John",
        email: "john@email.com",
        company: "JohnCo",
        city: "Johnville"
      },
      {
        name: "Jim",
        email: "jim@email.com",
        company: "JimCo",
        city: "Jimville"
      }
    ]
    const action = fetchPersonsSuccess(data);
    expect(action.type).toEqual(FETCH_PERSONS_SUCCESS);
    expect(action.data).toEqual(data);
  });

  it('fetchPersonsRequest', () => {
    const action = fetchPersonsRequest()
    expect(action.type).toEqual(FETCH_PERSONS_REQUEST);
  });


  it('fetchPersonsError', () => {
    const error = 'CATASTROPHE';
    const action = fetchPersonsError(error);
    expect(action.type).toEqual(FETCH_PERSONS_ERROR);
    expect(action.error).toEqual(error);
  });

});
import reducer from './reducer';

const data = [
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

describe('DEFAULT', () => {
  it('Should return initial state if unknown action type', () => {
    let state;
    state = reducer(state, { type: '_UNKNOWN', error: '', data: [] });
    expect(state).toEqual({
      loading: false,
      persons: [],
      error: ''
    })
  })
})

describe('FETCH_PERSONS_REQUEST', () => {
  it('Should set loading to true', () => {
    let state;
    state = reducer(state, { type: 'FETCH_PERSONS_REQUEST', error: '', data: [] });
    expect(state).toEqual({
      loading: true,
      persons: [],
      error: ''
    })

  });
});


describe('FETCH_PERSONS_ERROR', () => {
  it('Should set error and set loading false', () => {
    let state;
    state = reducer(state, { type: 'FETCH_PERSONS_ERROR', error: 'BAD STUFF', data: [] });

    expect(state).toEqual({
      loading: false,
      persons: [],
      error: 'BAD STUFF'
    });
  });
});

describe('FETCH_PERSONS_SUCCESS', () => {
  it('Should set person data, error to null, and loading to false', () => {
    let state;
    state = reducer(state, { type: 'FETCH_PERSONS_SUCCESS', error: '', data: data });

    expect(state).toEqual({
      persons: data,
      loading: false,
      error: ''

    })
  })
});
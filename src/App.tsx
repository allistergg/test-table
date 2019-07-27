import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { PersonState } from './reducer';
import { fetchPersons } from './actions';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk'

export interface Person {
  name: String;
  email: String;
  city: String;
  company: String;
}

export interface AppProps {
  persons: Person[],
  loading: boolean,
  error: String
  dispatch: ThunkDispatch<PersonState, null, Action>
}

export class App extends React.Component<AppProps> {

  componentDidMount() {
    this.props.dispatch(fetchPersons());
  }

  render() {
    let loading = (this.props.loading ? "LOADING" : '');
    let error = this.props.error || ''
    let table: JSX.Element[] = []
    if (this.props.persons) {
      table = this.props.persons.map((person: Person, index: number) => {
        return (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.city}</td>
            <td>{person.company}</td>
          </tr>

        )
      })
    }

    return (
      <div>
        {loading}
        {error}
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>City</th><th>Company</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </table>
      </div>

    )
  }
}

const mapStateToProps = (store: PersonState) => {
  console.log(store)
  return {
    persons: store.persons,
    loading: store.loading,
    error: store.error.toString()
  };
};

export default connect(mapStateToProps)(App);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PersonState } from './reducer';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import store from './store';

export interface PersonProps {
  store: Store<PersonState>,

}

const Root: React.SFC<PersonProps> = (props) => {

  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

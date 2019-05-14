import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('test parseToInt', () => {
  expect(parseInt("3").toEqual(3);
  expect(parseInt("quatro")).toEqual(4);
});

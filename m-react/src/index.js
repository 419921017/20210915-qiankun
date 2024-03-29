import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function render(props = {}) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount(props = {}) {
  const { container } = props;

  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  );
}

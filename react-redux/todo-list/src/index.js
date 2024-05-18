import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

// Redux 상태가 변경될 때마다 로컬 스토리지 업데이트
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state));
});

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

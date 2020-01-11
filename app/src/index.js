import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Todo from './components/main';

const taskList = ['TaskA','TaskB','TaskC']
// Todo Componentでtasksプロパティを使える
ReactDOM.render(<Todo tasks={taskList}/>, document.getElementById('root'));
serviceWorker.unregister();

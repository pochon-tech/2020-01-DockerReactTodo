import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Todo from './components/main';

const tasks = localStorage.getItem('tasks')
const taskList = JSON.parse(tasks) || []

// Todo Componentでtasksプロパティを使える
ReactDOM.render(<Todo tasks={taskList}/>, document.getElementById('root'));
serviceWorker.unregister();

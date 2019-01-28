import React from 'react';   //语法
import ReactDOM from 'react-dom';  //将组件渲染到Dom上
// App大写字母都是组建
import TodoList from './TodoList';

// 加载App组建，然后将app组建挂载到root上
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

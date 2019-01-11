import React, { Component } from 'react';
import TodoItem from "./TodoItem"
// 是在定义一个React组件  //JSX只能写表达式  
class TodoList extends Component {   //等价于：class App extends React.Component  this指的是TodoList组件
  constructor(props){
    super(props)
    this.state={
      list:['learnReact','learEnglish'],
      inputValue:''
    }
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleButtonClick(){
    this.setState({
      // list:[...this.state.list,'hello world']
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleItemClick(index){
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({list})   //ES6的写法
  }
  render() {
    return (
      <div>
        <div>        
          <input value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleButtonClick.bind(this)}>add</button>   
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <TodoItem content={item}/>
              // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default TodoList;

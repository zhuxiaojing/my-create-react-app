import React from 'react'
class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        const{deleteItem}=this.props
        deleteItem(this.props.index)
    }
    render (){
        const {content}=this.props
        return (
            <li onClick={this.handleClick.bind(this)}>{content}</li>
        )
    }
}
export default TodoItem
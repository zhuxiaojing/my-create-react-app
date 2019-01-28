import React ,{Component}from 'react'
class TodoItem extends Component{
    handleDelete(){
        const{deleteItem}=this.props;
        deleteItem(this.props.index)
    }
    render () {
        return (
            <li onClick={this.handleDelete.bind(this)}>{this.props.content}</li>
        )
    }
}
export default TodoItem
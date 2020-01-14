import React, { Component, FormEvent, ChangeEvent } from 'react'

class TodoProps {
    constructor(addItem: (e: FormEvent<HTMLFormElement>) => void, 
                            inputElement:React.RefObject<HTMLInputElement>,
                            handleInput:(e:ChangeEvent<HTMLInputElement>) => void,
                            currentItem: {text:string, key: string}) {
        this.addItem = addItem;
        this.inputElement = inputElement;
        this.handleInput = handleInput;
        this.currentItem = currentItem;
    }
    addItem: (e: FormEvent<HTMLFormElement>)=>void;
    inputElement: React.RefObject<HTMLInputElement>;
    handleInput: (e:ChangeEvent<HTMLInputElement>) => void;
    currentItem: {text:string, key: string};
}

class TodoState {

}

class TodoList extends Component<TodoProps, TodoState> {

    render() {
    return (
        <div className="todoListMain">
        <div className="header">
            <form onSubmit={this.props.addItem}>
            <input placeholder="Task" ref = {this.props.inputElement} value={this.props.currentItem.text} onChange={this.props.handleInput} />
            <button type="submit"> Add Task </button>
            </form>
        </div>
        </div>
    )
    }
}
export default TodoList;
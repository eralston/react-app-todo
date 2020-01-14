import React, { Component, FormEvent, ChangeEvent } from 'react';

class ToDoItemsProps {
    constructor(entries: {text:string, key:string}[], deleteItem:(e:string) => void) {
        this.entries = entries;
        this.deleteItem = deleteItem;
    }
    entries: {text:string, key:string}[];
    deleteItem: (e:string) => void;
}

class ToDoItemsState {

}

class TodoItems extends Component<ToDoItemsProps, ToDoItemsState> {
    createTasks = (item:{text:string, key: string}) => {
        return <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}</li>
    }
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return <ul className="theList">{listItems}</ul>;
    }
}

export default TodoItems;
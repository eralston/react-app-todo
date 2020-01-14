import React, { Component, FormEvent, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import ToDoItems from './ToDoItems';

class AppProps {

}

class AppState {
  constructor(items: {text:string, key:string}[], currentItem: {text:string, key:string}) {
    this.items = items;
    this.currentItem = currentItem;
  }

  items: {text:string, key:string}[];
  currentItem: {text:string, key:string};
}

class App extends Component<AppProps, AppState> {

  inputElement: React.RefObject<HTMLInputElement>;

  constructor() {
    super({});
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
    this.inputElement = React.createRef<HTMLInputElement>()
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now().toString() }
    this.setState({ currentItem })
  }

  addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = (key:string) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} 
          inputElement={this.inputElement} 
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
        <ToDoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
 }

export default App;

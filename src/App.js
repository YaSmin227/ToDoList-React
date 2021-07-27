import React, { Component } from 'react'
import './App.css';
import Additems from './components/Additems/Additems'
import TodoList from './components/Todolist/Todolist'

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'nour', age: 23 },
      { id: 2, name: 'Ali', age: 22 },
      { id: 3, name: 'Youssef', age: 24 }
    ]
  }
  // deletItemfindIndex = (id) => {
  //   const items = this.state.items;
  //   const deleteditem = items.findIndex(item => item.id === id)
  //   items.splice(deleteditem, 1)
  //   this.setState({ items })
  //   // console.log(id)
  // }
  deletItemfilter = (id) => {
    const items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })

  }
  allitems = (item) => {
    let counter = this.state.items.length;
    item.id = counter + 1;
    console.log(item.id)
    const allItems = this.state.items
    allItems.push(item)
    this.setState({ allItems })
  }
  render() {
    return (
      <div className="App ">
        <h1>ToDo</h1>
        <TodoList items={this.state.items} deletItemfilter={this.deletItemfilter} deletItemfindIndex={this.deletItemfindIndex} />
        <Additems allitems={this.allitems} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import tick from './image/tick.svg';
import classNames from 'classnames';
import TodoItem from './components/TodoItem';
import Couter from './components/Couter';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isRemove: false,
      statusFilter: 'all',     // active completed
      newState : '',
      todoItems: [
        {title: "Đi chợ", isComplete: true},
        {title: "Mua đồ ăn", isComplete: false},
        {title: "Đi đá bóng", isComplete: false}
      ]
    }

    this.elementInput = React.createRef();

    this.onAddItem = this.onAddItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRenderSwitch = this.onRenderSwitch.bind(this);

    
  }

  componentDidMount () {
    this.elementInput.current.focus();
  }

  onItemClicked (item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);    // Vị trí của item đc click trong mảng
      this.setState({ 
        todoItems: [
          ...todoItems.slice(0, index),        // Tránh immutablility (sao chép cạn dẫn đến thay đổi thuộc tính của object ban đầu)
          {
            ...item, isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
          ]
       });
    }
  }

  onAddItem (event) {
    let text = event.target.value;
    if ( event.keyCode === 13 ) {
      if ( text && text.trim() ) {
        let todoItems = this.state.todoItems;
        this.setState ({
          newState: '',
          todoItems: [
            {title: text, isComplete: false},
            ...todoItems
          ]
        });
      }
    }
  }

  onChange (event) {
    this.setState({
      newState: event.target.value
    })
  }

  onRenderSwitch (filterString) {
    
    let { todoItems } = this.state;
    switch (filterString) {
      case "all":
        return todoItems;
      break;
      case "active":
        return todoItems.filter( (item) => {
          return !item.isComplete;
        })
      break;
      default:
      return todoItems.filter( (item) => {
          return item.isComplete === true;
        })
      break;
    }
  }

  onFilter (filterString) {
    return (event) => {
      this.setState({
        statusFilter: filterString,
        todoItems: this.onRenderSwitch(filterString)
      });
    }
  }

  removeComponent () {
    this.setState ({
        isRemove: !this.state.isRemove
    })
  }

  componentDidUpdate () {
    console.log("App - Did update");
  }
  
  render() {
    console.log("App render");
    const {todoItems, newState} = this.state;
    return (
      <div className="App">
        <button onClick={ () => this.removeComponent() }>Remove Component</button>
        {!this.state.isRemove && <Couter></Couter>}
        <div className="Header">
          <img src={tick} alt="none" width={32} height={32}/>
          <input 
            type="text"
            placeholder="Add a new item"
            value={newState}
            onChange={this.onChange}
            onKeyUp={this.onAddItem}
            ref={this.elementInput} />
        </div>
        {
          todoItems.length > 0 && todoItems.map( (item, index) => 
            <TodoItem key={index}
              item={item}
              onClick={this.onItemClicked(item)} /> )
        }
        {
          todoItems.length === 0 && 'Nothing here'
        }
        <div className="Footer">
        <span className="todo-count">{this.state.todoItems.length} Item</span>
          <ul className="filter">
            <li>
                <a 
                  className={classNames({
                    selected: this.state.statusFilter === "all"
                  })}
                  onClick={this.onFilter('all')}>All</a>
                <a 
                  className={classNames({
                    selected: this.state.statusFilter === "active"
                  })}
                  onClick={this.onFilter('active')}>Active</a>
                <a 
                  className={classNames({
                    selected: this.state.statusFilter === "complete"
                  })}
                  onClick={this.onFilter('complete')}>Complete</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

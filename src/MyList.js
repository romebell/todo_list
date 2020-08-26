import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super();
    this.state = {
      todoItemArray: props.theList,
      newItem: ''
    };
  }

  clearList(e) {
    console.log('Clear list!');
    this.setState({
      todoItemArray: []
    });
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  addItem(e) {
    console.log('Add item!');
    console.log('Before setState of newItem',this.state.newItem);
    e.preventDefault();
    const newArray = this.state.todoItemArray;
    newArray.push(this.state.newItem);

    this.setState({
      todoItemArray: newArray,
      newItem: ''
    });
    
  }
  
  render() {
    const todoItems = this.state.todoItemArray.map((t, idx) => {
      return <ListItem doThis={t} key={idx} />;
    });
    return (
      <div>
        <h1>Things that I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
            placeholder="Add a new item"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add item!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finish List!!</button>
      </div>
    )
  }
}

export default MyList;
import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    const todoItems = this.props.theList.map((t, idx) => {
      return <ListItem doThis={t} key={idx} />;
    });
    return (
      <div>
        <h1>Things that I should stop procrastinating:</h1>
        <ul>
          <ListItem doThis={"Buy some cookies and cream ice cream"} />
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList;
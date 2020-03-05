//import React, { Component } from 'react';
import React, { Component } from 'react'
import List from './List'
//import './List.css';
import STORE from './STORE'
import './List.css'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

class App extends Component {
 // static defaultstate = {
   // store: {
    //  lists: [],
    //  allCards: {},
   // }
//};
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    const { lists, allCrads } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCrads, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCrads: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    const newCrad = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCards
        }
      }
    })
  };


    render() {
      const { store } = this.props
      const { store } = this.state
      return (
        <main className='App'>
        <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List
            key={list.id}
            id={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            onClickDelete={this.handleDeleteCard}
            onClickAdd={this.handleDeleteCard}
            onClickAdd={this.handleAddCard}
          />
        ))}
      </div>
    </main>
   );
  }
}
export default App;

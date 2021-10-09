import React, { Component } from 'react';
import Container from './components/Container';
import SvodkaList from './components/SvodkaList';

import styles from './app.module.scss';

class App extends Component {
  state = {
    items: [
      { id: '6', month: 'ИЮНЬ', summ: 18000.0 },
      { id: '5', month: 'июль', summ: 15000.0 },
      { id: '4', month: 'АВГУСТ', summ: 30000.0 },
      { id: '3', month: 'СЕНТЯБРЬ', summ: 30000.0 },
      { id: '2', month: 'ОКТЯБРЬ', summ: 10000.0 },
      { id: '1', month: 'НОЯБРЬ', summ: 10000.0 },
    ],
  };

  getVisibleItems = () => {
    const { items } = this.state;
    return items.filter(item => item.month);
  };

  render() {
    const visibleItems = this.getVisibleItems();
    return (
      <Container>
        <p className={styles.title}>СВОДКА</p>
        <SvodkaList items={visibleItems} />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Card } from './Card';

class Board extends Component {
  render() {

    const mockIcons = [
      'fas fa-band-aid',
      'fas fa-cat',
      'fas fa-dragon',
      'far fa-clock',
      'fas fa-clock',
    ];

    const iconsComponents = mockIcons
      .map(iconName => <Card iconName={iconName} />);

    return (
      <div style={styles.boardContainer} >
        {iconsComponents}
        {iconsComponents}
      </div>
    );
  }
}

const styles = {
  boardContainer: {
    'min-height': '380px',
    'max-width': '460px',
    'display': 'flex',
    'flex-wrap': 'wrap',
    'border-color': '#fff',
    'border-width': '8px',
    'border-style': 'solid',
  },
  iconStyle: {
    'font-size': '36px',
    'color': '#fff',
  },
  cardContainer: {
    'max-height': '40px',
    'margin': '8px',
    'min-width': '70px',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'border-color': '#fff',
    'border-width': '2px',
    'border-style': 'solid',
  }
}


export { Board };

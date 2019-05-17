import React, { Component } from 'react';

class Card extends Component {
  state = {
    flipped: false,
  }

  _flipCard() {
    this.setState((prevState) => ({ flipped: !prevState.flipped }));
  }

  render() {
    const actualIconName =
      this.state.flipped ? this.props.iconName : 'fas fa-question';

    return (
      <div
        style={styles.cardContainer}
        onClick={this._flipCard.bind(this)}
      >
        <i style={styles.iconStyle} className={actualIconName} />
      </div>
    );
  }
}

const styles = {
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

export { Card };

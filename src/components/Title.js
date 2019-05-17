import React, { Component } from 'react';

class Title extends Component {
  render() {

    return (
      <p style={styles.textStyle}>
        {this.props.text}
      </p>
    );
  }
}

const styles = {
  textStyle: {
    'font-size': '36px',
    'color': '#fff',
  }
}


export { Title };

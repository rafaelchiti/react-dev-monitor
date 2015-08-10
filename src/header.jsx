import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    return (
      <div style={styles.main}>
        {this._renderMenuItems()}
      </div>
    );
  }


  _renderMenuItems() {
    return this.props.panels.map(panel => {
      let isSelected = panel.id === this.props.selected;
      let itemStyle = styles.menuItem;
      if (isSelected) itemStyle = {...itemStyle, ...styles.menuItemSelected};

      return (
        <span key={panel.id} style={itemStyle}
          onClick={() => this.props.onSelect(panel.id)}
        >
          {panel.title}
        </span>
      );
    });
  }

}


let styles = {
  main: {
    backgroundColor: '#F2F2F2',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px',
    padding: '5px',
    color: '#303030',
    height: '20px',
    widht: '100px'
  },
  menuItem: {
    cursor: 'pointer',
    padding: '5px',
    marginRight: '10px'
  },
  menuItemSelected: {
    color: 'blue'
  }
}
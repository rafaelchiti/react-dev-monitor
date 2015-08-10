import React, {Component} from 'react';


export default class Panel extends Component {

  render () {
    return <div style={styles.panel}>{this.props.children}</div>
  }

}

const styles = {
  panel: {
    padding: "5px",
    height: "200px",
    overflowY: "auto",
    overflowX: "hidden"
  }
}
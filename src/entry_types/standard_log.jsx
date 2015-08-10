import React, {Component} from 'react';

export default class StandardLog extends Component {

  render () {
    const {entry} = this.props;
    let style = styles.entry;

    if (entry.warning) style = {...style, ...styles.warning};

    return (
      <div style={style}>{this.props.entry.content}</div>
    )
  }

}

const styles = {
  entry: {
    padding: "3px"
  },
  warning: {
    backgroundColor: "#FFFBE5"
  }
}
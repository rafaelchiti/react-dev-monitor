import React, {Component} from 'react';
import JSONInspector from 'react-json-inspector';

export default class JSONEntry extends Component {

  render () {
    const {entry} = this.props;

    return (
      <div style={styles.entry}>
        <JSONInspector data={entry.content}></JSONInspector>
      </div>
    )
  }

}


const styles = {
  entry: {
    paddingTop: '10px',
    paddingBottom: '10px'
  }
}
import React, {Component} from 'react';
import Panel from './panel';
import StandardLog from './entry_types/standard_log'
import JSONEntry from './entry_types/json'

export default class ConsolePanel extends Component {

  render () {
    return (
      <Panel>
        {this._renderEntries()}
      </Panel>
    )
  }

  _renderEntries() {
    let data = this.props.panel.data.sort("ts");

    return data.map((entry, index) => {
      return this._renderEntry(entry, index);
    });
  }

  _renderEntry(entry, index) {
    if (!entry.type) {
      return <StandardLog key={index} entry={entry} />
    }

    if (entry.type === 'json') {
      return <JSONEntry key={index} entry={entry} />
    }
  }

}


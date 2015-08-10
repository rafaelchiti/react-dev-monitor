import React, {Component} from 'react';
import Header from './header';
import ConsolePanel from './console_panel';


export default class Monitor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPanel: props.data[0].id
    }
  }

  render() {
    return (
      <div style={styles.mainContainer}>
        <Header panels={this.props.data}
          selected={this.state.selectedPanel}
          onSelect={this._handleSelectPanel.bind(this)}
        />

        {this._renderContent()}
      </div>
    );
  }

  _handleSelectPanel(panelId) {
    this.setState({selectedPanel: panelId});
  }

  _renderContent() {
    let panel = this.props.data.filter(panel => panel.id === this.state.selectedPanel)[0];

    if (panel.type === 'console') {
      return <ConsolePanel panel={panel} />
    }
  }

}


let styles = {
  mainContainer: {
    borderRadius: '3px',
    boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.3)',
    padding: '5px',
    position: 'fixed',
    top: '50px',
    left: '50px',
    minWidth: '500px',
    minHeight: '200px'
  }
}
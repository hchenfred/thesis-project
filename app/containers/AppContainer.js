import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative;


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <View>
        <Text style={{ marginTop: 20 }}>
          this is the counter for testing!
          count: {this.props.simpleCounter}
        </Text>
        <TouchableHighlight onPress={() => {this.props.addCount() }}>
          <Text>click to add</Text>
        </TouchableHighlight>
      </View>
  }
}

function mapStateToProps(state) {
  return { simpleCounter: state.simpleCounter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

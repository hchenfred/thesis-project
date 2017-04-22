import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  friendContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e67e22',
    marginBottom: 10,
  },
  friendText: {
    marginLeft: 12,
    fontSize: 16,
    color: 'white',
  },
});

// When cancel button is clicked, it should delete the participant from DB
// and also remove it from the invited friend list

class Row extends Component {
  constructor(props) {
    super(props);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
  }

  onCancelButtonClick() {
    console.log(this.props.email);
  }

  render() {
    return (
      <View style={styles.friendContainer}>
        <Text style={styles.friendText}>
          {`Invitee: ${this.props.username} `}
        </Text>
        <TouchableOpacity onPress={() => this.onCancelButtonClick()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
     </View>
    );
  }

}

/*const Row = props => (
  <View style={styles.friendContainer}>
    <Text style={styles.friendText}>
      {`Invitee: ${props.username} `}
    </Text>
    <TouchableOpacity onPress={() => console.log(props.email)}>
      <Text>Cancel</Text>
    </TouchableOpacity>
  </View>
);*/

function mapStateToProps(state) {
  return {
    event: state.event,
    user: state.user,
    invitedFriends: state.invitedFriends,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);


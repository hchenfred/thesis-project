import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import util from '../lib/utility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    height: 40,
    width: 250,
    margin: 10,
  },
  buttonText: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
});

class Redirect extends Component {
  constructor(props) {
    super(props);
    this.handleEventDetails = this.handleEventDetails.bind(this);
    this.clearUserInput = this.clearUserInput.bind(this);
  }

  clearUserInput() {
    this.props.saveDate('');
    this.props.saveStartTime('');
    this.props.saveEndTime('');
    this.props.changeEventNam('');
    this.props.changeEventLoc('');
    this.props.changeEventDes('');
  }

  handleEventDetails() {
    console.log(this.props);
    const event = {
      name: this.props.event.name.slice(0),
      eventDate: this.props.event.eventDate.slice(0),
      location: this.props.event.location.slice(0),
      startTime: util.formatTime(this.props.event.startTime).slice(0),
      endTime: util.formatTime(this.props.event.endTime).slice(0),
      username: this.props.user.name,
      photourl: this.props.user.pic,
      id: this.props.event.eventId,
      description: this.props.event.description.slice(0),
    };
    this.clearUserInput();
    this.props.navigation.navigate('EventDetails', { ...event });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
          source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRY296dxsFIhtogq1IMHrdNl9oSZckvMUUceiRfWZC9Jbs280dodA' }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.clearUserInput();
            this.props.navigation.navigate('Event');
          }}
        >
          <Text style={styles.buttonText}>CREATE ANOTHER EVENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.buttonContainer}
           onPress={() => this.handleEventDetails()}
        >
          <Text style={styles.buttonText}>CREATED EVENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.event,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);


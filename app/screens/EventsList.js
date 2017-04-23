import React, { Component, PropTypes } from 'react';
import ReactNative, { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import endpoint from '../config/global';
import util from '../lib/utility';

const baseURL = endpoint.baseURL;

const {
  Text,
  View,
  ScrollView,
} = ReactNative;

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 15,
    color: '#2c3e50',
    fontSize: 15,
    fontWeight: '600',
  },
});

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEventsByCreator: [],
      invitedEventsByParticipantId: [],
    };
  }

  // when props changes (including props received from Redux store),
  // this function will be called. (nextProps must be put there)
  //TODO: this function is being called very often, need to change the logic
  componentWillReceiveProps(nextProps) {
    fetch(baseURL + '/events/createdBy/' + this.props.user.email)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log('active events are =========>', responseJson);
      this.setState({ activeEventsByCreator: responseJson });
    })
    .then(() => {
      return fetch(`${baseURL}/events/${this.props.user.id}`);
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log('invited events are ========>', responseJson);
      this.setState({ invitedEventsByParticipantId: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onLearnMore(event) {
    this.props.navigation.navigate('EventDetails', { ...event });
  }

  createFeed(events) {
    return events.map((item, i) => {
      if (!util.isEventPast(item)) {
        return (
          <ListItem
            key={i}
            title={item.name === null || item.name === undefined ? `EVENT ${i}` : `${item.name.toUpperCase()}`}
            subtitle={item.description === null || item.description === undefined ? 'No description' : `${item.description.substring(0, 40)}`}
            onPress={() => this.onLearnMore(item)}
            containerStyle={{ height: 50 }}
            avatar={{ uri: item.photourl }}
            roundAvatar={true}
          />
        );
      }
    });
  }

  render() {
    return (<ScrollView>
      {this.state.activeEventsByCreator ?
        <ScrollView>
          <Text style={styles.title}>Created Events</Text>
          <List>
            {this.createFeed(this.state.activeEventsByCreator)}
          </List>
        </ScrollView> : null
      }

      {this.state.invitedEventsByParticipantId ?
        <ScrollView>
          <Text style={styles.title}>Invited Events</Text>
          <List>
            {this.createFeed(this.state.invitedEventsByParticipantId)}
          </List>
        </ScrollView> : null
      }
    </ScrollView>);
  }
}

EventsList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    user: state.user,
    event: state.event,
    simpleCounter: state.simpleCounter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

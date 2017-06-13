// This is the component to display detailed information of each event
import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { Icon } from 'react-native-elements';
import { ActionCreators } from '../actions';
import endpoint from '../config/global';
import ActivityVote from './ActivityVote';

const baseURL = endpoint.baseURL;

const {
  ActionSheetIOS,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;

const styles = StyleSheet.create({
  description: {
    color: 'white',
  },
  textContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  eventName: {
    marginTop: 15,
    fontSize: 30,
    marginBottom: 2,
    color: 'white',
    fontWeight: '600',
    marginLeft: 20,
  },
  otherText: {
    margin: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    paddingLeft: 5,
  },
  hostImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 10,
  },
  rsvpContainer: {
    marginLeft: 20,
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rsvpText: {
    color: 'white',
    fontSize: 20,
    paddingRight: 25,
    fontWeight: '600',
  },
  inviteeTitle: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '600',
  },
  participant: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginLeft: 15,
    marginBottom: 5,
  },
  participantText: {
    color: 'white',
    marginLeft: 20,
  },
  proposalContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  proposeButton: {
    borderWidth: 0,
    borderRadius: 4,
    height: 28,
    width: 150,
    backgroundColor: '#2980b9',
    overflow: 'hidden',
  },
  proposalTitle: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  commentText: {
    textAlign: 'left',
    paddingLeft: 20,
    color: 'white',
  },
  commentButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 4,
    height: 28,
    width: 150,
    backgroundColor: '#2980b9',
    overflow: 'hidden',
  },
  strong: {
    fontWeight: '600',
  },
  inviteeContainer: {
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#27ae60',
    borderRadius: 5,
  },
});

const BUTTONS = [
  'Got an idea',
  'Need suggestions',
  'Cancel',
];

const propTypes = {
  saveActiveEvent: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  saveActivities: PropTypes.func.isRequired,
  saveComments: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  saveSuggestedActivityName: PropTypes.func.isRequired,
  saveSuggestedActivityLocation: PropTypes.func.isRequired,
};

class EventsItem extends Component {
  constructor(props) {
    super(props);
    this.props.saveActiveEvent(this.props.navigation.state.params);
    this.state = { participants: [], event: this.props.navigation.state.params };
    this.showActionSheet = this.showActionSheet.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  // Get activities and comments associated with the event
  componentDidMount() {
    fetch(`${baseURL}/events/${this.state.event.id}/alternativeActivities`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((resJson) => {
      // save activities to Redux store
      this.props.saveActivities(resJson);
    })
    .then(() => {
      fetch(`${baseURL}/events/${this.state.event.id}/comments`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(re => re.json())
      .then((resJ) => {
        // save comments to redux store
        this.props.saveComments(resJ.reverse());
      });
    })
    .then(() => {
      this.getParticipantsAndStatus();
    })
    .catch(err => console.log(err));
  }

  getParticipantsAndStatus() {
    const { id } = this.props.navigation.state.params;
    // request all events from db
    fetch(`${baseURL}/events/${id}/participants`)
    .then(response => response.json())
    .then((responseJSON) => {
      this.setState({ participants: responseJSON });
    });
  }

  rsvp() {
    return this.state.participants.map((participant, i) => {
      const { id, name } = this.props.navigation.state.params;
      return (
        <View key={i}>
          { this.props.user.id === participant.user_id && 
            <View style={styles.rsvpContainer}>
              <Text style={styles.rsvpText}>RSVP Here:</Text>
              <ModalDropdown
                dropdownStyle={{ width: 100 }}
                style={{ borderWidth: 0, borderRadius: 4, height: 28, width: 60, backgroundColor: '#2980b9', flex: 1, alignItems: 'center', marginRight: 40 }}
                textStyle={{ color: '#fff', fontSize: 20, fontWeight: '600' }}
                adjustFrame={style => this.adjustFrame(style)}
                options={['yes', 'no', 'maybe']}
                defaultValue={participant.status}
                defaultIndex={['yes', 'no', 'maybe'].indexOf(participant.status)}
                onSelect={(idx, value) => this.changeResponse(idx, value, participant, id, name)}
              />
            </View>
          }
        </View>
      );
    });
  }

  displayActivities() {
    if (this.props.activities.length === 0) { 
      return (
        <Text style={styles.commentText}>
          The are currently not Alternative activities proposed for this event. Click the new Activity button to suggest a new activity
        </Text>
      );
    } else if (this.props.activities.length === 1) {
      return (
        <Text style={styles.commentText}>
          There is is only one activity. Please add alternative activities to begin voting!
        </Text>
      )
    } else {
      return this.props.activities.map((activity, i) => {
        return (
          <ActivityVote
            key={i}
            activity={activity}
          />
        );
      });
    }
  }

  displayParticipants() {
    if (this.state.participants.length > 0) {
      return this.state.participants.map((participant, i) => {
        return (
          <View style={{ flexDirection: 'row', marginTop: 3, marginBottom: 3, backgroundColor: '#27ae60', padding: 5, borderRadius: 5, width: '98%', marginLeft: 'auto', marginRight: 'auto' }} key={i}>
            {participant.status === 'yes' && <Icon type="font-awesome" name="check" size={15} color="#e67e22" />}
            {participant.status === 'no' && <Icon type="font-awesome" name="close" size={15} color="#e67e22" />}
            {participant.status === 'maybe' && <Icon type="font-awesome" name="question" size={20} color="#e67e22" />}
            <Text style={styles.participant}>{participant.username}</Text>
          </View>
        );
      });
    } else {
      return (
        <Text style={styles.participantText}>No one has been invited to this event.</Text>
      );
    }
  }

  showComments() {
    const event = this;
    event.props.navigation.navigate('Comments', { name: event.props.activeEvent.name });
  }

  adjustFrame(style) {
    style.height -= 65;
    return style;
  }

  changeResponse(idx, value, participant, eventID, eventname) {
    fetch(`${baseURL}/events/participants/rsvp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId: eventID,
        participantId: participant.id,
        participantName: participant.username,
        participantStatus: value,
        eventName: eventname,
        participantPic: participant.photourl,
      }),
    })
    .then(() => {
      this.getParticipantsAndStatus();
    })
    .catch(err => console.log(err));
  }

  showActionSheet() {
    this.props.saveSuggestedActivityName('');
    this.props.saveSuggestedActivityLocation('');
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
    },
    (buttonIndex) => {
      if (buttonIndex === 1) {
        this.props.isSuggestedActivity(true);
        this.props.navigation.navigate('Suggester');
      } else if (buttonIndex === 0) {
        this.props.isSuggestedActivity(false);
        this.props.navigation.navigate('NewActivity');
      }
    });
  }

  render() {
    const { name, description, eventDate, location, startTime, endTime, username, photourl } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        {/*<Image
          style={styles.hostImage}
          source={{ uri: photourl }}
        />*/}
        <Text style={styles.eventName}>{name}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{description === null || description === undefined ? 'NO DESCRIPTION' : description}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textContainer}>
            <Icon type="font-awesome" name="user" size={20} color="#e67e22" /><Text style={styles.otherText}>{username}</Text>
          </View>
          <View style={styles.textContainer}>
            <Icon type="font-awesome" name="location-arrow" size={20} color="#e67e22" /><Text style={styles.otherText}>{location === null || location === undefined ? 'NO LOCATION' : location}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textContainer}>
            <Icon type="font-awesome" name="calendar" size={20} color="#e67e22"/><Text style={styles.otherText}>{ eventDate.substring(0, 10)}</Text>
          </View>
          <View style={styles.textContainer}>
            <Icon type="font-awesome" name="clock-o" size={20} color="#e67e22"/><Text style={styles.otherText}>{startTime.substring(0, 5)}-{endTime.substring(0, 5)}</Text>
          </View>
        </View>
        {this.rsvp()}
        <View style={styles.proposalContainer}>
          <Text style={styles.rsvpText}>Propose activity:</Text>
          <TouchableOpacity style={styles.proposeButton} onPress={() => this.showActionSheet()}>
            <Text style={styles.proposalTitle}>New Activity</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inviteeTitle}>
          Contending Activities
        </Text>
        <ScrollView>
          {this.displayActivities()}
        </ScrollView>
        <Text style={styles.inviteeTitle}>Invitees Status</Text>
        <ScrollView>
          {this.displayParticipants()}
        </ScrollView>
        <View>
          <Text style={styles.inviteeTitle}>
            Comments
          </Text>
          <Text style={styles.commentText}>
            There are currently <Text style={styles.strong}>{this.props.comments.length}</Text> comments for this event.{'\n'}
            Click the button below to view/comment.
          </Text>
          <TouchableOpacity style={styles.commentButton} onPress={this.showComments}>
            <Text style={styles.proposalTitle}>To Comments</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

EventsItem.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    simpleCounter: state.simpleCounter,
    user: state.user,
    activeEvent: state.activeEvent,
    suggestedActivity: state.suggestedActivity,
    activities: state.activities,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsItem);

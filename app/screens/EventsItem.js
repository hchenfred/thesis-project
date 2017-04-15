import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { ScrollView } from 'react-native';

const {
  View,
  Text,
  TouchableHighlight,
  Image 
} = ReactNative;

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://hst-friend-ly.herokuapp.com';
} else if (process.env.NODE_ENV === 'staging') {
  baseURL = 'https://hst-friend-ly-staging.herokuapp.com';
} else {
  baseURL = 'http:/127.0.0.1:5000';
}

class EventsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { participants: [] };
  }


  componentWillMount() {
    const { id } = this.props.navigation.state.params;

    // request all events from db
    fetch(baseURL + '/events/:' + id)
    .then(response => response.json())
    .then((responseJSON) => {
      this.setState({ participants: responseJSON });
    });
  }

  createParticipants() {
    return this.state.participants.map((participant, i) => {
      console.log(participant);
      return (
        <Text key={i}>{participant.username}</Text>
      );
    });
  }


  // radioButton(props) {
  //   return (
  //     <View
  //       style={[{
  //         height: 24,
  //         width: 24,
  //         borderRadius: 12,
  //         borderWidth: 2,
  //         borderColor: '#000',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }, props.style]}
  //     >
  //       {props.selected ?
  //         <View
  //           style={{
  //             height: 12,
  //             width: 12,
  //             borderRadius: 6,
  //             backgroundColor: '#000',
  //           }}
  //         />
  //           : null
  //       }
  //     </View>
  //   );
  // }

  render() {
    const { name, description, eventDate, location, startTime, endTime, username, photourl } = this.props.navigation.state.params;
    console.log('this.state.participants', this.state.participants);
    return (
      <ScrollView>
        <Text>{description}</Text>
        <Text>{eventDate}</Text>
        <Text>{location}</Text>
        <Text>Starts: {startTime}</Text>
        <Text>Ends: {endTime}</Text>
        <Text>Hosted by: {username}</Text>
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
          source={{ uri: photourl }}
        />
        <ScrollView>
          <Text>Participants</Text>
          {this.createParticipants()}
        </ScrollView>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { simpleCounter: state.simpleCounter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsItem);

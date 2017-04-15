import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} = ReactNative;

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://hst-friend-ly.herokuapp.com';
} else if (process.env.NODE_ENV === 'staging') {
  baseURL = 'https://hst-friend-ly-staging.herokuapp.com';
} else {
  baseURL = 'http:/127.0.0.1:5000';
}

const propTypes = {
  navigation: PropTypes.object.isRequired,
}

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeEventsByCreator: [] };
  }

  componentWillMount() {
    console.log('========will mount', this.props.user);
    // request all events from db
    // fetch(baseURL + '/events')
    // .then(response => response.json())
    // .then((responseJSON) => {
    //   this.setState({ events: responseJSON });
    // });
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps !== this.props) {
    //   console.log('yeah');
    // }
    console.log('========will receive props', this.props.user);
    fetch('http:127.0.0.1:5000/events/' + this.props.user.email)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('active events are =========>', responseJson);
      this.setState({ activeEventsByCreator: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // componentDidMount() {
  //   console.log('========eventList did mount', this.props.user);
  //   fetch('http:127.0.0.1:5000/events/' + this.props.user.email)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log('active events are =========>', responseJson);
  //     this.setState({ activeEventsByCreator: responseJson });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
 
  onLearnMore(event) {
    this.props.navigation.navigate('EventDetails', { ...event });
  }

  createFeed() {
/*<<<<<<< 3d6b46c10af24312a46adbad1b6c1b2e0562806b
    return this.state.events.map((item) => {
      console.log(item);
      return (
          <ListItem
            key={item.id}
            title={item.name.toUpperCase()}
            subtitle={item.description.substring(0, 40)}
            onPress={() => this.onLearnMore(item)}
          />
=======*/
    return this.state.activeEventsByCreator.map((item, i) => {
      console.log(item);
      return (
        <ListItem
          key={i}
          title={`${item.name.toUpperCase()}`}
          subtitle={`${item.description.substring(0, 40)}`}
          onPress={() => this.onLearnMore(item)}
        />
        );
      });
    }

  render() {
    return <View>
      <ScrollView>
        <List>
          {this.createFeed()}
        </List>
      </ScrollView>
      </View>
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

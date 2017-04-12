import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  datePicker: {
    width: 335,
    backgroundColor: '#27ae60',
    marginBottom: 20,
  },
  timePicker: {
    width: 335,
    backgroundColor: '#27ae60',
    marginBottom: 20,
  },
});

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      startTime: null,
      endTime: null,
    };
  }

  render() {
    return (
      <View>
        <DatePicker
          style={styles.datePicker}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          placeholder="Pick a date"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: 'white',
            },
          }}
          onDateChange={(date) => {this.props.saveDate(date);
          this.setState({date: date});}}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.state.startTime}
          mode="time"
          format="HH:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: 'white',
            },
          }}
          onDateChange={(startTime) => {this.props.saveStartTime(startTime);
          this.setState({startTime: startTime});
          }}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.state.endTime}
          mode="time"
          format="HH:mm A"
          confirmBtnText="Confirm"
          placeholder="SELECT END TIME"
          cancelBtnText="Cancel"
          minuteInterval={10}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: 'white',
            },
          }}
          onDateChange={(endTime) => {this.props.saveEndTime(endTime);
            this.setState({endTime: endTime});
          }}      
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { event: state.event };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker);

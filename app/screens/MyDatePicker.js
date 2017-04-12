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
          placeholder="SELECT A DATE"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
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
          onDateChange={(date) => this.props.saveDate(date)}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          placeholder="SELECT START TIME"
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
          onDateChange={(startTime) => this.props.saveStartTime(startTime)}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.state.time}
          mode="time"
          format="HH:mm"
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
          onDateChange={(endTime) => this.props.saveEndTime(endTime)}       
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

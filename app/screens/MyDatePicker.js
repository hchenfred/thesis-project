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
    marginBottom: 18,
  },
  timePicker: {
    width: 335,
    backgroundColor: '#27ae60',
    marginBottom: 18,
  },
});

class MyDatePicker extends Component {
  render() {
    return (
      <View>
        <DatePicker
          style={styles.datePicker}
          date={this.props.event.date}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          placeholder="PICK A DATE"
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
          onDateChange={(date) => { this.props.saveDate(date); }}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.props.event.startTime}
          mode="time"
          format="HH:mm A"
          confirmBtnText="Confirm"
          placeholder="SELECT START TIME"
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
          onDateChange={(startTime) => { this.props.saveStartTime(startTime); }}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.props.event.endTime}
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
          onDateChange={(endTime) => { this.props.saveEndTime(endTime); }}  
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.event,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker);

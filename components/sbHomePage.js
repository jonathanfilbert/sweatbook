import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getLastWorkout, getAppState } from '../app/actions/workoutAction';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAppState = this.toggleAppState.bind(this);
  }

  toggleAppState() {
    this.props.toggleApp();
  }

  render() {
    return (
      <LinearGradient colors={['#DE6262', '#FFB88C']} style={styles.backGround}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>SWEATBOOK</Text>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midTitle}>Your last workout: </Text>
        </View>
        <Text style={styles.date}>{this.props.lastWorkout}</Text>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={this.toggleAppState}>
            <Text style={styles.midTitle}>Start Workout</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    flex: 1
  },
  backGround: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    color: 'white'
  },
  midTitle: {
    fontSize: 25,
    color: 'white'
  },
  date: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  topContainer: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  midContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  bottomContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
    toggleApp: () => dispatch(getAppState())
  };
};

const mapStateToProps = state => {
  return {
    lastWorkout: state.workout.lastWorkout
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

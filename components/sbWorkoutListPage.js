import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class sbWorkoutListPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Exercise List</Text>
        </View>
        <View style={styles.pageContainer}>
          <ScrollView style={{ flex: 1, height: '100%' }}>
            {this.props.exercises.map((exercise, index) => (
              <View style={styles.result} key={index}>
                <Text style={{ fontSize: 20 }}>
                  {exercise.name.toUpperCase()}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'blue'
  },
  topContainer: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353b48',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18
  },
  pageContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'red'
  },
  result: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  topText: {
    fontSize: 25,
    color: 'white'
  },
  midContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  midText: {
    fontSize: 40,
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 50
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 300,
    backgroundColor: 'white'
  },
  plus: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  currentWorkoutContainer: {
    width: '100%',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    exercises: state.workout.exercises
  };
};

export default connect(
  mapStateToProps,
  null
)(sbWorkoutListPage);

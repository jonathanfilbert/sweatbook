import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class CurrentWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Current Workout</Text>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midText}>Add some exercise</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomNav}>
          <View>
            <Text style={styles.bottomNavbarText}>🏋️‍♂️</Text>
          </View>
          <View>
            <Text style={styles.bottomNavbarText}>🕵️‍♂️</Text>
          </View>
          <View>
            <Text style={styles.bottomNavbarText}>👱</Text>
          </View>
          <View>
            <Text style={styles.bottomNavbarText}>🏘️</Text>
          </View>
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
    backgroundColor: '#DE6262'
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
  topText: {
    fontSize: 25,
    color: 'white'
  },
  midContainer: {
    width: '100%',
    backgroundColor: '#DE6262',
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
  bottomNav: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  bottomNavbarText: {
    fontSize: 30,
    color: 'black',
    paddingHorizontal: 30
  }
});

export default CurrentWorkout;

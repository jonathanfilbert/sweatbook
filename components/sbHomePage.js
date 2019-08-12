import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.backGround}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>SWEATBOOK</Text>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midTitle}>Your last workout: </Text>
        </View>
        <Text style={styles.date}>Saturday Jun 12th</Text>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.midTitle}>Start Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    flexDirection: 'column',
    backgroundColor: '#DE6262'
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

export default HomePage;

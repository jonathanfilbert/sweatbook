import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class Fancy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Fancy</Text>
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 20,
    borderRadius: 50,
    width: width - 40,
    height: 40,
    left: 20
  }
});

export default Fancy;

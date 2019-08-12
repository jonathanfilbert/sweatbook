import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput
            placeholder={'Enter exercise name'}
            paddingRight={30}
            paddingLeft={30}
            style={styles.input}
          />
          <TouchableOpacity style={styles.closeButton}>
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
          <TouchableOpacity style={styles.result}>
            <Text style={styles.resultText}>Dumbell Press</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addContainer}>
          <TextInput
            style={styles.resultText}
            placeholder="create new exercise"
          />
          <TouchableOpacity>
            <Text style={styles.resultText}>➕</Text>
          </TouchableOpacity>
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
    elevation: 18,
    flexDirection: 'row',
    paddingVertical: 10
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 100,
    fontSize: 15,
    fontWeight: 'bold'
  },
  closeButton: {
    paddingHorizontal: 20
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  result: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  resultText: {
    fontSize: 20
  },
  addContainer: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SearchPage;

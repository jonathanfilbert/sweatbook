import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { toggleModal, postCurrentWorkout } from '../app/actions/workoutAction';
import { fuzzySearch } from '../app/fuzzySearch';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundExercise: []
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleResultClicked = this.handleResultClicked.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      foundExercise: fuzzySearch(text, this.props.workoutList, 'name')
    });
  }

  handleResultClicked(result) {
    this.props.postCurrentWorkout(result);
    this.props.toggleModal();
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
            onChangeText={this.handleTextChange}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={this.props.toggleModal}
          >
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
          {/* <ScrollView style={{ width: '100%' }}>
            {this.props.workoutList.map((workout, index) => (
              <TouchableOpacity
                style={styles.result}
                onPress={this.props.toggleModal}
                key={index}
              >
                <Text style={styles.resultText}>{workout.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView> */}
          <FlatList
            style={{ width: '100%' }}
            data={this.state.foundExercise}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.result}
                onPress={() => this.handleResultClicked(item.name)}
              >
                <Text style={styles.resultText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <LinearGradient
          colors={['#DE6262', '#FFB88C']}
          style={styles.addContainer}
        >
          <TextInput
            style={styles.resultText}
            placeholder="create new exercise"
          />
          <TouchableOpacity>
            <Text style={styles.resultText}>➕</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    alignItems: 'center',
    width: '100%'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    postCurrentWorkout: workout => dispatch(postCurrentWorkout(workout))
  };
};

const mapStateToProps = state => {
  return {
    workoutList: state.workout.exercises
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchPage from './sbSearchPage';
import { connect } from 'react-redux';
import { toggleModal } from '../app/actions/workoutAction';

class CurrentWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleModal();
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.props.isModalToggled} animationType="slide">
          <SearchPage />
        </Modal>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Current Workout</Text>
        </View>
        <LinearGradient
          colors={['#DE6262', '#FFB88C']}
          style={styles.midContainer}
        >
          <View style={styles.currentWorkoutContainer}>
            {this.props.currentWorkout.map((workout, index) => (
              <Text style={{ fontWeight: 'bold', fontSize: 30 }} key={index}>
                {workout}
              </Text>
            ))}
          </View>
          <Text style={styles.midText}>Add some exercise</Text>
          <TouchableOpacity style={styles.button} onPress={this.handleClick}>
            <Text style={styles.plus}>+</Text>
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
    elevation: 18
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
    isModalToggled: state.search.isModalToggled,
    currentWorkout: state.currentWorkout.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWorkout);

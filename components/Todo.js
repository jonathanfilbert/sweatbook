/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getTodos } from '../app/actions/getTodo';
import { makeTodo } from '../app/actions/makeTodo';
const { width, height } = Dimensions.get('window');

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      todos: [],
    };
    this.handleType = this.handleType.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.makeTodo(this.state.currentValue);
  }

  handleType(e) {
    this.setState({
      currentValue: e,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}> "TODO APP" </Text>
          <TextInput onChangeText={this.handleType} />
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text> ➕Add Todo </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}> MY TODOS </Text>
          <ScrollView>
            {this.props.todos.map(todo => (
              <Text style={styles.todoText} id={todo}>
                ✅ {todo}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  divider: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    width: width,
    height: height / 3,
  },
  bottomContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 10,
    backgroundColor: 'white',
    width: 150,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 30,
    fontStyle: 'italic',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
    makeTodo: todo => dispatch(makeTodo(todo)),
  };
};

function mapStateToProps(state) {
  return {
    todos: state.todo.todo,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

import React from 'react';
import HomePage from './sbHomePage';
import CurrentWorkout from './sbCurrentWorkout';
import SearchPage from './sbSearchPage';
import TabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

class SweatBook extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.appState);
  }

  render() {
    return this.props.appState ? (
      <TabView tabBarPosition="bottom">
        <CurrentWorkout tabLabel="🏋️‍♂️" />
      </TabView>
    ) : (
      <HomePage />
    );
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appState.isAppStarted
  };
};

export default connect(
  mapStateToProps,
  null
)(SweatBook);

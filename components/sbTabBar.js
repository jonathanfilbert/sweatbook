import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = () => (
  <View style={styles.bottomNav}>
    <TouchableOpacity>
      <Text style={styles.bottomNavbarText}>🏋️‍♂️</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.bottomNavbarText}>🕵️‍♂️</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.bottomNavbarText}>👱</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.bottomNavbarText}>🏘️</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
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
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  bottomNavbarText: {
    fontSize: 30,
    color: 'black',
    paddingHorizontal: 30,
  },
});

export default TabBar;

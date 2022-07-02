import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const FloatingButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserAdd')}
      style={styles.button}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: screenWidth / 2 - 75,
    backgroundColor: '#FF6286',
    borderRadius: 25,
    marginVertical: 8,
    padding: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default FloatingButton;

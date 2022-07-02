import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const MainCard = ({profile, navigation}) => {
  console.log('item', profile);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserDescription', profile)}
      style={styles.item}>
      <Image
        style={styles.profileImage}
        source={{
          uri: profile.image,
        }}
      />
      <Text
        style={
          styles.name
        }>{`${profile.firstName} ${profile.lastName}, ${profile.age}`}</Text>
      <Text style={styles.job}>{`${profile.company.title}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginVertical: 8,
    padding: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 6,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
    marginTop: 20,
  },
  job: {
    fontSize: 14,
    color: '#5c5c5c',
    marginHorizontal: 8,
    marginBottom: 10,
  },
  profileImage: {
    borderRadius: 25,
    height: 200,
    backgroundColor: '#786CF8',
  },
});
export default MainCard;

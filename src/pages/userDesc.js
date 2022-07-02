import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const userDesc = ({route}) => {
  const profile = route.params;
  console.log('profile', profile);
  return (
    <View>
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
      <Text
        style={
          styles.job
        }>{`${profile.company.name} - ${profile.company.department}`}</Text>
      <Text style={styles.job}>{`${profile.company.title}`}</Text>
      <View style={styles.addressContainer}>
        <Text
          style={styles.address}>{`${profile.company.address.address}`}</Text>
        <Text
          style={
            styles.address
          }>{`${profile.company.address.postalCode}`}</Text>
        <Text style={styles.address}>{`${profile.company.address.state}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 350,
    backgroundColor: '#786CF8',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
    marginTop: 20,
  },
  job: {
    fontSize: 16,
    color: '#5c5c5c',
    marginHorizontal: 8,
  },
  addressContainer: {
    marginTop: 20,
    marginHorizontal: 8,
  },
  address: {
    fontSize: 12,
    color: '#5c5c5c',
  },
});
export default userDesc;

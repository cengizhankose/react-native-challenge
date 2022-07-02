import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUserList} from '../api/users';
import MainCard from '../components/MainCard';
import FloatingButton from '../components/FloatingButton';

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <MainCard profile={item} navigation={navigation} />
  );
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList().then(res => {
      setUserList(res);
    });
  }, []);

  return (
    <View>
      {userList.length !== 0 ? (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-around'}}
          numColumns={2}
          data={userList.users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default Home;

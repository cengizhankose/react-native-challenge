import axios from 'axios';

export const getUserList = async () =>
  await axios
    .get('https://dummyjson.com/users')
    .then(response => response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    });

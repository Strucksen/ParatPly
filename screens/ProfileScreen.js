// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { database } from '../firebase'; // Import Firebase database
import { ref, set } from 'firebase/database'; // Firebase functions for database

const ProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to write username and password to Firebase
  const saveProfile = () => {
    set(ref(database, 'profiles/' + username), {
      username: username,
      password: password,
    })
      .then(() => {
        console.log('Profile saved successfully!');
        // Navigate to SubscriptionScreen and pass the username
        navigation.navigate('Subscription', { username });
      })
      .catch((error) => {
        console.error('Error saving profile:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true} // Hide password input
      />
      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 20,
  },
});

export default ProfileScreen;

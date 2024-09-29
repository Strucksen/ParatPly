// SubscriptionScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { database } from '../firebase'; // Import Firebase database
import { ref, set } from 'firebase/database'; // Firebase functions for database

const SubscriptionScreen = ({ route }) => {
  const { username } = route.params; // Retrieve the passed username
  const [subscription, setSubscription] = useState(null);

  // Function to save the selected subscription to Firebase
  const saveSubscription = (selectedSubscription) => {
    setSubscription(selectedSubscription);
    set(ref(database, `profiles/${username}/subscription`), {
      subscription: selectedSubscription,
    })
      .then(() => {
        console.log('Subscription saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving subscription:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.subtitle}>Choose your subscription:</Text>

      <Button
        title="ParatPly Pro"
        onPress={() => saveSubscription('ParatPly Pro')}
      />
      <Button
        title="ParatPly Premium"
        onPress={() => saveSubscription('ParatPly Premium')}
      />
      <Button
        title="ParatPly Pay"
        onPress={() => saveSubscription('ParatPly Pay')}
      />

      {subscription && (
        <Text style={styles.confirmation}>You selected: {subscription}</Text>
      )}
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
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmation: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default SubscriptionScreen;

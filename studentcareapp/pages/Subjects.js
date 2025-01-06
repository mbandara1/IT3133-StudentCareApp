// /pages/Subjects.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Subjects({ route }) {
  const { user } = route.params;  // Access the logged-in user's data

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Subjects</Text>
      {/* Render the student's subjects here */}
      {user.subjects.map((subject, index) => (
        <Text key={index}>{subject}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
});

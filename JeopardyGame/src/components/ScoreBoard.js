import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreBoard = ({ scores, currentTeam }) => {
  return (
    <View style={styles.container}>
      <Text style={[
        styles.scoreText,
        currentTeam === 'team1' && styles.currentTeam
      ]}>
        Team 1: ${scores.team1}
        {currentTeam === 'team1' && ' (Current Turn)'}
      </Text>
      
      <Text style={[
        styles.scoreText,
        currentTeam === 'team2' && styles.currentTeam
      ]}>
        Team 2: ${scores.team2}
        {currentTeam === 'team2' && ' (Current Turn)'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
  },
  teamScore: {
    padding: 5,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currentTeam: {
    color: '#1E40AF',
  },
});

export default ScoreBoard;

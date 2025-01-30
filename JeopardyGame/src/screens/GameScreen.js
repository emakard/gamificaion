import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { CATEGORIES } from '../constants/categories';
import { QUESTIONS } from '../constants/questions';
import ScoreBoard from '../components/ScoreBoard';
import QuestionDialog from '../components/QuestionDialog';

const GameScreen = () => {
  const [scores, setScores] = useState({ team1: 0, team2: 0 });
  const [currentTeam, setCurrentTeam] = useState('team1');
  const [answered, setAnswered] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  // Split categories into two halves
  const midpoint = Math.ceil(CATEGORIES.length / 2);
  const displayedCategories = currentScreen === 1 ? CATEGORIES.slice(0, midpoint) : CATEGORIES.slice(midpoint);

  const handleQuestionClick = (category, value) => {
    const key = `${category}-${value}`;
    if (answered.has(key)) return;

    setCurrentQuestion({
      category,
      value,
      ...QUESTIONS[category][value]
    });
  };

  const handleCorrect = () => {
    setScores(prev => ({
      ...prev,
      [currentTeam]: prev[currentTeam] + currentQuestion.value
    }));
    setAnswered(prev => new Set([...prev, `${currentQuestion.category}-${currentQuestion.value}`]));
    setCurrentQuestion(null);
    setShowAnswer(false);
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
  };

  const handleIncorrect = () => {
    setScores(prev => ({
      ...prev,
      [currentTeam]: prev[currentTeam] - currentQuestion.value
    }));
    setAnswered(prev => new Set([...prev, `${currentQuestion.category}-${currentQuestion.value}`]));
    setCurrentQuestion(null);
    setShowAnswer(false);
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handlePass = () => {
    setCurrentTeam(currentTeam === 'team1' ? 'team2' : 'team1');
    setShowAnswer(false);
    setCurrentQuestion(null);
  };

  return (
    <View style={styles.container}>
      <ScoreBoard scores={scores} currentTeam={currentTeam} />
      
      <ScrollView>
        <View style={styles.grid}>
          {/* Category Headers */}
          <View style={styles.row}>
            {displayedCategories.map((category) => (
              <View style={styles.categoryHeader} key={category}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </View>

          {/* Questions */}
          {[200, 400, 600, 800, 1000].map((value) => (
            <View style={styles.row} key={value}>
              {displayedCategories.map((category) => {
                const key = `${category}-${value}`;
                return (
                  <Button
                    key={key}
                    mode="contained"
                    onPress={() => handleQuestionClick(category, value)}
                    disabled={answered.has(key)}
                    style={[
                      styles.questionButton,
                      answered.has(key) && styles.answeredButton
                    ]}
                  >
                    ${value}
                  </Button>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        {currentScreen > 1 && (
          <Button mode="contained" onPress={() => setCurrentScreen(currentScreen - 1)} style={styles.navButton}>
            Back
          </Button>
        )}
        {currentScreen < 2 && (
          <Button mode="contained" onPress={() => setCurrentScreen(currentScreen + 1)} style={styles.navButton}>
            Next
          </Button>
        )}
      </View>

      <QuestionDialog
        visible={currentQuestion !== null}
        question={currentQuestion}
        showAnswer={showAnswer}
        onShowAnswer={handleShowAnswer}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
        onPass={handlePass}
        currentTeam={currentTeam}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F9FAFB',
  },
  grid: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8, // Adds spacing between rows
  },
  categoryHeader: {
    flex: 1,
    backgroundColor: '#4CAF50', // Duolingo green
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    backgroundColor: '#3B82F6', // Blue for contrast
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  answeredButton: {
    backgroundColor: '#6B7280',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 8,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
  },
});

export default GameScreen;

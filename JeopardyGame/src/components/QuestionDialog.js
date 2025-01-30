import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const QuestionDialog = ({
  visible,
  question,
  showAnswer,
  onShowAnswer,
  onCorrect,
  onIncorrect,
  onPass,
  currentTeam
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.category}>{question?.category} - ${question?.value}</Text>
          <Text style={styles.team}>{currentTeam === 'team1' ? 'Team 1' : 'Team 2'}'s Turn</Text>
          <Text style={styles.question}>{question?.question}</Text>
          
          {showAnswer && (
            <Text style={styles.answer}>{question?.answer}</Text>
          )}
          
          {!showAnswer ? (
            <>
              <View style={styles.buttonContainer}>
                <Button
                  mode="contained"
                  onPress={onShowAnswer}
                  style={styles.button}
                >
                  Show Answer
                </Button>
                <Button
                  mode="outlined"
                  onPress={onPass}
                  style={styles.button}
                >
                  Pass
                </Button>
              </View>
            </>
          ) : (
            <>
              <View style={styles.buttonContainer}>
                <Button
                  mode="contained"
                  onPress={onCorrect}
                  style={styles.button}
                >
                  Correct
                </Button>
                <Button
                  mode="outlined"
                  onPress={onIncorrect}
                  style={styles.button}
                >
                  Incorrect
                </Button>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  team: {
    fontSize: 16,
    color: '#1E40AF',
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    marginBottom: 15,
  },
  answer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default QuestionDialog;

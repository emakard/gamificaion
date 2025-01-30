import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GameScreen from './src/screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [debugMessage, setDebugMessage] = useState('');
  const [isDebugEnabled, setIsDebugEnabled] = useState(true);

  // Debug statement to log when the App component starts
  setDebugMessage('App component has started');

  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            {/* Debug Information Display */}
            {isDebugEnabled && (
              <View style={styles.debugMessageContainer}>
                <Text style={styles.debugMessage}>DEBUG: {debugMessage}</Text>
              </View>
            )}

            <Stack.Navigator 
              initialRouteName="Jeopardy Game"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#1E40AF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Stack.Screen 
                name="Jeopardy Game" 
                component={GameScreen}
              />
            </Stack.Navigator>

            {/* Debug Toggle Button */}
            <Button
              title={isDebugEnabled ? 'Hide Debug' : 'Show Debug'}
              onPress={() => setIsDebugEnabled(!isDebugEnabled)}
            />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debugMessageContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
  },
  debugMessage: {
    color: 'white',
    fontSize: 12,
  }
});

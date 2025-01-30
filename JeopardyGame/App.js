import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import GameScreen from './src/screens/GameScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  try {
    return (
      <PaperProvider>
        <NavigationContainer> {/* ✅ Wrap the Navigator here */}
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
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
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    );
  } catch (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: 'white' }}>Error: {error.message}</Text>
      </View>
    );
  }
}

export default App;

// Register the app's entry point
registerRootComponent(App);

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

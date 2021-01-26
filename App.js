import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import { Text, View, SafeAreaView  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
    // <Main/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

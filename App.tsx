import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'

import { assertApiConfig } from './src/api/config'
import { RootNavigator } from './src/navigation/RootNavigator'

assertApiConfig()

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <RootNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
})

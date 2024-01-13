import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrayerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Prayer</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

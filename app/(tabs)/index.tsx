import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { MotiPressable } from 'moti/interactions';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>EDUTH</Text>
        <MotiPressable
        animate={useMemo(
          () => ({ hovered, pressed }) => {
            'worklet'
  
            return {
              opacity: hovered || pressed ? 0.5 : 1,
            }
          },
          []
        )}>
          <FontAwesome5 name='bell' size={28} color={Colors[colorScheme ?? 'light'].tint}/>
        </MotiPressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'GoudyOldStyle',
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20
  }
});

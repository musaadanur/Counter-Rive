import React, { useEffect, useState } from 'react';
import Rive, { RiveRef } from 'rive-react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const riveRef = React.useRef<RiveRef>(null);
  const handlePlay = () => {
    riveRef.current?.fireState('State Machine 1', 'Trigger 1');
    setCount((p) => p + 2);
  };
  const handlePlayL = () => {
    riveRef.current?.fireState('State Machine 1', 'Trigger L');
    setCount((p) => p + 1);
  };
  const handlePlayR = () => {
    riveRef.current?.fireState('State Machine 1', 'Trigger R');
    setCount((p) => p + 1);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.sectionTwoOne}>
          <Rive
            ref={riveRef}
            autoplay={true}
            resourceName='duotwerk_v05'
            artboardName='duoTwerk'
            stateMachineName='State Machine 1'
          />
        </View>
      </View>
      <View style={styles.sectionThree}>
        <TouchableOpacity style={styles.smallButton} onPress={handlePlayL}>
          <View style={styles.buttonContainer}>
            <Text style={[styles.buttonText, { color: '#959ea0' }]}>L</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePlay}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Saydır</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={handlePlayR}>
          <View style={styles.buttonContainer}>
            <Text style={[styles.buttonText, { color: '#959ea0' }]}>R</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 72,
    fontFamily: 'Concert One',
    color: '#3c3941',
  },
  sectionTwo: {
    flex: 1,
  },
  sectionTwoOne: {
    flex: 1,
    padding: 35,
  },
  sectionThree: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    height: 61,
    backgroundColor: '#3c3941',
    borderRadius: 100,
    width: '40%',
  },
  smallButton: {
    backgroundColor: '#e5e9e9',
    borderRadius: 24,
    width: 61,
    height: 61,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Concert One',
  },
});

export default App;
import React, { useState } from 'react';
import Rive, { RiveRef } from 'rive-react-native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const riveRef = React.useRef<RiveRef>(null);
  const handlePlay = () => {

    riveRef.current?.fireState('State Machine 1', 'Trigger 1')
    setCount(p => p + 1)
  };


  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.sectionTwoOne}>
          <Rive ref={riveRef} autoplay={false}
            resourceName='twerkDuo'
            artboardName="duoTwerk"
            stateMachineName="State Machine 1"
          />
        </View>

      </View>
      <View style={styles.sectionThree}>
        <TouchableOpacity style={styles.button} onPress={handlePlay}>
          <Text style={styles.buttonText}>Saydır</Text>
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 72,
    fontFamily: 'Concert One',
    color: '##3c3941'
  },
  sectionTwo: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  sectionTwoOne: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 35,
  },
  sectionThree: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3c3941',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 16,
    width: '40%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Concert One',
  },
});

export default App;

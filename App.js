
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RaptorNestActivityScreen from './screens/RaptorNestActivityForm';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <RaptorNestActivityScreen/>
       </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

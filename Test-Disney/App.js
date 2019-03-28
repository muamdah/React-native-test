import React from 'react';
import { StyleSheet, View ,  StatusBar} from 'react-native';
import Search  from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={{height: 50}}></View>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
});

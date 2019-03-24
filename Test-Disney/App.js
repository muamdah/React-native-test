import React from 'react';
import { StyleSheet, View ,ImageBackground,  StatusBar} from 'react-native';
import Search  from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <ImageBackground source={require('./components/background/blood.jpg')} style={{width: '100%',height:'100%'}}>
        <View style={styles.SearchBarStyle}>
          <Search />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchBarStyle:{
    flex: 1,
    justifyContent:'flex-start',
    marginTop: 50,
    margin: 15,
    borderWidth:3,
    borderColor: 'red'
  },
  img_mickey:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue',
    width: 150,
    height:0
  }
});

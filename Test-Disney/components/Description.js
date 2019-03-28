import React from 'react'
import {View ,Text, Image,Platform, ScrollView, StyleSheet} from 'react-native'
import { IconButton , Colors} from 'react-native-paper';


export default class Description extends React.Component{
      static navigationOptions =
      {
         title: 'Description',
      };
     
      render()
      {
          console.log("Description data"+this.props.navigation.state.params.data.backdrop_path)
         return(
            <ScrollView style={{backgroundColor:'black'}}>

                <View style={{flex:1,justifyContent:'flex-start',backgroundColor:'black'}}>

                        {this.props.navigation.state.params.data.backdrop_path &&
                            <Image style={styles.img} source={{uri: 'https://image.tmdb.org/t/p/w500'+this.props.navigation.state.params.data.backdrop_path}}/>}
                        {!this.props.navigation.state.params.data.backdrop_path &&
                            <Image style={{width: '100%', height: 300}} source={ require('./img/No_image_available.png')}/>}
                        <View style={{width: '100%', height: 300,  marginTop: -280,}}>

                            <Text style={{color:'#FFF', fontSize: 40, paddingLeft: 20,textShadowColor: 'rgba(0, 0, 0, 0.70)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 10}}>{this.props.navigation.state.params.data.title}</Text>
                        </View>

                    <View style={{flex:1, flexDirection: 'row', justifyContent:'space-evenly', alignItems:'center'}}>
                        
                        <View>
                        <Text style={{color:'red',fontSize: 20,paddingLeft: 20,marginBottom:10}}>Année de sortie : {this.props.navigation.state.params.data.release_date.slice(0,4)}</Text>
                        </View>
                    
                        <View style={{flex:1, alignItems:'flex-end', paddingRight: 20}}>
                                <Text style={( this.props.navigation.state.params.data.vote_average>= 6.5) ? styles.green : ( this.props.navigation.state.params.data.vote_average>= 4) ? styles.orange : styles.red}>{this.props.navigation.state.params.data.vote_average}</Text>
                                <Text style={{color:'#828282',fontSize: 15,marginBottom:10}}>Votes : {this.props.navigation.state.params.data.vote_count}</Text>
                        </View>
                    </View>
                        
                        <Text style={{color:'#f7f8f9',fontSize:30,paddingLeft: 20, paddingRight: 20, marginBottom: 10}}>Titre original : {this.props.navigation.state.params.data.original_title}</Text>
                        {this.props.navigation.state.params.data.overview !== "" && <Text style={{color:'#e8e8e8',fontSize:20,paddingLeft: 20, paddingRight: 20, textAlign: (Platform.OS === 'ios') ? 'justify': 'auto'}}>Synopsis : {'\n'}{this.props.navigation.state.params.data.overview}</Text>}
                        <View style={{flex:1, alignItems:'center'}}>

                        <IconButton
                        icon="navigate-before"
                        color={Colors.red500}
                        size={30}
                        onPress={() => this.props.navigation.goBack(null)}
                        ></IconButton>
                    </View>

                </View>
            </ScrollView>
         );
      }
      
    }
    const styles = StyleSheet.create({
        green: {
          color: '#6df751',
          fontSize: 15,marginBottom:10
        },
        orange: {
            color: '#f9aa00',
            fontSize: 15,marginBottom:10
          },
        red: {
          color: '#f75050',
          fontSize: 15,marginBottom:10
        },
        img:{
            width: '100%', height: 300,
        }
    })
    
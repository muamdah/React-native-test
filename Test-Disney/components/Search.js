import React from 'react'
import { Searchbar } from 'react-native-paper';
import {View , StyleSheet, ListView, TouchableHighlight} from 'react-native'
import axios from 'axios'
import MoviesRow from './MovieRow'
import Description from './Description'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import util from 'util'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={    
            movie : '',
            report: null,
            error: false,
        }
    
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(this.state.movie)
        if((this.state.movie !== prevState.movie)){
            this._fetchWeather(this.state.movie)
        }
    }
    
    _fetchWeather (text){
        const API_TOKEN = "1f58703a0e618c18de9ac5c5b10a55cd";
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`) 
        .then((response) => {
        console.log(response.data.results)
            this.setState({report: response.data, error : false})})
        .catch(() => {
            this.setState({report : null, error : true})})    
    }
    
    _setMovies(text){
        this.setState({movie : text})
    }
    
    // static navigationOptions =
    // {
    //    title: 'Search',
    // };

    _OpenSecondActivity(rowData)
    {
      console.log('ici')
       this.props.navigation.navigate('Result',  {data : rowData});
       
    }

    render(){
    //     console.log("rep", this.props.report)
    //    console.log("data----> "+this.state.movie)
    //      console.log("erreur----> "+this.state.error)
    //      console.log("this.props.navigation"+util.inspect(this.props.navigation, false, null))
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return(
                <View style={styles.SearchView}>
                    
                        <Searchbar
                        iconColor='#f75050'
                        icon="local-movies"
                        placeholder="Rechercher un Film"
                        onChangeText={(text) => this._setMovies(text)}
                        value={this.state.movie}
                        style={{backgroundColor: '#f7f8f9'}}
                        />
                        {this.state.report !== null &&
                            
                            <ListView
                            removeClippedSubviews={false}
                            enableEmptySections={true}
                            style={{marginTop: 10, marginBottom: 20,borderRadius: 20,
                                borderWidth: 1,
                                borderColor: 'black'}}
                                dataSource={ds.cloneWithRows(this.state.report.results)}
                                renderRow={(rowData, a, key) => 
                                    <TouchableHighlight
                                    onPress={this._OpenSecondActivity.bind(this, rowData)}>
                                    <MoviesRow Data_complete={rowData} Search={this.state.movie} index={parseInt(key, 0)}/>
                                    </TouchableHighlight>}
                                />
                        }
                </View>
            
            );
    }
}
const styles = StyleSheet.create({
    SearchView:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems:'center',
        backgroundColor:'black'

    }
})


const navigationOptions = {
    header: null,
}

const AppNavigator = createStackNavigator({
    
    Search : {
        screen : Search,
        navigationOptions
    },
    Result: {
        screen: Description,
        navigationOptions
    },
    
   
  });
  
export default createAppContainer(AppNavigator);
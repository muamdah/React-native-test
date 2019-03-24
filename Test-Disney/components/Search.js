import React from 'react'
import { Searchbar } from 'react-native-paper';
import {View , StyleSheet, ListView, Text} from 'react-native'
import axios from 'axios'
import {ActivityIndicator, Colors} from 'react-native-paper'
import MoviesRow from './MovieRow'
export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            movie : 'star',
            report: null,
            error: false,
        }
        this.fetchWeather();
    }
    

    fetchWeather (){
        const API_TOKEN = "1f58703a0e618c18de9ac5c5b10a55cd";
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${this.state.movie}`) 
        .then((response) => {
        console.log(response.data.total_results)
                this.setState({report: response.data})})
                        .catch(() => {
            this.setState({error : true})
        })
    }
setMovies(text){
    this.setState({movie : text})
}
    render(){
        // console.log("data----> "+this.state.report.results)
        // console.log("erreur----> "+this.state.error)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if (!this.state.report) {
                return(
                    <ActivityIndicator animating={true} color={Colors.white800} size="large"/>
                )
          }
          else {
        return(
            <View style={styles.SearchView}>
                
                    <Searchbar
                    placeholder="Rechercher"
                    onChangeText={(text) => this.setMovies(text)}
                    value={this.state.movie}
                    />
            <View>
                {/* <Text style={{color: '#FFF'}}>{this.state.report}</Text> */}
                <ListView
                dataSource={ds.cloneWithRows(this.state.report.results)}
                renderRow={(rowData, a, key) => 
                <MoviesRow Data_complete={rowData} Search={this.state.movie} index={parseInt(key, 0)}/>}

                />
            </View>
            </View>
          
        );
                }
    }
}
const styles = StyleSheet.create({
    SearchView:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems:'center',

    }
})
  
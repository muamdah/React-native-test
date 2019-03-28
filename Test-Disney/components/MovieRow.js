import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {Card, Paragraph, Title ,IconButton, Colors} from 'react-native-paper'

export default class MoviesRow extends React.Component{
    constructor(props){
        super(props)

    }
    static propTypes = {
        Data_complete: PropTypes.object,
        Search: PropTypes.string,
        index: PropTypes.number,
     


    }
   

    render(){
       
        return (
            <View style={{margin:3, width: 360 ,borderRadius : 20}}>
            {this.props.Data_complete !== undefined &&
                <Card>
                    
                    <View style ={ stylesCard.Description}>
                        
                        <Card.Cover style={{width: 130}}source={{ uri: 'https://image.tmdb.org/t/p/w300'+this.props.Data_complete.poster_path}} />
                        
                        <View style={{flex:1, alignItems:'flex-start'}}>
                        
                            <Card.Content style={stylesCard.title}>
                                    <Title style={{fontSize: 15, color: '#f7f8f9'}}>{this.props.Data_complete.title}</Title>
                            </Card.Content>
                            <Paragraph style={{color:'red', margin: 15, flex:1}}>{this.props.Data_complete.release_date.slice(0,4)}</Paragraph>
                            <Paragraph style={{color:'#e8e8e8', margin: 15, flex:1}}>{this.props.Data_complete.overview.substring(0, 100).concat('...')}</Paragraph>
                        
                        </View>
                    
                        <View>
                            <IconButton
                            icon="navigate-next"
                            color={Colors.red500}
                            size={20}
                            style={{width:30, height:'100%'}}
                            ></IconButton>
                        </View>

                    </View>
                    
                </Card>}
            </View>
        )
    }
}
const stylesCard = StyleSheet.create({
    title:{
        flex: 1,

    },
    Description:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#111111',
     
        
    },

})



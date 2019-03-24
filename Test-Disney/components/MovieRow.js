import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import {Card, Paragraph, Title} from 'react-native-paper'

export default class MoviesRow extends React.Component{
    constructor(props){
        super(props)

    }
    static propTypes = {
        Data_complete: PropTypes.object,
        Search: PropTypes.string,
        index: PropTypes.number


    }
    render(){
        console.log(this.props.Data_complete)
        return (
            <View style={{margin:10}}>

            <Card>
                <Card.Content>
                        <Title>{this.props.Data_complete.original_title}</Title>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w300'+this.props.Data_complete.poster_path}} />
                <Paragraph>Card content</Paragraph>
            </Card>
            </View>
        )
    }
}
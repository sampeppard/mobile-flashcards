import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, ListItem } from 'react-native'
import { fetchDecks } from '../utils/api'
import { Util } from 'expo'

class Decks extends Component {

    state = {
        decks: {}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            decks: nextProps.screenProps.decks
        })
    }

    render() {
        const {
            decks
        } = this.state

        const {
            navigation
        } = this.props

        return (
            <View>
                
            </View>
        )
    }
}

export default Decks
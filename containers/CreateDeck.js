import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { saveDeckTitle } from '../utils/api'

class CreateDeck extends Component {
    state = {
        title: ""
    }
    render() {
        const { 
            title 
        } = this.state

        const {
            navigation
        } = this.props

        return (
            <View>
                <TextInput
                    value={title}
                    onChangeText={title => this.setState({title})}
                />
                <Button
                    title="Create a new deck"
                    onPress={() => {
                        navigation.navigate('Deck', {deck: title})

                        saveDeckTitle(title)
                    }}
                />
            </View>
        )
    }
}

export default CreateDeck
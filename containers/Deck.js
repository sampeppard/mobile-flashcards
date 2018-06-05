import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { fetchDeck } from '../utils/api'
import { addCardToDeck } from '../utils/api'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.deck
        }
    }

    state = {
        deck: {}
    }
    
    navigateBack = () => {
        fetchDeck(this.props.navigation.state.params.deck)
            .then((deck) => {
                this.setState({deck})
            })
    }

    componentDidMount() {
        fetchDeck(this.props.navigation.state.params.deck)
            .then((deck) => {
                this.setState({deck})
            })
    }

    render() {
        const {
            deck
        } = this.state

        const {
            navigation
        } = this.props

        const {
            questions
        } = deck

        return (
            <View>
                {questions &&
                    <Text style={{fontSize: 32}}>{`${questions.length} ${questions.length === 1 ? 'question' : 'questions'}`}</Text>
                }

                {questions && questions.length > 0 &&
                    <Button 
                        title="Begin quiz"
                        onPress={()=>{
                            navigation.navigate('Quiz', {title: deck.title, questions: deck.questions})
                        }}
                    />
                }

                <Button
                    title="Create a card"
                    onPress={() => {
                        navigation.navigate('AddCard', {
                            deck: deck.title,
                            onNavigateBack: this.navigateBack
                        })
                    }}
                />
            </View>
        )
    }
}

export default Deck

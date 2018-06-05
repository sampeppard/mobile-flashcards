import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'

export const fetchDecks = () => {
    return AsyncStorage.getItem("decks")
}

export const fetchDeck = (deck) => {
    return AsyncStorage.getItem("decks")
        .then((decks) => {
            const returnedDecks = JSON.parse(decks)
            return returnedDecks[deck]
        })
}

export const saveDeckTitle = (title) => {
    const deck = {
        [title]: {
            title,
            questions: []
        }
    }
    return AsyncStorage.mergeItem("decks", JSON.stringify(deck))
        .then(() => deck)
}

export const addCardToDeck = (deckTitle, {question, answer}) => {
    return getDeck(deckTitle)
        .then(deck=>{
            const newDeck = {
                [deck.title]: Object.assign({}, deck)
            }
            newDeck[deck.title].questions = [...deck.questions, {question, answer}]
            return AsyncStorage.mergeItem("decks", JSON.stringify(newDeck))
                .then(() => newDeck)
        })
}

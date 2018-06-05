import React from 'react'
import { createStackNavigator } from 'react-navigation'
import MainTabs from '../containers/MainTabs'
import Decks from '../containers/Decks'
import Deck from '../containers/Deck'
import CreateDeck from '../containers/CreateDeck'
// import CreateCard from '../containers/CreateCard'
// import Quiz from '../containers/Quiz'
// import Score from '../containers/Score'

const Navigator = createStackNavigator({
	Home: {
		screen: MainTabs
	},
	Deck: {
		screen: Deck
	},
	NewDeck: {
		screen: CreateDeck
	}
	// AddCard: {
	// 	screen: AddCard
	// },
	// Quiz: {
	// 	screen: Quiz
	// },
	// Score: {
	// 	screen: Score
	// }
});

export default Navigator;
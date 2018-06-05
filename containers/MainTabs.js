import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Decks from './Decks'
import CreateDeck from './CreateDeck'
import { Ionicons } from '@expo/vector-icons'

const MainTabs = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'All Decks',
            tabBarLabel: () => (
                <Ionicons name="ios-home-outline" size={26} />
            )
        }
    },
    CreateDeck: {
        screen: CreateDeck,
        navigationOptions: {
            tabBarLabel: 'Create a deck',
            tabBarIcon: () => (
                <Ionicons name="ios-create-outline" size={26} />
            )
        }
    }
})

export default MainTabs
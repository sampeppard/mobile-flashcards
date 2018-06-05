import React from 'react';
import { StyleSheet, View } from 'react-native'
import AppStatusBar from './components/StatusBar'
import Navigator from './utils/navigation'
import { AsyncStorage } from 'react-native'
import { fetchDecks } from './utils/api'
import { Util } from 'expo'

export default class App extends React.Component {
    state = {
        decks: {}
    }

	componentDidMount() {
		this._updateDecks()
	}

	_updateDecks() {
		fetchDecks().then((decks) => {
            this.setState({decks: JSON.parse(decks)})
        })
	}
    render() {
        return (
            <View style={{flex: 1}}>
                <AppStatusBar />
                <Navigator
                    screenProps = {
                        {
                            decks: this.state.decks
                        }
                    }
                    onNavigationStateChange = {
                        (prevState, currentState) => {
                            if ((prevState.index !== currentState.index) && currentState.index === 0)
                                this._updateDecks()
                        }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'

const AppStatusBar = (props) => (
    <View style={styles.statusBar}>
        <StatusBar translucent />
    </View>
)

const styles = StyleSheet.create(
    {
        statusBar: {
            backgroundColor: 'tomato',
            height: Constants.statusBarHeight
        }
    }
)

export default AppStatusBar

import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

export default class Restaurants extends React.Component {
    constructor(props) {
        super(props)
        this.state = {            
            search: '🔎 for restaurants and hit enter...'
        }
    }

    render() {
        return (
            <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <TextInput 
                    style={styles.search}
                    onChangeText={(search) => this.setState({search})}
                    value={this.state.search}
                />
            </View>
        )
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    search: {
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 10,
        padding: 10
    },
})
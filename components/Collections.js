import React from 'react'
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TextInput, 
    Linking, 
    TouchableWithoutFeedback
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { getCollectionsAPI } from '../utils'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

export default class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            collections: null,
            search: '🔎 for restaurants and hit enter...'
        }
        
    }
    componentDidMount() {
        console.log(this.props.city.id)
        getCollectionsAPI(4)
        .then(collection => this.setState({collections: collection.collections}))
    }

    openURL(url) {
        Linking.openURL(url)
        .catch(error => console.log(error))
    }

    render() {
        const { collections } = this.state
        const { city } = this.props
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', justifyContent: 'center'}}>
                    <TextInput 
                     style={styles.search}
                     onChangeText={(search) => this.setState({search})}
                     value={this.state.search}
                    />
                </View>
                <Text style={styles.head}>Trending <MaterialCommunityIcons name="fire" size={32} color='orange' /></Text>
                {collections && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <FlatList 
                     showsVerticalScrollIndicator={false}
                     data={collections}
                     renderItem={({item}) => (
                        <TouchableWithoutFeedback onPress={() => this.openURL(item.collection.url)} key={item.collection.collection_id}>
                            <View style={styles.card}>
                                <Image source={{uri: item.collection.image_url}} style={styles.image}/>
                                <Text style={styles.title}>{item.collection.title}</Text>
                                <Text style={styles.desc}>{item.collection.description}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                     )}
                     keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                }
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
    head: {
        marginTop: 15,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 32
    },
    card: {
        marginTop: 15,
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        borderRadius: 6
    },
    image: {
        width: width * 0.9,
        height: height * 0.3,
        borderRadius: 8,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.6
    },
    title: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: '700'
    },
    desc: {
        opacity: 0.6,
        fontSize: 16,
        width: width * 0.9
    }
})
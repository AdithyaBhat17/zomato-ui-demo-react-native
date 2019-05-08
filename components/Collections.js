import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { getCollectionsAPI } from '../utils';

export default class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            collections: null
        }
        
    }
    componentDidMount() {
        getCollectionsAPI(this.props.city.id)
        .then(collection => this.setState({collections: collection.collections}))
    }
    render() {
        const { collections } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.head}>Trending <MaterialCommunityIcons name="fire" size={32} color='orange' /></Text>
                {collections && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <FlatList 
                     showsVerticalScrollIndicator={false}
                     data={collections}
                     renderItem={({item}) => (
                        <View style={styles.card} key={item.collection.collection_id}>
                            <Image source={{uri: item.collection.image_url}} style={styles.image}/>
                            <Text style={styles.title}>{item.collection.title}</Text>
                            <Text style={styles.desc}>{item.collection.description}</Text>
                            {/* TODO: url and share_url */}
                        </View>
                     )}
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
    head: {
        marginTop: 25,
        marginLeft: 15,
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 32
    },
    card: {
        marginTop: 15,
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        borderRadius: 6,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.6
    },
    image: {
        width: width * 0.9,
        height: height * 0.3,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    desc: {
        opacity: 0.6,
        fontSize: 18,
        width: width * 0.9
    }
})
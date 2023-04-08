import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems : 'center'}}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{color:'white'}}>{story.user}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
})
export default Stories
import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export const bottomTabIcons =
    [
        {
            name: 'Home',
            active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
        },
        {
            name: 'Search',
            active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
            inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png'
        },
        {
            name: 'Add',
            active: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png'
        },
        {
            name: 'Reel',
            active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
            inactive: 'https://img.icons8.com/500/ffffff/instagram-reel.png'
        },
        {
            name: 'Profile',
            active: 'https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-2-520x520.jpg',
            inactive: 'https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-2-520x520.jpg'
        }
    ]


const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
            source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
            style={[
                styles.icon, 
                icon.name ==='Profile' ? styles.profilePic(): null,
                activeTab === 'Profile' && icon.name === activeTab 
                    ? styles.profilePic(activeTab)
                    : null
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper:{
        position : 'absolute',
        width:'100%',
        bottom:0,
        zIndex:999,
        backgroundColor: '#000'       
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic:(activeTab = '') =>({
        borderRadius: 50,
        borderWidth: activeTab ==='Profile'? 3 : 0,
        borderColor: activeTab === 'Profile'?'#ff8501':'#fff',
    }),
})

export default BottomTabs
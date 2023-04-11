import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likeImageUrl: 'https://cdn-icons-png.flaticon.com/512/6063/6063477.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/ios-filled/256/speech-bubble.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://image.pngaaa.com/491/3742491-middle.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-bookmark-social-media-ui-tanah-basah-glyph-tanah-basah.png'
    }
]
const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
                {post.user}
            </Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftFooterIconsContainter}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{
            uri: imgUrl//'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
        }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text>{'  '}{post.caption}</Text>
        </Text>
    </View>
)


//  post.comments.lengfth -> 0 or 1 or 2 or 3
// 0 == false
// 1 == true
const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'grey' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}
                {post.comments.length > 1 ? ' comments' : ' comment'}
            </Text>
        )}
    </View>
)

// A. 0 comments Don't render components
// B. 1 comment render component without "all" and singular comment
// C. 2 comment render component with "all" and plural comments

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row', marginTop: 5}}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon: {
        width: 33,
        height: 33,
        resizeMode: 'contain',
    },
    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    },
    leftFooterIconsContainter: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    }
})
export default Post
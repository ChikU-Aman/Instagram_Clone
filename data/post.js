import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2021/04/24/03/46/mickey-mouse-6203175_960_720.jpg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Baby Doll',
        profile_picture: USERS[0].image,
        comments:[
            {
                user: 'shinchan',
                comment: 'Wow!'

            },
            {
                user: 'bubu',
                comment: 'Love you !!'

            }
        ]
    },
    {
        imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/496/108/desktop-wallpaper-shin-chan-latest-shinchan.jpg',
        user: USERS[5].user,
        likes: 10000,
        caption: 'Aa Jao',
        profile_picture: USERS[5].image,
        comments:[
            {
                user: 'shinchan',
                comment: 'Wow!'

            },
            {
                user: 'bubu',
                comment: 'Love you !!'

            }
        ]
    },
    {
        imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/445/33/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg',
        user: USERS[4].user,
        likes: 6245,
        caption: 'Love',
        profile_picture: USERS[4].image,
        comments:[
            {
                user: 'shinchan',
                comment: 'Wow!'

            },
            {
                user: 'bubu',
                comment: 'Love you !!'

            }
        ]
    }
    
    
]
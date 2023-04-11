import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, formik } from 'formik'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { Button } from 'react-native'

const PLACEHOLDER_IMG = 'https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image-300x300.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character maximize')

});

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={{ uri: PLACEHOLDER_IMG }} style={{ width: 100, height: 100 }} />
                        <View style={{flex:1, marginLeft:15}}>
                            <TextInput style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption...'
                                placeholderTextColor='grey'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption} />
                        </View>

                    </View>
                    <TextInput
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='grey'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl} />
                    {errors.imageUrl && (
                        <Text style={{fontSize:10, color:'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button style={{backgroundColor:'black'}} onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            }
        </Formik>
    )
}

const styles = StyleSheet.create({})

export default FormikPostUploader

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Image, SafeAreaView, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TouchableHighlight, Alert, FlatList } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import COLORS from '../../constants/colors';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('screen')
import { v5 } from 'uuid';
const UploadScreen = () => {
    const [ area, setArea ] = useState('');
    const [ baths, setBaths ] = useState('');
    const [ beds, setBeds ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ owner, setOwner ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ details, setDetails ] = useState('');
    const [ image, setImage ] = useState(null);
    const [ interiorImages, setInteriorImages ] = useState([]);
    const [ optionIndex, setOptionIndex ] = useState(0);
    const [ inserted, setInserted ] = useState(false);
    const ListOptions = () => {
        const optionList = [
            {
                title: 'خانوو',
                img: require('../../assets/catHouse.jpg')
            },
            {
                title: 'زەوی',
                img: require('../../assets/catLand.jpg')
            },
        ];
        return <View style={style.listOptionContainer}>
            {
                optionList.map((option, index) => (
                    <Pressable key={index} onPress={() => setOptionIndex(index)}>
                        <View style={[ style.optionCard, (index === optionIndex) ? style.activeOptionCard : style.optionCard ]}>
                            <Image source={option.img} style={style.optionCardImage} />
                            <Text style={{
                                marginTop: 10,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>{option.title}</Text>
                        </View>
                    </Pressable>
                ))
            }
        </View>
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });
        if (!result.cancelled) setImage(result.uri);

    }
    function removeDuplicates(allInteriors, uri) {
        let unique = [];
        allInteriors.forEach(items => {
            items.includes(uri) ? '' : unique.push(items);
        })
        return unique;
    }
    const pickImages = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            let interiors;
            if (!result.cancelled) {
                const checkIfKeyExists = await AsyncStorage.getAllKeys();
                if (!checkIfKeyExists.includes('interiorImages')) {
                    const { uri } = result;
                    interiors = await AsyncStorage.setItem('interiorImages', JSON.stringify([ uri ]))
                }
                if (checkIfKeyExists.includes('interiorImages')) {
                    const { uri } = result;
                    const imgs = await AsyncStorage.getItem('interiorImages');
                    const all = JSON.parse(imgs);
                    all.push(uri);
                    interiors = await AsyncStorage.setItem('interiorImages', JSON.stringify(all))
                }
                const imgs = await AsyncStorage.getItem('interiorImages');
                const all = JSON.parse(imgs);
                console.log(all)
                // console.log(removeDuplicates(all, result.uri));
                // if (removeDuplicates(all, result.uri).length <= 8) setInteriorImages(removeDuplicates(all, result.uri));
                // await AsyncStorage.removeItem('interiorImages');
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    //                 id: 1,
    //                                                 createdAt: new Date

    const InteriorImage = ({ imgs }) => {
        return <View
            style={{ width: width - 20, height: 200, justifyContent: 'space-between', alignItems: 'center' }} >
            <Image source={{ uri: imgs }} style={{ width: 200, height: 200 }} />
        </View >
    }
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') Alert.alert('info', 'Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, [])
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView style={{ width, height }}>
                    <ListOptions />
                    <View style={style.inputContainer}>
                        <CustomTextInput
                            placeholder="Property Title"
                            state={title}
                            setState={setTitle}
                            iconName='title'
                            iconSize={25}
                            keyboardType='default'
                        />
                        <CustomTextInput
                            placeholder="Property Area"
                            state={area}
                            setState={setArea}
                            iconName='aspect-ratio'
                            iconSize={25}
                            keyboardType='numeric'
                        />
                        <CustomTextInput
                            placeholder="Bath Tubs"
                            state={baths}
                            setState={setBaths}
                            iconName='bathtub'
                            iconSize={25}
                            isHidden={optionIndex === 1 ? true : false}
                            keyboardType='numeric'
                        />
                        <CustomTextInput
                            placeholder="Bedrooms"
                            state={beds}
                            setState={setBeds}
                            iconName='hotel'
                            iconSize={25}
                            isHidden={optionIndex === 1 ? true : false}
                            keyboardType='numeric'
                        />
                        <CustomTextInput
                            placeholder="Property Location"
                            state={location}
                            setState={setLocation}
                            iconName='place'
                            iconSize={25}
                            keyboardType='default'
                        />
                        <CustomTextInput
                            placeholder="Owner Name"
                            state={owner}
                            setState={setOwner}
                            iconName='person'
                            iconSize={25}
                            keyboardType='default'
                        />

                        <CustomTextInput
                            placeholder="Property Price"
                            state={price}
                            setState={setPrice}
                            iconName='money'
                            iconSize={25}
                            keyboardType='default'
                        />
                        <CustomTextInput
                            placeholder="Write the details in no more than 5 lines"
                            state={details}
                            setState={setDetails}
                            iconName='info'
                            iconSize={25}
                            alignItems={'flex-start'}
                            textAlignVertical={'top'}
                            paddingVertical={20}
                            height={200}
                            numberOfLines={5}
                            multiLine={true}
                            keyboardType='default'
                        />
                        <TouchableHighlight
                            onPress={pickImage}
                            style={{
                                marginBottom: 40,
                                borderRadius: 10,
                            }} >
                            <View style={{
                                height: 50,
                                backgroundColor: COLORS.light,
                                width: width - 40,
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingHorizontal: 20
                            }}>
                                <Icon name="image" size={50} color={COLORS.grey} />
                            </View>
                        </TouchableHighlight>
                        <View style={{
                            width: width - 40,
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            marginBottom: 40
                        }}>
                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>
                        <TouchableHighlight
                            onPress={pickImages}
                            style={{
                                marginBottom: 40,
                                borderRadius: 10,
                            }} >
                            <View style={{
                                height: 50,
                                backgroundColor: COLORS.light,
                                width: width - 40,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 20
                            }}>
                                <Icon name="image" size={25} color={COLORS.grey} />
                                <Text style={{ fontSize: 16, marginLeft: 10, color: COLORS.grey }}>Interior Images 5-7</Text>
                            </View>
                        </TouchableHighlight>
                        <FlatList
                            snapToInterval={width - 20}
                            contentContainerStyle={{
                                paddingVertical: 20
                            }}
                            style={{ marginBottom: 20 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={interiorImages}
                            keyExtractor={(_, key) => key.toString()}
                            renderItem={({ item }) => <InteriorImage imgs={item} />}
                        />
                    </View>
                </ScrollView >
            </KeyboardAvoidingView >
        </SafeAreaView >
    );
}

const style = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    optionCard: {
        height: 210,
        width: width / 2 - 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    activeOptionCard: {
        borderWidth: 1,
        shadowColor: COLORS.blue,
    },
    optionCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%'
    },
    listOptionContainer: {
        backgroundColor: COLORS.transparent,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 50,
        paddingHorizontal: 20
    },
})

export default UploadScreen;

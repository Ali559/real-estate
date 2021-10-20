import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';
const { width } = Dimensions.get('screen');
const ListCards = ({ house, navigation }) => {
    const imageSource = Image.resolveAssetSource(house.image).uri;
    return (<Pressable
        key={house.id}
        onPress={() => navigation.navigate('DetailsScreen', house)} >
        <View style={style.categoryCard}>
            <Image
                source={{ uri: imageSource }}
                style={{
                    flex: 1,
                    borderRadius: 10,
                    resizeMode: 'cover'
                }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{house.title}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.blue }}>{(house.price.includes('$')) ? house.price : `$${house.price}`}</Text>
            </View>
            <Text style={{ marginTop: 5, color: COLORS.grey, fontSize: 14 }}>{house.location}</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <View style={{
                    flexDirection: 'row',
                    marginRight: 15
                }}>
                    <Icon name="hotel" size={18} />
                    <Text style={{ marginLeft: 5, color: COLORS.grey }}>{house.bedrooms}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginRight: 15
                }}>
                    <Icon name="bathtub" size={18} />
                    <Text style={{ marginLeft: 5, color: COLORS.grey }}>{house.bathrooms}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginRight: 15
                }}>
                    <Icon name="aspect-ratio" size={18} />
                    <Text style={{ marginLeft: 5, color: COLORS.grey }}>{house.area}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 10,
                }}>
                    <Icon
                        onPress={() => {
                            Alert.alert(
                                "دڵنیا کردنەوە",
                                "دڵنیای لە سڕینەوەی ئەم موڵکە؟",
                                [
                                    {
                                        text: "نەخێر",
                                        onPress: () => { return },
                                        style: "cancel"
                                    },
                                    {
                                        text: "بەڵێ",
                                        onPress: () => { return },
                                        style: 'default'
                                    }
                                ]
                            );
                        }}
                        name="delete"
                        size={20}
                        color={COLORS.red} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 40,
                    }}>
                    <Icon
                        onPress={() => {
                            Alert.alert(
                                "دڵنیا کردنەوە",
                                "دڵنیای لە سڕینەوەی ئەم موڵکە؟",
                                [
                                    {
                                        text: "نەخێر",
                                        onPress: () => { return },
                                        style: "cancel"
                                    },
                                    {
                                        text: "بەڵێ",
                                        onPress: () => setHouses(onDelete(house)),
                                        style: 'default'
                                    }
                                ]
                            );
                        }}
                        name="edit"
                        size={20}
                        color={COLORS.blue} />
                </View>
            </View>
        </View>
    </Pressable>
    );
}

const style = StyleSheet.create({
    categoryCard: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
})

export default ListCards;

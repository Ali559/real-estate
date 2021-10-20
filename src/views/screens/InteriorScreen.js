import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react'
import { useState } from 'react';
import { View, Text, Dimensions, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors';

export default function InteriorScreen({ route }) {
    const { width, height } = Dimensions.get('screen');
    const house = route.params;
    const IMAGE_SIZE = 80;
    const [ activeIndex, setActiveIndex ] = useState(0);
    const topRef = useRef();
    const thumbRef = useRef();
    const setNativeIndex = (event) => {
        setActiveIndex(event);
        topRef?.current?.scrollToOffset({
            offset: event * width,
            animated: true
        });
        if ((event * (IMAGE_SIZE + 10) - IMAGE_SIZE / 2 > width / 2)) {
            thumbRef?.current.scrollToOffset({
                offset: event * (IMAGE_SIZE + 10) - width / 2 + IMAGE_SIZE / 2,
                animated: true
            })
        } else {
            thumbRef?.current.scrollToOffset({
                offset: 0,
                animated: true
            })
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.dark }}>
            <StatusBar hidden />
            <FlatList
                ref={topRef}
                data={house.interiors}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(_, key) => key.toString()}
                horizontal
                onMomentumScrollEnd={event => {
                    setNativeIndex(Math.round(event.nativeEvent.contentOffset.x / width));

                }}
                renderItem={({ item }) => {
                    return <View style={{ width, height }}>
                        <Image source={item} style={
                            {
                                width: ' 100%',
                                height: '100%',
                                resizeMode: 'cover'
                            }
                        } />
                    </View>
                }}

            >

            </FlatList>
            <FlatList
                ref={thumbRef}
                data={house.interiors}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, key) => key.toString()}
                horizontal
                contentContainerStyle={{ paddingHorizontal: 10 }}
                style={{ position: 'absolute', bottom: IMAGE_SIZE }}
                renderItem={({ item, index }) => {
                    return <TouchableOpacity onPress={() => setNativeIndex(index)}>
                        <Image source={item} style={
                            {
                                width: IMAGE_SIZE,
                                height: IMAGE_SIZE,
                                borderRadius: 12,
                                marginRight: 10,
                                borderWidth: 2,
                                borderColor: activeIndex == index ? COLORS.white : COLORS.transparent,
                            }
                        } />
                    </TouchableOpacity>
                }}

            >

            </FlatList>
        </View >
    )
}


import { useState, useRef } from 'react';

import { Animated, useWindowDimensions, StatusBar, SafeAreaView, StyleSheet, Image, View, Text, Pressable, FlatList } from 'react-native';

import COLORS from '../../constants/colors';
import React from 'react';
const OnBoardScreen = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[ 0 ].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const images = [
        require('../../assets/house.jpg'),
        require('../../assets/carousel2.jpg'),
        require('../../assets/carousel3.jpg')
    ]
    const Indicator = ({ currentIndex }) => {
        return <View>
            <View style={style.indicatorContainer}>
                <View style={[ style.indicator, (currentIndex == 0) ? style.activeIndicator : style.indicator ]} />
                <View style={[ style.indicator, (currentIndex == 1) ? style.activeIndicator : style.indicator ]} />
                <View style={[ style.indicator, (currentIndex == 2) ? style.activeIndicator : style.indicator ]} />
            </View>
        </View>
    }
    const ImageSlider = ({ item }) => {
        return <View style={[ style.sliderContainer, { width } ]}>
            <Image source={item} style={[ style.image, { resizeMode: 'contain' } ]} ></Image>
        </View>
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor={COLORS.transparent} />

            <View style={{ flex: 3 }}>
                <FlatList
                    renderItem={({ item }) => <ImageSlider item={item} />}
                    keyExtractor={(_, key) => key.toString()}
                    alwaysBounceHorizontal
                    pagingEnabled
                    horizontal
                    scrollEventThrottle={32}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    onScroll={Animated.event([ { nativeEvent: { contentOffset: { x: scrollX } } } ], { useNativeDriver: false })}
                    viewabilityConfig={viewConfig}
                    onViewableItemsChanged={viewableItemsChanged}
                />
            </View>

            <Indicator currentIndex={currentIndex} />

            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View>
                    <Text style={style.titleStyle}>
                        Find Your
                    </Text>
                    <Text style={style.titleStyle}>
                        Sweet Home
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={style.textStyle}>We will get your dream come true</Text>
                    <Text style={style.textStyle}>no matter what!</Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    paddingBottom: 40
                }}>
                <Pressable onPress={() => {
                    navigation.navigate("HomeScreen")
                }}>
                    <View style={style.button}>
                        <Text style={{ color: COLORS.white }}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    button: {
        height: 60,
        marginHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.dark,
        color: COLORS.light
    },
    textStyle: {
        fontSize: 16, color: COLORS.grey
    },
    image: {
        flex: 0.8,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 100
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
        borderRadius: 5
    },
    activeIndicator: {
        backgroundColor: COLORS.dark
    },
    titleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default OnBoardScreen;
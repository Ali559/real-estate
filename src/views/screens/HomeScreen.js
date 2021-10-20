import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Text, Image, ScrollView, TextInput, Dimensions, Pressable, FlatList } from 'react-native';
import getAllHouses from '../../lib/getAllHouses';
import getAllLands from '../../lib/getAllLands';
import getMostRecentHouses from '../../lib/getMostRecentHouses';
import getMostRecentLands from '../../lib/getMostRecentLands';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/colors';
import storage from '@react-native-async-storage/async-storage';
import ListCards from '../../components/ListCards';
const { width } = Dimensions.get('screen');
const HomeScreen = ({ navigation }) => {
    const [ houses, setHouses ] = useState([]);
    const [ optionIndex, setOptionIndex ] = useState(0);
    const [ categoryIndex, setCategoryIndex ] = useState(0);
    const [ lands, setLands ] = useState([]);
    const [ newestHouses, setNewestHouses ] = useState([]);
    const [ newestLands, setNewestLands ] = useState([]);
    const [ mostExpensiveHouses, setMostExpensiveHouses ] = useState([]);
    const [ mostExpensiveLands, setMostExpensiveLands ] = useState([]);
    const [ cheapestHouses, setCheapestHouses ] = useState([]);
    const [ cheapestLands, setCheapestLands ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ filteredData, setFilteredData ] = useState([]);
    const whichCardsToShow = () => {
        if (search !== '') return filteredData
        if (categoryIndex === 0 && optionIndex === 0) return newestHouses;
        if (categoryIndex === 1 && optionIndex === 0) return [];
        if (categoryIndex === 2 && optionIndex === 0) return [];

        if (categoryIndex === 0 && optionIndex === 1) return newestLands;
        if (categoryIndex === 1 && optionIndex === 1) return [];
        if (categoryIndex === 2 && optionIndex === 1) return [];

        return 'No Cards to Show!'
    }
    const fetchData = () => {
        getAllHouses(storage, setHouses);
        getAllLands(storage, setLands);
        getMostRecentHouses(houses, setNewestHouses);
        getMostRecentLands(lands, setNewestLands);
    }
    useEffect(() => {
        fetchData();
    }, [])
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
    const ListCategories = () => {
        const categoryList =
            [
                'تازەترین',
                'هەرزانترین',
                'گرانترین'
            ];

        return <View style={style.categoryContainer}>
            {
                categoryList.map((cat, index) => (
                    <View key={index}>
                        <Pressable onPress={() => setCategoryIndex(index)}>
                            <Text style={[
                                { fontSize: 18, fontWeight: "bold", color: COLORS.grey },
                                index == categoryIndex && { color: COLORS.dark, borderBottomWidth: 1, paddingBottom: 5 }
                            ]}>
                                {cat}
                            </Text>
                        </Pressable>
                    </View>
                ))
            }
        </View >;

    }
    const searchFilter = (value) => {
        setSearch(value);
        if (search !== "") {
            if (optionIndex === 0) {
                const filteredData = houses.filter(house => {
                    return Object.values(house).join(" ").toLowerCase().includes(search.toLowerCase());
                });
                setFilteredData(filteredData)
            } if (optionIndex === 1) {
                const filteredData = lands.filter(land => {
                    return Object.values(land).join(" ").toLowerCase().includes(search.toLowerCase());
                });
                setFilteredData(filteredData);
            }
        } else {
            setFilteredData(houses);
        }
    }
    return (
        <SafeAreaView
            style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={style.header}>
                <Pressable onPress={() => navigation.navigate('UploadScreen')}>
                    <Image
                        source={require('../../assets/proImage.jpg')}
                        style={style.proImage}
                    />
                </Pressable>
                <Icon
                    onPress={fetchData}
                    name='refresh'
                    size={30}
                />
            </View>
            <ScrollView>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={style.searchInputContainer}>
                        <Icon name="search" size={25} color={COLORS.grey}></Icon>
                        <TextInput placeholder="Search Properties"
                            value={search}
                            onChangeText={value => searchFilter(value)}
                        />
                    </View>
                    <View style={style.sortBtn}>
                        <Icon name="tune" color={COLORS.white} size={25} />
                    </View>
                </View>
                <ListOptions />
                <ListCategories />
                {typeof whichCardsToShow() == 'object' ? <FlatList
                    snapToInterval={width - 20}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        paddingVertical: 20
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={whichCardsToShow()}
                    keyExtractor={(_, key) => key.toString()}
                    renderItem={({ item }) => <ListCards navigation={navigation} house={item} />}
                /> : <Text style={{ height: 350, fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>هیچ خانوو یان زەوییەک نییە</Text>}
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    categoryContainer: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    optionCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%'
    },
    optionCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
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
    listOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    },
    sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10
    },
    proImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
});

export default HomeScreen;
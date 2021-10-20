import storage from '@react-native-async-storage/async-storage';



const houses = [
    {
        area: '100m',
        baths: '2',
        bedrooms: '3',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        id: 1,
        image: require('../assets/house.jpg'),
        interiors: [
            require('../assets/carousel2.jpg'),
            require('../assets/carousel3.jpg'),
        ],
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'خانووی بەختیاری',
        price: '$150,000',
        createdAt: new Date
    },
    {
        area: '100m',
        baths: '2',
        bedrooms: '3',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        id: 1,
        image: require('../assets/house.jpg'),
        interiors: [
            require('../assets/carousel2.jpg'),
            require('../assets/carousel3.jpg'),
        ],
        location: 'Cillum consequat do commodo ',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'خانووی سەرچنار',
        price: '$150,000',
        createdAt: new Date
    },
    {
        area: '100m',
        baths: '2',
        bedrooms: '3',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        id: 1,
        image: require('../assets/house.jpg'),
        interiors: [
            require('../assets/carousel2.jpg'),
            require('../assets/carousel3.jpg'),
        ],
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'خانووی چوارچرا',
        price: '$150,000',
        createdAt: new Date
    },
    {
        area: '100m',
        baths: '2',
        bedrooms: '3',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        id: 1,
        image: require('../assets/house.jpg'),
        interiors: [
            require('../assets/carousel2.jpg'),
            require('../assets/carousel3.jpg'),
        ],
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'خانووی چوارباخ',
        price: '$150,000',
        createdAt: new Date
    },
]
const lands = [
    {
        id: 1,
        area: '100m',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        image: require('../assets/catLand.jpg'),
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'Ipsum aliqua proident ',
        price: '$150,000',
        createdAt: new Date
    },

    {
        id: 2,
        area: '100m',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        image: require('../assets/catLand.jpg'),
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'Ipsum aliqua proident ',
        price: '$150,000',
        createdAt: new Date
    },
    {
        id: 3,
        area: '100m',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        image: require('../assets/catLand.jpg'),
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'Ipsum aliqua proident ',
        price: '$150,000',
        createdAt: new Date
    },
    {
        id: 4,
        area: '100m',
        details: 'Ipsum est laboris occaecat commodo id magna sunt commodo.',
        image: require('../assets/catLand.jpg'),
        location: 'lorem ispsum doler',
        owner: 'John Doe',
        phone: '0281-314-2421',
        title: 'Ipsum aliqua proident ',
        price: '$150,000',
        createdAt: new Date
    },
]


export { houses, lands };
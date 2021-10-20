import storage from '@react-native-async-storage/async-storage'

const deleteHouse = async (house) => {

    try {
        const get = await storage.getItem('houses');
        const houses = JSON.parse(get);
        const alteredHouses = houses.filter(e => e.id !== houseOrLand.id);
        await storage.setItem('houses', JSON.stringify(alteredHouses));
        return await storage.getItem('houses');
    } catch (err) { console.log(err.message) }
}


export { deleteHouse };

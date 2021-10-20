export default async function getAllHouses(storage, setHouses) {
    try {
        const get = await storage.getItem('houses');
        const all = JSON.parse(get);
        setHouses(all)
    } catch (err) { console.log(err.message) }

}

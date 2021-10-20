export default async function getMostRecentHouses(houses, setNewestHouses) {
    const mostRecentHouseDate = new Date(Math.max.apply(null, houses.map(house => {
        return new Date(house.createdAt);
    })));

    let mostRecent = [];
    houses.filter(house => {
        const date = new Date(house.createdAt).getTime();
        (date == mostRecentHouseDate.getTime()) ? mostRecent.push(house) : [];
    })
    setNewestHouses(mostRecent);
}
export default async function getMostRecentLands(lands, setNewestLands) {
    const mostRecentLandDate = new Date(Math.max.apply(null, lands.map(land => {
        return new Date(land.createdAt);
    })));

    let mostRecent = [];
    lands.filter(land => {
        const date = new Date(land.createdAt).getTime();
        (date == mostRecentLandDate.getTime()) ? mostRecent.push(land) : [];
    })
    setNewestLands(mostRecent);
}
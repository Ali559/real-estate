export default async function getAllLands(storage, setLands) {
    const get = await storage.getItem('lands');
    const all = JSON.parse(get);
    setLands(all);
}
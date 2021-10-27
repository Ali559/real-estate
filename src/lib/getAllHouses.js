export default async function getAllHouses(storage, setHouses) {
  try {
    setHouses(storage);
  } catch (err) {
    console.log(err.message);
  }
}

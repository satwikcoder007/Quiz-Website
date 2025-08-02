export default fetchData = async()=>{
    const data = await axios.fetchData("https://opentdb.com/api.php?amount=15")
    print(data)
}
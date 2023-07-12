function search() {
    let {value} = document.getElementById("searchInput")
    console.log('searching', value)

    const baseUrl ="https://google.com/search?q="
    if(!value) value ="alex bhizer"
    location.replace(baseUrl + value)
}
// api to use for this assignment  
// https://api.vschool.io/pokemon

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//console.log("test1")
const xhr = new XMLHttpRequest()
//console.log("test2")
xhr.open("GET", "https://api.vschool.io/pokemon", true)
//console.log("test3")
xhr.send()
//console.log("test4")

xhr.onreadystatechange = function(){
    //console.log("test5")
    if (xhr.readyState === 4 && xhr.status === 200){
        //console.log("test6")
        const JSONdata = xhr.responseText
        console.log(JSONdata)
        const pokemonData = JSON.parse(JSONdata)
        console.log(pokemonData.results)
        showData(pokemonData.results)
    }
}

function showData (pokemanArr){
    for (i=0; i < pokemanArr.length ; i++){
        let hName = document.createElement("h1")
        hName.textContent = pokemanArr.hName
        document.append(hName)
        let pokeUrl = decodeURI(arr[i].resource_uri)
        console.log("hellow")
    }
}

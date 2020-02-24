//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const pokemonData = JSON.parse(JSONdata);
    //console.log(pokemonData.objects[0].pokemon.length)
    showData(pokemonData.objects[0].pokemon);
  }
};

function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].name)
    const hDiv = document.createElement("div");
    const hName = document.createElement("h1");
    const pokePic = document.createElement("img");
    hName.textContent = arr[i].name;
    let pokeDiv = "div" + i;
    hDiv.setAttribute("id", pokeDiv);
    hName.setAttribute("class", "pokeName");
    pokePic.setAttribute("class", "pokePic");

    //pass resource_uri to a function and return a url to pic of pokemon
    // let spriteAPI = getThePicURL(arr[i].resource_uri);
    //Tried functions to get the url but was getting errors has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    // really all I need is the number and append it to the url dor the pic I need
    let getNum = arr[i].resource_uri.split('/')
    //console.log(getNum[3])
    let pokeSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getNum[3] +".png" 
    console.log(pokeSpriteURL)
    // let spriteURL = getURL4Sprite(spriteAPI);
    //display pic on dom
    pokePic.setAttribute(
      "src",
      pokeSpriteURL
    );
    //display on DOM
    document.body.append(hDiv);
    const betweenDiv = document.getElementById(pokeDiv);
    //document.getElementById("pokeDiv").append(pokePic)
    betweenDiv.appendChild(pokePic);
    betweenDiv.appendChild(hName);
  }
}
// looked in postman and google https://pokeapi-how.appspot.com/page5
// want to pull the sprtites section and grab the url for "front_default"
//exampl uri http://pokeapi.co/api/v1/pokemon/19/
function getThePicURL(passURI) {
  //console.log(passURI);
  let makeURL = "https://pokeapi.co/" + passURI;
  //console.log(makeURL);
  return makeURL;
}

// function getURL4Sprite(urlData) {
//   //console.log(urlData)
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", urlData, true);
//   xhr.send();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const JSONdata = xhr.responseText;
//       //console.log(JSONdata);
//       const spriteData = JSON.parse(JSONdata);
//       //console.log(pokemonData.objects[0].pokemon.length)
//       console.log(spriteData);
//     }
//   };
// }

//WORKS-->"http://pokeapi.co/api/v1/pokemon/19/"
//https://api.vschool.io/pokemon=api/v1/pokemon/19/
// https://api.vschool/v1/pokemon/4/

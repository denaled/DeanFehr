

document.getElementById("page1But").addEventListener("click", infoPage2)

function infoPage2(){
    axios.get("https://api.vschool.io/pokemon")
    .then(response=>{
        console.log(response.data.objects[0])
        let arr =response.data.objects[0].pokemon
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
       
           let getNum = arr[i].resource_uri.split('/')
           
           let pokeSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + getNum[3] +".png" 
           console.log(pokeSpriteURL)
           
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

    })
    .catch(error => console.log(error))
}

function getThePicURL(passURI) {
   //console.log(passURI);
   let makeURL = "https://pokeapi.co/" + passURI;
   //console.log(makeURL);
   return makeURL;
 }
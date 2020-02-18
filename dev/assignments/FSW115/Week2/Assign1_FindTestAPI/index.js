//Googled... found https://www.w3schools.com/js/js_json_parse.asp
//thought I had to parse it, into an obj, before using it... which I had tried but reciebed errors
// ended up just pasting the JSON to a var and using it ... easier than I started out lol

const swDataObj = {
    "name": "Anakin Skywalker",
    "height": "188",
    "mass": "84",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "41.9BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/44/",
        "https://swapi.co/api/vehicles/46/"
    ],
    "starships": [
        "https://swapi.co/api/starships/59/",
        "https://swapi.co/api/starships/65/",
        "https://swapi.co/api/starships/39/"
    ],
    "created": "2014-12-10T16:20:44.310000Z",
    "edited": "2014-12-20T21:17:50.327000Z",
    "url": "https://swapi.co/api/people/11/"
}

document.getElementById("name").textContent = "Name: " + swDataObj.name;
document.getElementById("gender").textContent = "Gender: " + swDataObj.gender;
document.getElementById("birthYear").textContent = "Birth Year: " + swDataObj.birth_year;
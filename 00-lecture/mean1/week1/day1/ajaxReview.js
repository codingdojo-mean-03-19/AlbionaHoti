// assuming you have jQuery
// $(document).ready(function() {
//   var favoritePokemon;
//   // the given link is for Bulbasaur's information
//   $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data) {
//     favoritePokemon = data.name;
//     console.log("Got my favorite Pokenmon", favoritePokemon);
//   });
// });

/*


*/

var secondFavorite;
// let's use setTimeout to simulate an API call that takes 0 seconds
setTimeout(function() { secondFavorite = "charmander"; }, 0);
console.log("Got my second favorite", secondFavorite);
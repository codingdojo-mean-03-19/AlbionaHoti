import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
      this.getPokemons();
   }

   getPokemons() {

    let all_pokemons_same_ability = this._http.get('https://pokeapi.co/api/v2/pokemon');
    let count = 0;
    all_pokemons_same_ability.subscribe(data => {
    
      console.log('All pokemons same ability', data);
      let fav_pokemon_ability = "";
      let fav_ability = "run-away";
      
      for(let res of data.results){
        let count_fav_ability = 0;
        // console.log("Res: ", res.url);
        let another_call = this._http.get(res.url);
        let fav_ability = "run-away";
    
        another_call.subscribe(data => {
          // console.log('One by one: ', data);
          let abi = "";
          let res = "";
          let name = "";
          let result = "";
          for(const ability of data.abilities) {
            // console.log("Ability: ", ability.ability.name);
            if(abi != "") {
              abi  += ' and ' + ability.ability.name;
            } else {
              abi  += ability.ability.name;
            }
            
            
            if(fav_ability === ability.ability.name) {
              count = ++count_fav_ability;
              res += `${data.name}'s ability is my favorite`;

              // console.log("Fav ability: ", res);
            }
            
          }
          name += `${data.name}'s abilities are `;
          result += name + abi;
          console.log(result);
        })
      }
      fav_pokemon_ability += `${count} Pokemon have the ${fav_ability} ability`;

      console.log(fav_pokemon_ability);
    });
 // let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    // bulbasaur.subscribe(data => {
    //   console.log(data);
    //   let abilities = "";
    //   let name = "";
    //   let result = "";
    //   let abi ="";
    //   for(const ability of data.abilities) {
    //     console.log("Ability: ", ability.ability.name);

    //     if(abi != "") {
    //       abi  += ' and ' + ability.ability.name;
    //     } else {
    //       abi  += ability.ability.name;
    //     }
    //   }
    //   name += `${data.name}'s abilities are `;
    //   result += name + abi;

    //   console.log(result);
    // });
   }
}

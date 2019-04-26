import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  ninja_gold = [];
  activities = [];
  gold_amount: Number;
  your_gold: Number = 0;
  
  constructor(private _httpService: HttpService) {

  }

  postToNinja(title: String, gold_amount: Number, activity: String): void {

    let ninja_observable = this._httpService.postNinja({title: title, gold_amount: gold_amount},{});
    console.log("Ninja observable", ninja_observable)
    ninja_observable.subscribe(data => {
      this.ninja_gold = data['ninja_gold']
      console.log('Data console: ', data);
      
      let get_ninjas = this._httpService.getNinja();
      get_ninjas.subscribe(data => {
        console.log("GET NINJAS: ", data);
        var total: Number=0;
        for(var i=0; i<data.ninjas.length; i++) {
          if(data.ninjas.title === "Casino") {
            data.ninjas.gold_amount * -1;
            total = data.ninjas[i].gold_amount;
          }
          total = data.ninjas[i].gold_amount;
        }

        if(gold_amount == 15) {
          this.activities.push("You added 15 gold as Farm");
        } else if(gold_amount == 7) {
          this.activities.push("You added 7 gold as Cave");
        } else if(gold_amount == 3) {
          this.activities.push("You added 3 gold as House");
        } else if(gold_amount == 50 || gold_amount == -50) {
          this.activities.push("You added 50 or -50 gold as House");
        }
        
        console.log("Activity: ", this.activities);
        this.your_gold += total;
      })

    })

    // this.your_gold += this.ninja_gold.gold_amount;
    console.log(`Title: ${title}, Gold_amount: ${gold_amount}, Activity: ${activity}`);

  }
}

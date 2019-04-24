import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Book Api';
  authors = []
  constructor(private _httpService: HttpService){
      
  }

  ngOnInit(){
    this.getAuthorsFromService()
  }

  getAuthorsFromService() {
    let observable = this._httpService.getAuthors()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.authors = data['authors'];
    })
  }
}

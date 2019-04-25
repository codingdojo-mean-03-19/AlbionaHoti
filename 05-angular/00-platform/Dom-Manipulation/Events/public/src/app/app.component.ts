import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

 
  onButtonClick(): void { 
    console.log(`Click event is working`);
  }

  onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
  }

  onButtonClickParams(num: Number, str: String): void { 
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }

  onButtonClickEvent(event: any): void { 
    console.log(`Click event is working with event: ${event}`);
  }
}

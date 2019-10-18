import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'hello_angular',
  template: `<h1>Hello {{name}}</h1>
             <button (click)="changeName()">Change Name!</button>`
})
export class AppComponent {
    name = 'Angular!';

  constructor(private http: HttpClient){}  

  changeName() {
    this.http.get('/hello_angular/world').subscribe(data => {
      this.name = data['name'];
    });    
  }
}

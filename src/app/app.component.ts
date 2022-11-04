import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>{{titolo}}</h1>, <h2>{{sottotitolo}}</h2>',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titolo: string = 'Nicolas';
  sottotitolo: string = 'Venturini';
}

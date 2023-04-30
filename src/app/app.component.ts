import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  template: `<div>Hello {{value}}</div>`,
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
//  value = 'World';
message = '';

constructor(private http: HttpClient) {
  this.http.get('/api/message')
    .subscribe((resp: any) => this.message = resp.text);
}
}

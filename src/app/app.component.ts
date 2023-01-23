// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  storedPosts = [];
  storedElements = [];

  onPostAdded(event) {
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
    this.storedPosts.push(event);
  }

  onElementAdded(event) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    this.storedElements.push(event);
  }

}

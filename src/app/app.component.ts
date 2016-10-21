import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';

  hello() {
    let x = 'X';
    console.log(x);
  }
}

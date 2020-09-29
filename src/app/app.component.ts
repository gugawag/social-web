import {Component} from '@angular/core';
import {Usuario} from './shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Social IFPB';

  constructor() {
  }

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public needUpdate: boolean = false;
  refairedescendreInfo()
  {
    this.needUpdate = !this.needUpdate;
  }

}

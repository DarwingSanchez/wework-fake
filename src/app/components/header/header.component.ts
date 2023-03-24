import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  public advertising: boolean = true


  clickAdvertising() {
    window.location.href = 'https://www.wework.com/es-LA/solutions/wework-all-access';
  }

  hideAdvertising() {
    this.advertising = !this.advertising
  }
}

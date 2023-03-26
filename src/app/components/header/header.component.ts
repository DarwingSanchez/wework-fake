import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  public advertising: boolean = true

  /**
   * Redirect user to a link when click on advertising modal.
   */
  clickAdvertising() {
    window.location.href = 'https://www.wework.com/es-LA/solutions/wework-all-access';
  }

  /**
   * Hide the advertising when user click on exit.
   */
  hideAdvertising() {
    this.advertising = !this.advertising
  }
}

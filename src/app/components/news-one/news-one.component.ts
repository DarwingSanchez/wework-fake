import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.component.html',
  styleUrls: ['./news-one.component.scss']
})
export class NewsOneComponent {

  /** List for rendering */
  @Input() informationList: any[] = []

}

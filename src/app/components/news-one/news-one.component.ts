import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.component.html',
  styleUrls: ['./news-one.component.scss']
})
export class NewsOneComponent {

  @Input() initialPrice: boolean = false
  @Input() additionalLink: string = 'Hola Mundo'
  @Input() informationList: any[] = []

}

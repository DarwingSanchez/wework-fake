import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.scss']
})
export class LookingForComponent {

  /** List for rendering */
  @Input() listLooking: any[] = [];

}

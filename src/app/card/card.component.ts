import { Component } from '@angular/core';
import { TransformerService } from '../transformer.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private transformer:TransformerService){

  }
toUppercase() {
  this.title = this.transformer.transformSimpleStringToUppercase(this.title);
}
  title="Noteworthy technology acquisitions 2021";
  cardText="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";
}

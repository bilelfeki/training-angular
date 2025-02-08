import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
toUppercase() {
  this.title = this.title.toUpperCase();
}
  title="Noteworthy technology acquisitions 2021";
  cardText="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";
}

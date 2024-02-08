import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData | undefined;

  constructor() { }

  ngOnInit() {
  }

}
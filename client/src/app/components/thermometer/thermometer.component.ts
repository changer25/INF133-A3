import { Component, OnInit, Input } from '@angular/core';
import { TrackFeature } from '../../data/track-feature';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-thermometer',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './thermometer.component.html',
  styleUrl: './thermometer.component.scss'
})

export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() feature: TrackFeature | undefined;
  constructor() { }

  ngOnInit() {
  }

}
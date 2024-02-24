import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import { ArtistData } from '../../data/artist-data'; // Import if not already imported
import { AlbumData } from '../../data/album-data'; // Import if not already imported
import { TrackData } from '../../data/track-data'; // Import if not already imported

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

  getResourceUrl(resource: ResourceData | undefined): string {
    if (!resource) return '#';

    if (resource instanceof ArtistData) {
      return `/artist/${resource.id}`;
    } else if (resource instanceof AlbumData) {
      return `/album/${resource.id}`;
    } else if (resource instanceof TrackData) {
      return `/track/${resource.id}`;
    }

    return '#'; // Fallback URL
  }

}
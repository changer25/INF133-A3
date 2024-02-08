import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.scss'
})

export class TrackPageComponent implements OnInit {
	trackId:string | undefined;
	track: TrackData | undefined;
  audioFeatures: TrackFeature[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id') || "";
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
  }
}

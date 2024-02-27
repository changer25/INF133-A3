import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-top-tracks-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-tracks-page.component.html',
  styleUrls: ['./top-tracks-page.component.scss']
})
export class TopTracksPageComponent implements OnInit {
  topTracks: TrackData[] = [];
  isLoading: boolean = true;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getTopTracks();
  }

  getTopTracks(): void {
    this.spotifyService.getMyTopTracks().then(data => {
      // If the response is directly an array of track data
      console.log(data);
      this.topTracks = data

      // If the response has a different structure, you'll need to adjust the line above
      // For example, if the response structure is { tracks: [...] }
      // you would do:
      // this.topTracks = data.tracks.map(item => new TrackData(item));

      this.isLoading = false;
    }).catch(error => {
      console.error('Error fetching top tracks:', error);
      this.isLoading = false;
    });
  }
}
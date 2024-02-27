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

      console.log(data);
      this.topTracks = data
      this.isLoading = false;
    }).catch(error => {
      console.error('Error fetching top tracks:', error);
      this.isLoading = false;
    });
  }
}
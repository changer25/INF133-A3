import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { TrackListComponent } from '../../components/track-list/track-list.component';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule, TrackListComponent],
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.scss'
})

export class AlbumPageComponent implements OnInit {
	albumId:string | undefined;
	album:AlbumData | undefined;
	tracks:TrackData[] | undefined;


  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService // Inject SpotifyService
  ) { }
  
  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id') || "";
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    if (this.albumId) {
    this.spotifyService.getAlbum(this.albumId).then(albumData => {
      this.album = albumData;
    }).catch(error => console.error("Error fetching album data:", error));

    this.spotifyService.getTracksForAlbum(this.albumId).then(tracksData => {
      this.tracks = tracksData;
    }).catch(error => console.error("Error fetching album tracks:", error));

    }
  }

}

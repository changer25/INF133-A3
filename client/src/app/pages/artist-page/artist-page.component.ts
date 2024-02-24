import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss'
})
export class ArtistPageComponent implements OnInit {
	artistId:string | undefined;
	artist:ArtistData | undefined;
	relatedArtists:ArtistData[] | undefined;
	topTracks:TrackData[] | undefined;
	albums:AlbumData[] | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id') || "";
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
  }

}

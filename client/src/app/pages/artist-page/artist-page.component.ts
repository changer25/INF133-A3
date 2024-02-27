import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';
import { TrackListComponent } from '../../components/track-list/track-list.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule, TrackListComponent, CarouselComponent],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss'
})
export class ArtistPageComponent implements OnInit {
	artistId:string | undefined;
	artist:ArtistData | undefined;
	relatedArtists:ArtistData[] | undefined;
	topTracks:TrackData[] | undefined;
	albums:AlbumData[] | undefined;

  constructor(private route: ActivatedRoute,  private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id') || "";
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
  
    if (this.artistId) {
      // fetching artist data
      this.spotifyService.getArtist(this.artistId).then(artist => this.artist = artist);
  
      // fetching top tracks for the artist
      this.spotifyService.getTopTracksForArtist(this.artistId).then(tracks => this.topTracks = tracks);
  
      // fetching albums for the artist
      this.spotifyService.getAlbumsForArtist(this.artistId).then(albums => this.albums = albums);
  
      // fetching related artists
      this.spotifyService.getRelatedArtists(this.artistId).then(artists => this.relatedArtists = artists);
    }
  }

}

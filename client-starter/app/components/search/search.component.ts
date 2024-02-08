import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [ SpotifyService ]
})

export class SearchComponent implements OnInit {
  searchString:string | undefined;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[] | undefined;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
  }

}
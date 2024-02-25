import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';
import { CarouselComponent } from '../carousel/carousel.component';
import { TrackListComponent } from '../track-list/track-list.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CarouselComponent, TrackListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [ SpotifyService ]
})

export class SearchComponent implements OnInit {
  searchString:string | undefined;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[] | undefined;
  // trackResources: TrackData[] | undefined;
  artistResources: ArtistData[] | undefined;
  albumResources: AlbumData[] | undefined;
  trackResources: TrackData[] | undefined;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  
  search() {
    console.log("Searching");
    if (!this.searchString) return; // Don't search if the string is empty
    this.resources = undefined;
    this.spotifyService.searchFor(this.searchCategory, this.searchString)
      .then(data => {
        console.log(data);
        // Handle search results based on the category
        if (this.searchCategory === 'artist') {
          this.artistResources = data as ArtistData[];
        } else if (this.searchCategory === 'album') {
          this.albumResources = data as AlbumData[];
        } else if (this.searchCategory === 'track') {
          this.trackResources = data as TrackData[];
        }
      })
      .catch(error => console.error("Search error:", error));
  }

}
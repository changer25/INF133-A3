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

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    console.log("Searching");
    if (!this.searchString) return; // Don't search if the string is empty

    this.spotifyService.searchFor(this.searchCategory, this.searchString)
      .then(data => {
        this.resources = data; // Update the resources with the search result
        console.log("Search results:", data); // Print the search results
      })
      .catch(error => console.error("Search error:", error));
  }

}
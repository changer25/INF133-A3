import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.scss'
})

export class AlbumPageComponent implements OnInit {
	albumId:string | undefined;
	album:AlbumData | undefined;
	tracks:TrackData[] | undefined;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id') || "";
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
  }

}

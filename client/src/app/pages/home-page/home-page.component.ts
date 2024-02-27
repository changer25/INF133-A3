import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { SearchComponent } from '../../components/search/search.component';
import { TopTracksPageComponent } from '../../components/top-tracks-page/top-tracks-page.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent, SearchComponent, TopTracksPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

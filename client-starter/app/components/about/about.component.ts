import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements OnInit {
  name:string | undefined;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string | undefined;

  //TODO: inject the Spotify service
  constructor() { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

}
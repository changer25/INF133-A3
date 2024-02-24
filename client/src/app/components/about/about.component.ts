import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

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
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  getAboutMe(): void {
    this.spotifyService.aboutMe().then(profileData => {
      console.log('Profile Data:', profileData); // This will print the profile data to the console
  
      this.name = profileData.name;
      this.profile_pic = profileData.imageURL; // Use imageURL for the profile picture
      this.profile_link = profileData.spotifyProfile; // Use spotifyProfile for the profile link
    }).catch(error => {
      console.error('Error fetching profile data:', error);
    });
  }
}
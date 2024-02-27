import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    const uri: string = `${this.expressBaseUrl}${endpoint}`;

    return firstValueFrom(this.http.get(uri)).then((response) => {
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category: string, resource: string): Promise<ResourceData[]> {
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.
    const encodedResource = encodeURIComponent(resource);
    const endpoint = `/search/${category}/${encodedResource}`;
    
    return this.sendRequestToExpress(endpoint).then((response) => {
      // Depending on the category, map the response to the appropriate data type
      switch (category) {
        case 'artist':
          return response.artists.items.map((item: any) => new ArtistData(item));
        case 'album':
          return response.albums.items.map((item: any) => new AlbumData(item));
        case 'track':
          return response.tracks.items.map((item: any) => new TrackData(item));
        default:
          throw new Error(`Unsupported search category: ${category}`);
      }
    });
  }



  getArtist(artistId: string): Promise<ArtistData> {
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
    const encodedId = encodeURIComponent(artistId);
    const endpoint = `/artist/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((data) => new ArtistData(data));
  }



  getRelatedArtists(artistId: string): Promise<ArtistData[]> {
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
    const encodedId = encodeURIComponent(artistId);
    const endpoint = `/artist-related-artists/${encodedId}`;

    return this.sendRequestToExpress(endpoint).then((response) => response.artists.map((item: any) => new ArtistData(item)));
  }

  getTopTracksForArtist(artistId: string): Promise<TrackData[]> {
    //TODO: use the top tracks endpoint to make a request to express.
    const encodedId = encodeURIComponent(artistId);
    const endpoint = `/artist-top-tracks/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((response) => response.tracks.map((item: any) => new TrackData(item)));
  }


  getAlbumsForArtist(artistId: string): Promise<AlbumData[]> {
    //TODO: use the albums for an artist endpoint to make a request to express.
    const encodedId = encodeURIComponent(artistId);
    const endpoint = `/artist-albums/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((response) => response.items.map((item: any) => new AlbumData(item)));
  }


  getAlbum(albumId: string): Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    const encodedId = encodeURIComponent(albumId);
    const endpoint = `/album/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((data) => new AlbumData(data));
  }


  getTracksForAlbum(albumId: string): Promise<TrackData[]> {
    //TODO: use the tracks for album endpoint to make a request to express.
    const encodedId = encodeURIComponent(albumId);
    const endpoint = `/album-tracks/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((response) => response.items.map((item: any) => new TrackData(item)));
  }


  getTrack(trackId: string): Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    const encodedId = encodeURIComponent(trackId);
    const endpoint = `/track/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((data) => new TrackData(data));
  }


  getAudioFeaturesForTrack(trackId: string): Promise<TrackFeature[]> {
    //TODO: use the audio features for track endpoint to make a request to express.
    const encodedId = encodeURIComponent(trackId);
    const endpoint = `/track-audio-features/${encodedId}`;
  
    return this.sendRequestToExpress(endpoint).then((data) => {
      // Assuming the data contains the audio features directly
      return TrackFeature.FeatureTypes.map((featureType) => {
        // For each feature type defined in TrackFeature, create a new TrackFeature instance
        // The percent value is assumed to be directly available in the data for each feature type
        // e.g., data.danceability for the danceability feature
        const percent = data[featureType] !== undefined ? data[featureType] : 0;
        return new TrackFeature(featureType, percent);
      });
    });
  }

  getMyTopTracks(): Promise<TrackData[]> {
    // This endpoint does not require a user ID since it's assumed to use the logged-in user's access token
    const endpoint = '/me/top/tracks';
    console.log('hi');
    return this.sendRequestToExpress(endpoint).then((data) => {
      // Assuming the response contains an array of track items
      console.log(data);
      return this.sendRequestToExpress(endpoint).then((data) => data.items.map((item: any) => new TrackData(item)));
    });
  }
}

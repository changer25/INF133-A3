import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopTracksPageComponent } from './components/top-tracks-page/top-tracks-page.component';

export const routes: Routes = [
	{ path: 'artist/:id', component: ArtistPageComponent},
	{ path: 'track/:id', component: TrackPageComponent},
	{ path: 'album/:id', component: AlbumPageComponent},
	{ path: '', component: HomePageComponent},
    { path: 'top-tracks', component: TopTracksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
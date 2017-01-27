import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { HomeComponent } from './home/home.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';


const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'edit-player',
  component: EditPlayerComponent
},
{
  path: 'player-profile/:id',
  component: PlayerProfileComponent
}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

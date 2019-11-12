import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsListComponent } from './epic-ratings/tournaments-list/tournaments-list.component';
import { PlayersListComponent } from './epic-ratings/players-list/players-list.component';
import { EpicRatingsComponent } from './epic-ratings/epic-ratings.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AllPostsComponent } from './all-posts/all-posts.component';

const routes: Routes = [
  { path: '', component: AllPostsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'Epic', component: EpicRatingsComponent },
  { path: 'Epic/tournaments', component: TournamentsListComponent },
  { path: 'Epic/players', component: PlayersListComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

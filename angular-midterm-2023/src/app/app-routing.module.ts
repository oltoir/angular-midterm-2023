import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {FeedComponent} from "./pages/feed/feed.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllContactsDataComponent } from './all-contacts-data/all-contacts-data.component';
import { LoginAppComponent } from './login-app/login-app.component';

const routes: Route[] = [
{path:'',component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'search',component:SearchComponent},
{path:'AllContacts', component:AllContactsDataComponent},
{path:'Login',component:LoginAppComponent},
{path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

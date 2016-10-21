import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LanguagesComponent}  from './words/languages/languages.component';
import {EditLanguageComponent} from './words/languages/edit-language/edit-language.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'languages',
    component: LanguagesComponent
  },
  {
    path: 'languages/new',
    component: EditLanguageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}

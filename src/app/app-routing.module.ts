import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

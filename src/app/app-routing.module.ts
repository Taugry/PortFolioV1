import { ContactComponent } from './Pages/contact/contact.component';
import { CompTechComponent } from './Pages/comp-tech/comp-tech.component';
import { ExpProComponent } from './Pages/exp-pro/exp-pro.component';
import { EtudesComponent } from './Pages/etudes/etudes.component';
import { CVComponent } from './Pages/cv/cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'cv', component: CVComponent},
  { path:'etudes', component: EtudesComponent},
  { path:'exppro', component: ExpProComponent},
  { path:'comptech', component: CompTechComponent},
  { path:'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: "home", component: HomeComponent
    },
    {
        path: "faq", component: FaqComponent
    },
    { 
        path : '**', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

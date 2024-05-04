import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { BlogComponent } from './components/blog/blog.component';
import { KaratComponent } from './components/karat/karat.component';
import { SingleviewComponent } from './components/singleview/singleview.component';


const routes: Routes = [
  {
    path:"core",component:CoreComponent
  },
 
  {
    path:"home",component:HomeComponent
  },
  {
    path:"",redirectTo:"/core/home",pathMatch:"full"
  },
  {
    path:"blog/:id",component:BlogComponent
  },
  {
    path:"karat/:karat",component:KaratComponent
  },
  {
    path:"tablesv",component:SingleviewComponent
  },
  {
    path: 'features',
    loadChildren: () => import('../features/features/features.module').then(m => m.FeaturesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

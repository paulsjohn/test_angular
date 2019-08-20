import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
        {
          path: '',
          redirectTo: 'listing',
          pathMatch: 'full'
        },
        {
          path: 'listing',
          component: ListingComponent
        },
        {
          path: 'create',
          component: CreateComponent
        },
        {
          path: 'update',
          component: UpdateComponent
        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadquarterRoutingModule { }

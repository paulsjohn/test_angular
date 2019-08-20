import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadquarterRoutingModule } from './headquarter-routing.module';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [ListingComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    HeadquarterRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class HeadquarterModule { }



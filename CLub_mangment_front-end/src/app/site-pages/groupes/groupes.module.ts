import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupesRoutingModule } from './groupes-routing.module';
import { NewGroupeComponent } from './new-groupe/new-groupe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListGroupesComponent } from './list-groupes/list-groupes.component';
import { GroupeDetailsComponent } from './groupe-details/groupe-details.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    NewGroupeComponent,
    ListGroupesComponent,
    GroupeDetailsComponent
  ],
  imports: [
    CommonModule,
    GroupesRoutingModule,
    ReactiveFormsModule,
    MatTabsModule
     
  ]
})
export class GroupesModule { }

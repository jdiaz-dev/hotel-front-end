import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoomCategoriesRoutingModule } from './room-categories-routing.module';
import { CategoryCollectionComponent } from './infraestructure/ui/components/category-collection.component';
import { CreateUpdateCategoryComponent } from './infraestructure/ui/modals/create-update-category.component';
import { RoomCategoriesContainerComponent } from './infraestructure/ui/components/room-categories-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomCategoriesPersitenceService } from './infraestructure/out/server/room-categories-persitence.service';


@NgModule({
  declarations: [
    CategoryCollectionComponent,
    CreateUpdateCategoryComponent,
    RoomCategoriesContainerComponent,
  ],
  imports: [
    CommonModule,
    RoomCategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [RoomCategoriesPersitenceService]
})
export class RoomCategoriesModule { }

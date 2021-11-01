import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './infraestructure/ui/components/shared/form-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsContainerComponent } from './infraestructure/ui/components/clients-container/clients-container.component';
import { ClientSearcherComponent } from './infraestructure/ui/components/clients-container/client-searcher.component';
import { ClientCollectionComponent } from './infraestructure/ui/components/clients-container/client-collection.component';

@NgModule({
  declarations: [FormClientComponent, ClientsContainerComponent, ClientSearcherComponent, ClientCollectionComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [FormClientComponent]
})
export class ClientsModule { }

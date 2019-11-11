import { ConfService } from './conf/conf.service';
import { ReadService } from './read/read.service';

import { UpdateService } from './client/update/update.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HttpModule } from '@angular/http';
import { ClientService } from './client/client.service';
import { AddComponent } from './add/add.component';
import { AddService } from './add/add.service';
import { UpdateComponent } from './client/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadComponent } from './read/read.component';
import { SharedService } from './shared.service';
import { ConfComponent } from './conf/conf.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDeleteConfirmModule } from 'ngx-delete-confirm';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: '', component: ClientComponent},
  { path: 'add', component: AddComponent},
  //{ path: 'update/:id/:name/:roomNr', component: UpdateComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'read/:name/:roomNr', component: ReadComponent},
  //{ path: 'read', component: ReadComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddComponent,
    UpdateComponent,
    ReadComponent,
    ConfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    NgxDeleteConfirmModule.forRoot(),
    //FilterPipe,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [ClientService, AddService, UpdateService, ReadService, SharedService, ConfService, NgbActiveModal,],
  bootstrap: [AppComponent],
  entryComponents: [ConfComponent]
})
export class AppModule { }

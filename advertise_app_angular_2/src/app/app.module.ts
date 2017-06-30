import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import {ModalModule} from 'ng2-modal';

import { AppComponent }  from './app.component';
import { AdvertisementAddComponent } from './components/advertisement-component/advertisement_add_component';
import { AdvertisementDisplayComponent} from './components/advertisement-table-component/advertisement_table_display';
import { AdvertisementEditComponent } from './components/advertisement-edit-component/advertisement_edit_component';
import { TemplateDrivenFormComponent } from './components/advertisement-template-driven/advertisment-form';
import { ModelDrivenFormComponent } from './components/advertisement-model-driven/advertisement-form';
import { ModelDrivenFormBuilderComponent } from './components/advertisement-form-builder/advertisement-form';
import { SearchPipe } from './custompipes/search-pipe';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ,
                  ReactiveFormsModule,
                  HttpModule,
                  ModalModule,
                  RouterModule.forRoot([
                    {path:'edit/:postId',component:AdvertisementEditComponent },
                    {path:'display', component:AdvertisementDisplayComponent},
                    {path:'add',component:AdvertisementAddComponent}
                  ])],
  declarations: [ AppComponent, 
                  AdvertisementAddComponent,
                  AdvertisementDisplayComponent,
                  AdvertisementEditComponent,
                  TemplateDrivenFormComponent,
                  ModelDrivenFormComponent,
                  ModelDrivenFormBuilderComponent,
                  SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

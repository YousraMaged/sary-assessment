import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FontAwesomeModule,
    ToastrModule
  ]
})
export class SharedModule { }
